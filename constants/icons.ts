import google from "@/assets/icons/google.png";
import logo from "@/assets/icons/logo.png";
import song3 from "@/assets/images/songs/Ranam.jpg";
import song1 from "@/assets/images/songs/newyok .jpeg";
import song2 from "@/assets/images/songs/vettom.webp";
import avathar from "@/assets/images/user/ani best.jpeg";


export const icons = {
    google,
    logo
} as const

export type IconKey = keyof typeof icons;

export const songs = {
    song1, song2, song3
} as const

export type SongKey = keyof typeof songs;

export const Users={
    avathar
} 
export type UserKey = keyof typeof Users