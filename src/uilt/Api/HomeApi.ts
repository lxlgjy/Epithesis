import useStore from "../../stores/counter";
import {publicGetFunction} from '../Axios'
import {useAxios} from "../AxiosInterface/ContentApi";
import {usePiniaStore} from "../PiniaInterface/ContentPinia";


export const HomeSwiperAxios = async (Api: string) => {
    const MusicSwiperData = await publicGetFunction(Api) as useAxios['Home']['useSwiperDataFetch']
    await useStore().Home.getMusicSwiperData(MusicSwiperData.result)
}

export const HomeRecommendAxios = async (Api: string) => {
    const MusicRecommendData = await publicGetFunction(Api) as useAxios['Home']['useRecommendDataFetch']
    await useStore().Home.getMusicRecommendData(MusicRecommendData.playlists)
}

export const HomeRankingAxios = async (Api: string) => {
    const MusicRankingData = await publicGetFunction(Api) as useAxios['Home']['useRankingData']
    await useStore().Home.getMusicRankingData(MusicRankingData.list)
}

export const HomeLatestAlbum = async (Api: string) => {
    const MusicLatestAlbum = await publicGetFunction(Api) as useAxios['Home']['useLatestAlbumFetch']
    await useStore().Home.getMusicLatestAlbum(MusicLatestAlbum.albums)
}

export const HomeHotSinger = async (Api: string) => {
    const useHotSingerFetch = await publicGetFunction(Api) as useAxios['Home']['useHotSingerFetch']
    useStore().Home.getMusicHotSinger(useHotSingerFetch.artists)
}