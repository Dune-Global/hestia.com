import { z } from "zod";
import { passwordRegex, phoneNumberRegex } from "@/helpers/regex/common/common";

export const signUpSchema = z
  .object({
    fullName: z.string().min(2, {
      message: "Full name must be at least 2 characters.",
    }),
    userName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phoneNumber: z.string().refine((value) => phoneNumberRegex.test(value), {
      message: "Invalid Phone number",
    }),
    password: z.string().refine((value) => passwordRegex.test(value), {
      message:
        "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
    confirmPassword: z.string(),
    agree: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const signInSchemaLandLord = z.object({
  userName: z.string().min(1, {
    message: "Please enter your username",
  }),
  password: z.string().min(1, {
    message: "Please enter your password",
  }),
  rememberMe: z.boolean(),
});
