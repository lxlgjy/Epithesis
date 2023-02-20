import useStore from "../../stores/counter";
import {publicPostFunction} from "../Axios";

export const AudioSongAxios = async (Api:string) => {
    const fetch = await publicPostFunction(Api) as object
    useStore().Audio.getMusicSong(fetch)
}
export const AudioLyricAxios = async(Api:string) => {
    const fetch = await publicPostFunction(Api) as object
    useStore().Audio.getMusicLyric(fetch)
}