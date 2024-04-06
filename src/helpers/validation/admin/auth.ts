import { z } from "zod";

export const signInSchemaAdmin = z.object({
  email: z.string().min(1, {
    message: "Please enter your email",
  }),
  password: z.string().min(1, {
    message: "Please enter your password",
  }),
  rememberMe: z.boolean(),
});
