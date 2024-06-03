import { z } from "zod";

export const RegisterFomValue = z.object({
  firstName: z
    .string()
    .min(2, "First name is too short")
    .max(64, "First name is too long"),
  lastName: z
    .string()
    .min(2, "First name is too short")
    .max(64, "First name is too long"),
  email: z.string().email(),
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
  birthDate: z.date().refine((date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const isAgeValid =
      today.getMonth() > date.getMonth() ||
      (today.getMonth() === date.getMonth() &&
        today.getDate() >= date.getDate());

    return age > 18 || isAgeValid;
  }, "Your age must be 18"),
  gender: z.enum(["male", "female"], {
    message: "Gender must be either Male or Female",
  }),
});

export const PersonalInfoValue = z.object({
  firstName: z
    .string()
    .min(2, "First name is too short")
    .max(64, "First name is too long"),
  lastName: z
    .string()
    .min(2, "First name is too short")
    .max(64, "First name is too long"),
  birthDate: z.date().refine((date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const isAgeValid =
      today.getMonth() > date.getMonth() ||
      (today.getMonth() === date.getMonth() &&
        today.getDate() >= date.getDate());

    return age > 18 || isAgeValid;
  }, "Your age must be 18"),
  gender: z.enum(["male", "female"], {
    message: "Gender must be either Male or Female",
  }),
});

export const AccountInfoValue = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
});

export const EmailInfoValue = z.object({
  email: z.string().email(),
});

export const PasswordInfoValue = z.object({
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
});

export const CodeInfoValue = z.object({
  code: z.string().min(3, "Code is too short").max(8, "Code is too long"),
});
