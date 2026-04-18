// lib/mailer.ts

import nodemailer from "nodemailer";

const smtpHost = process.env.ZOHO_SMTP_HOST;
const smtpPort = Number(process.env.ZOHO_SMTP_PORT || 465);
const smtpSecure = process.env.ZOHO_SMTP_SECURE === "true";
const smtpUser = process.env.ZOHO_SMTP_USER;
const smtpPass = process.env.ZOHO_SMTP_PASS;

if (!smtpHost || !smtpUser || !smtpPass) {
  console.warn("Zoho SMTP environment variables are missing.");
}

export const mailTransporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});