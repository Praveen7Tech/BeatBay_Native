declare global{
    interface SongProps{
        title: string
        image: any
        artist: string
    }
    
    interface MediaSectionProps{
        title: string
        data: SongProps[]
    }
}

export { }

