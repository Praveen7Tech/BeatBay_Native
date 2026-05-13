import { House, Library, Plus, PlusSquare, Search } from "lucide-react-native"
import { songs, Users } from "./icons"

export const tabs = [
    {name: "home", title: "Home", icon: House},
    {name: "search", title: "Search", icon: Search},
    {name: "library", title: "Library", icon: Library},
    {name: "premium", title: "Premium", icon: PlusSquare},
    {name: "create", title: "Create", icon: Plus}
]

export const navOptions = [
    {name: "song 1", Image: songs.song1},
    {name: "song 2", Image: songs.song2},
    {name: "song 3", Image: songs.song3}
]

export const SongList = [
    {title: "song 1", image: songs.song1, artist: "Artist 1"},
    {title: "song 2", image: songs.song2, artist: "Artist 2"},
    {title: "song 3", image: songs.song3, artist: "Artist 3"},
    {title: "song 4", image: songs.song1, artist: "Artist 4"}
]


export const playlist = [
  {
    id: "1",
    title: "Munbe Vaa",
    artist: "Shreya Ghoshal",
    duration: "04:28",
    image: songs.song1,
  },
  {
    id: "2",
    title: "Why This Kolaveri",
    artist: "Dhanush",
    duration: "03:44",
    image: songs.song2,
  },
  {
    id: "3",
    title: "Arabic Kuthu",
    artist: "Anirudh",
    duration: "04:12",
    image: songs.song3,
  },
  {
    id: "4",
    title: "Hukum",
    artist: "Anirudh",
    duration: "03:58",
    image: songs.song1,
  },
  {
    id: "5",
    title: "Naan Ready",
    artist: "Thalapathy Vijay",
    duration: "04:05",
    image: songs.song2,
  },
  {
    id: "6",
    title: "Vaathi Coming",
    artist: "Anirudh",
    duration: "03:49",
    image: songs.song3,
  },
  {
    id: "7",
    title: "Beast Mode",
    artist: "Anirudh",
    duration: "04:01",
    image: songs.song1,
  },
  {
    id: "8",
    title: "Adiye",
    artist: "Sid Sriram",
    duration: "05:02",
    image: songs.song2,
  },
  {
    id: "9",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "04:20",
    image: songs.song3,
  },
  {
    id: "10",
    title: "Samajavaragamana",
    artist: "Sid Sriram",
    duration: "03:55",
    image: songs.song1,
  },
];

export const members = [
  {
    id: "1",
    name: "Arjun",
    role: "Admin",
    image: Users.avathar,
  },
  {
    id: "2",
    name: "Rahul",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "3",
    name: "Sneha",
    role: "Singer",
    image: Users.avathar,
  },
  {
    id: "4",
    name: "Akash",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "5",
    name: "Nithya",
    role: "Moderator",
    image: Users.avathar,
  },
  {
    id: "6",
    name: "Vishnu",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "7",
    name: "Keerthana",
    role: "Singer",
    image: Users.avathar,
  },
  {
    id: "8",
    name: "Ameen",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "9",
    name: "Roshan",
    role: "DJ",
    image: Users.avathar,
  },
  {
    id: "10",
    name: "Megha",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "11",
    name: "Fahad",
    role: "Singer",
    image: Users.avathar,
  },
  {
    id: "12",
    name: "Aiswarya",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "13",
    name: "Jithin",
    role: "Moderator",
    image: Users.avathar,
  },
  {
    id: "14",
    name: "Alan",
    role: "Listener",
    image: Users.avathar,
  },
  {
    id: "15",
    name: "Diya",
    role: "Singer",
    image: Users.avathar,
  },
];


