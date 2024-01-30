import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Please enter a valid email.",
    })
    .refine((data) => !!data, {
      message: "Email is required.",
    }),
  password: z.string().refine((data) => !!data, {
    message: "Password is required.",
  }),
});
