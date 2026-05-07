import { z } from "zod";
export const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email format."),
    password: z.string()
    .min(1, "Password is required")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .min(8, "Password must be at least 8 characters"),
})

export type LoginFormData = z.infer<typeof loginSchema>;


export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email:z.string().min(1, "Email is required").email("Invalid email format."),
  password: z.string()
    .min(1, "Password is required")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .min(8, "Password must be at least 8 characters"),
});

export type SignUpFormData = z.infer<typeof signupSchema>