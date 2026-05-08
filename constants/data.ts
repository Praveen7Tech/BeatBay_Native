import { House, Library, Plus, PlusSquare, Search } from "lucide-react-native"
import { songs } from "./icons"
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