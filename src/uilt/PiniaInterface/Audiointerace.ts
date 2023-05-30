export interface useAudio {
    MusicSong:MusicSong
    MusicLyric:MusicLyric[]
    MusicSongNow:MusicSongNow[]
    PlayHistory:PlayHistory[]

}

interface MusicSong {
    data:data[]
}

interface data {
    url:string,
    id:number
}

interface MusicLyric {

}
export interface MusicSongNow {
    id:string
}

interface  PlayHistory {

}