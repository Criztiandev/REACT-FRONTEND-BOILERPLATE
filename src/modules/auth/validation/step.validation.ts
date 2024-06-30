import { z } from "zod";

export const PersonalInfoValidation = z.object({
  firstName: z
    .string()
    .min(2, "First name is too short")
    .max(64, "First name is too long"),
  lastName: z
    .string()
    .min(2, "First name is too short")
    .max(64, "First name is too long"),
  birthDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Expected a valid date string",
    })
    .transform((val) => new Date(val))
    .refine(
      (date) => {
        const now = new Date();
        const age = now.getFullYear() - date.getFullYear();
        const monthDiff = now.getMonth() - date.getMonth();
        const dayDiff = now.getDate() - date.getDate();
        return (
          age > 18 ||
          (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
        );
      },
      {
        message: "Date must be at least 18 years old",
      },
    ),
  gender: z.enum(["male", "female"], {
    message: "Gender must be either Male or Female",
  }),
});

export const AccountInfoValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
  toc: z.literal<boolean>(true, {
    errorMap: () => ({ message: "Terms and Condition must be accepted" }),
  }),
});
