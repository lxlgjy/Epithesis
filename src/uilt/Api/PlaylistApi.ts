import useStore from "../../stores/counter";
import {publicGetFunction} from '../Axios'

export const PlayListTitleAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    useStore().Playlist.getMusicPlayListTitle(fetch)
}

export const PlayListAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    useStore().Playlist.getMusicPlayList(fetch)
}

