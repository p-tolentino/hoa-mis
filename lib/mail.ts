import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "DLSU CAP-2232 <onboarding@resend.dev>",
    to: email,
    subject: "[HOA-MIS] Two-Factor Authentication Code",
    html: `<p>Your Two-Factor Authentication Code is: ${token}</p>`,
  });
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/new-password?token=${token}`;

  await resend.emails.send({
    from: "DLSU CAP-2232 <onboarding@resend.dev>",
    to: email,
    subject: "[HOA-MIS] Forgot password - reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

  await resend.emails.send({
    from: "DLSU CAP-2232 <onboarding@resend.dev>",
    to: email,
    subject: "[HOA-MIS] Email verification - Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
  });
};
