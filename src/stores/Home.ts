import {defineStore} from "pinia";

const useHomeStore = defineStore('Home', {
    state: () => {
        return {
            MusicSwiperData: [] as Object,
            MusicRecommendData: [] as Object,
            MusicRankingData: [] as Object,
            MusicLatestAlbum: [] as object,
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