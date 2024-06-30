import { z } from "zod";

export const RegistrationValidation = z.object({
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
  birthDate: z.string(),
  gender: z.enum(["male", "female"], {
    message: "Gender must be either Male or Female",
  }),
  toc: z.literal(true),
});
