import useStore from "../../stores/counter";
import {publicPostFunction} from "../Axios";
import {lyric} from "../PageWidgets";

export const AudioSongAxios = async (Api:string) => {
    const fetch = await publicPostFunction(Api) as object
    useStore().Audio.getMusicSong(fetch)
}
export const AudioLyricAxios = async(Api:string) => {
    const fetch = await publicPostFunction(Api) as object
    const MusicLyric =await lyric(fetch)
    useStore().Audio.getMusicLyric(MusicLyric)
}

const NotCookieAxios = async () => {

}