import {
  passwordRegex,
  phoneNumberRegex,
  universityEmailRegex,
} from "@/helpers/regex/common/common";
import { z } from "zod";

export const signInSchemaStudent = z.object({
  email: z.string().min(1, {
    message: "Please enter your email",
  }),
  password: z.string().min(1, {
    message: "Please enter your password",
  }),
  rememberMe: z.boolean(),
});

export const registerSchemaStudent = z
  .object({
    firstName: z.string().min(1, {
      message: "Enter a valid first name",
    }),
    lastName: z.string().min(1, {
      message: "Enter a valid last name",
    }),
    userName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    universityEmail: z
      .string()
      .email()
      .refine((value) => universityEmailRegex.test(value), {
        message: "Only NSBM email addresses are allowed.",
      }),
    phoneNumber: z.string().refine((value) => phoneNumberRegex.test(value), {
      message: "Invalid Phone number",
    }),
    password: z.string().refine((value) => passwordRegex.test(value), {
      message:
        "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
