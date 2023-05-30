import useStore from "../../stores/counter";
import {publicGetFunction} from '../Axios'

export const SingerAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    useStore().Singer.getMusicSingerArtists(fetch)
}