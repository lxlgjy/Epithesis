import {defineStore} from "pinia";
import {usePiniaStore} from "../uilt/Pinia";

const useHomeStore = defineStore('Home', {
    state: () => {
        return {
            MusicSwiperData: [] as Object,
            MusicRecommendData: [] as Object,
            MusicRankingData: [] as Object,
            MusicLatestAlbum: [] as object,
            MusicHotSinger: [] as usePiniaStore['Home']['MusicHotSinger']
        }
    },

    actions: {
        getMusicSwiperData(data: object) {
            this.MusicSwiperData = data
        },
        getMusicRecommendData(data: object) {
            this.MusicRecommendData = data
        },
        getMusicRankingData(data: object) {
            this.MusicRankingData = data
        },
        getMusicLatestAlbum(data: object) {
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