import { z } from "zod";

export const EmailValidation = z.object({
  email: z.string().email(),
});

export const PasswordValidation = z.object({
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
});

export const VerificationCode = z.object({
  code: z.string().min(3, "Code is too short").max(8, "Code is too long"),
});
