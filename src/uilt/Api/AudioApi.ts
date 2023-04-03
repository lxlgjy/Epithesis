import useStore from "../../stores/counter";
import {publicPostFunction ,publicGetFunction} from "../Axios";
import {lyric} from "../PageWidgets";
import {useAxios} from "../AxiosInterface/ContentApi";

export const AudioSongAxios = async (Api: string) => {
    await Cookie(Api , 'Song')
}
export const AudioLyricAxios = async (Api: string) => {
    await Cookie(Api , 'Lyric')
}

const Cookie = async(Api:string , type:string) => {
    const cookie =  localStorage.getItem('cookie')
    if(cookie === null) {
        await SongAndLyric('GET' , Api , type)
    } else {
        await SongAndLyric('POST' , Api , type)
    }
}

const SongAndLyric = async(fetch:string , Api:string , type:string) => {
    if(fetch === 'GET') {
        if(type === 'Song') {
            const useMusicSongFetch = await publicGetFunction(Api) as useAxios['Audio']['MusicSong']
            useStore().Audio.getMusicSong(useMusicSongFetch)

        } else if(type === 'Lyric') {
            const useMusicLyricFetch = await publicGetFunction(Api) as useAxios['Audio']['MusicLyric']
            const MusicLyric = await lyric(useMusicLyricFetch) as useAxios['Audio']['MusicLyric']
            useStore().Audio.getMusicLyric(MusicLyric)

        } else {
            return false
        }

    } else if(fetch === 'POST') {
        if(type === 'Song') {
            const useMusicSongFetch = await publicPostFunction(Api) as useAxios['Audio']['MusicSong']
            useStore().Audio.getMusicSong(useMusicSongFetch)

        } else if(type === 'Lyric') {
            const useMusicLyricFetch = await publicPostFunction(Api) as useAxios['Audio']['MusicLyric']
            const MusicLyric = await lyric(useMusicLyricFetch) as useAxios['Audio']['MusicLyric']
            useStore().Audio.getMusicLyric(MusicLyric)

        } else {
            return false
        }
    } else {
        return false
    }
}

// 无版权
const zanwubanquan = () => {
    // await Axios(`/check/music?id=${id}`, 'VerifyThatTheMusicIsAvailable') 
}
