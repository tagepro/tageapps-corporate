// app/api/contact/route.ts

import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { mailTransporter } from "@/lib/mailer";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
  turnstileToken?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function verifyTurnstileToken(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY tanımlı değil.");
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  if (ip) {
    formData.append("remoteip", ip);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    }
  );

  return response.json();
}

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    const rate = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

    if (!rate.allowed) {
      return NextResponse.json(
        { message: "Çok sık deneme yapıldı. Lütfen daha sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const company = body.company?.trim() || "";
    const message = body.message?.trim() || "";
    const website = body.website?.trim() || "";
    const turnstileToken = body.turnstileToken?.trim() || "";

    // Honeypot
    if (website) {
      return NextResponse.json(
        { message: "Geçersiz istek." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { message: "Güvenlik doğrulaması eksik." },
        { status: 400 }
      );
    }

    const turnstile = await verifyTurnstileToken(turnstileToken, ip);

    console.log("TURNSTILE_VERIFY_RESULT:", turnstile);

    if (!turnstile.success) {
      return NextResponse.json(
        {
          message: "Güvenlik doğrulaması başarısız oldu.",
          errorCodes: turnstile["error-codes"] || [],
        },
        { status: 400 }
      );
    }

    if (!name || name.length < 2) {
      return NextResponse.json(
        { message: "Ad Soyad alanı geçerli olmalıdır." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Geçerli bir e-posta adresi giriniz." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { message: "Mesaj alanı en az 10 karakter olmalıdır." },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      email.length > 160 ||
      company.length > 160 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { message: "Gönderilen veri sınırı aşıldı." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@tageapps.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "info@tageapps.com";

    await mailTransporter.sendMail({
      from: `"Tage Website Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Web İletişim Formu | ${name}`,
      text: `
Yeni web form mesajı

Ad Soyad: ${name}
E-posta: ${email}
Şirket: ${company || "-"}
IP: ${ip}

Mesaj:
${message}
      `.trim(),
      html: `
        <h2>Yeni web form mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Şirket:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { ok: true, message: "Mesaj başarıyla alındı." },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);

    return NextResponse.json(
      {
        message: "İstek işlenemedi veya e-posta gönderilemedi.",
        detail: error instanceof Error ? error.message : "unknown_error",
      },
      { status: 400 }
    );
  }
}