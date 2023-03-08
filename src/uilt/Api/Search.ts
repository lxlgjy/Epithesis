import {publicGetFunction} from "../Axios";
import useStore from "../../stores/counter";
import {useAxios} from '../Api'

export const useSearchAxios = async (Api: string) => {
    const useHotSearchFetch = await publicGetFunction(Api) as useAxios['Search']['useHotSearchFetch']
    useStore().Search.getHotSearchList(useHotSearchFetch.data)
}

export const useSearchSongListAxios = async (Api: string) => {
    const useSearchSongListFetch = await publicGetFunction(Api) as useAxios['Search']['useSearchSongListFetch']
    useStore().Search.getSearchTheList(useSearchSongListFetch.result.songs)
}

