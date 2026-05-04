import google from "@/assets/icons/google.png"
import logo from "@/assets/icons/logo.png"


export const icons = {
    google,
    logo
} as const

export type IconKey = keyof typeof icons