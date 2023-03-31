import useStore from "../../stores/counter";
import {publicGetFunction} from '../Axios'

export const SingerAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    useStore().Singer.getMusicSingerArtists(fetch)
}

export const SIngerAddressAxios = async (Api: string) => {
    const SingerFetch = await publicGetFunction(Api)
}