// app/layout.tsx

// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tage Yazılım",
  description:
    "Kurumsal yazılım, süreç görünürlüğü ve dijital dönüşüm odaklı çözümler geliştiren teknoloji şirketi.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={poppins.className}>
        <div className="min-h-screen bg-white text-slate-900 antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}