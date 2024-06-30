import { z } from "zod";

const UserValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(64, "First name must be 64 characters or less"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(64, "Last name must be 64 characters or less"),
  email: z
    .string()
    .email("Invalid email address")
    .min(3, "Email must be at least 3 characters")
    .max(254, "Email must be 254 characters or less"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be 128 characters or less")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),

  phoneNumber: z
    .string()
    .min(8, "Invalid Phone number")
    .max(11, "Phone number is too long")
    .regex(
      /^(09|\+639)\d{9}$/,
      "Invalid Philippine phone number. Format should be 09XXXXXXXXX or +639XXXXXXXXX",
    ),

  dateOfBirth: z.coerce.date().refine((date) => {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
  }, "You must be at least 18 years old"),
});

export default UserValidationSchema;
