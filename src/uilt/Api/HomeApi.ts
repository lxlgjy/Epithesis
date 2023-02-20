import useStore from "../../stores/counter";
import {publicGetFunction, publicPostFunction} from '../Axios'


export const HomeSwiperAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    await useStore().Home.getMusicSwiperData(fetch)
}

export const HomeRecommendAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    await useStore().Home.getMusicRecommendData(fetch)
}

export const HomeRankingAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    await useStore().Home.getMusicRankingData(fetch)
}

export const HomeLatestAlbum = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as object
    await useStore().Home.getMusicLatestAlbum(fetch)
}
