import {defineStore} from "pinia";
import {usePiniaStore} from "../uilt/PiniaInterface/ContentPinia";

const useHomeStore = defineStore('Home', {
    state: () => {
        return {
            MusicSwiperData: [] as usePiniaStore['Home']['MusicSwiperData'],
            MusicRecommendData: [] as usePiniaStore['Home']['MusicRecommendData'],
            MusicRankingData: [] as usePiniaStore['Home']['MusicRankingData'],
            MusicLatestAlbum: [] as usePiniaStore['Home']['MusicLatestAlbum'],
            MusicHotSinger: [] as usePiniaStore['Home']['MusicHotSinger']
        }
    },

    actions: {
        getMusicSwiperData(data: usePiniaStore['Home']['MusicSwiperData']) {
            this.MusicSwiperData = data
        },
        getMusicRecommendData(data: usePiniaStore['Home']['MusicRecommendData']) {
            this.MusicRecommendData = data
        },
        getMusicRankingData(data: usePiniaStore['Home']['MusicRankingData']) {
            this.MusicRankingData = data
        },
        getMusicLatestAlbum(data: usePiniaStore['Home']['MusicLatestAlbum']) {
            this.MusicLatestAlbum = data
        },
        getMusicHotSinger(data: usePiniaStore['Home']['MusicHotSinger']) {
            this.MusicHotSinger = data
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'MusicHomeData',
                storage: window.sessionStorage,
                paths: ['MusicSwiperData', 'MusicRecommendData', 'MusicRankingData', 'MusicLatestAlbum'],
            }
        ]
    },

})


export default useHomeStore