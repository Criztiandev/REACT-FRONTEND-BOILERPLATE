import { z } from "zod";

export const loginValidation = z.object({
  email: z.string().email().max(255, "Email is too long"),
  password: z.string().min(8, "Password to short").max(15, "Password too long"),
});
