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

export const registerSchema = z
  .object({
    first_name: z.string().refine((data) => !!data, {
      message: "First name is required.",
    }),
    last_name: z.string().refine((data) => !!data, {
      message: "Last name is required.",
    }),
    email: z.string().email({
      message: "Please enter a valid email.",
    }),
    phone: z.string().refine((data) => !!data, {
      message: "Phone number is required.",
    }),
    password: z.string().refine((data) => !!data, {
      message: "Password is required.",
    }),
    confirm_password: z
      .string()
      .refine((data) => !!data, { message: "Confirm password is required." }),
    role: z.string().refine((data) => !!data, {
      message: "Role is required.",
    }),
  })
  .superRefine((data) => {
    if (data.password !== data.confirm_password) {
      return {
        message: "Passwords do not match.",
        path: ["confirm_password"],
      };
    }
    return null;
  });
