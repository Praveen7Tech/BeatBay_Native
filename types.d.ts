declare global{
    interface SongProps{
        id: string
        title: string
        image: any
        artist: string
    }
    
    interface MediaSectionProps{
        title: string
        data: SongProps[]
        OnItemPress:(item:SongProps)=> void
    }

    type Member = {
        id: string
        name: string
        image: any
        role: string
    }

    type PlayList={
        id: string
        title: string
        artist: string
        duration: string
        image: any
    }

     interface Friend {
      id: string
      name: string
      image: any
      status: 'online' | 'offline'
    }

    interface SongCrad{
        id: string;
        title: string
    }
}
export { }

