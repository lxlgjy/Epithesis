import {defineStore} from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        MusicDate: '',
        MusicPHang:'',
        MusicList:'',
        MusicHomeRecommendation:'',
        MuiscDetail:'',
    }),
    actions: {
        getMusicDate(MusicList: any) {
            this.MusicDate = MusicList
        },
        getMusicPHang(MusicList:any) {
            this.MusicPHang = MusicList
        },
        getMuiscList(MuiscList:any){
          this.MusicList = MuiscList
        },
        getMusicHomeRecommendation(MusicList:any) {
            this.MusicHomeRecommendation = MusicList
        },
        getMusicHomeDetail(MusicList:any) {
            this.MuiscDetail = MusicList
        }

    },
    persist: {
        enabled: true,
        // 自定义持久化参数
        strategies: [
            {
                // 自定义key
                key: 'Music',
                // 自定义存储方式，默认sessionStorage
                storage: localStorage,
                // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
                paths: ['MusicDate','MusicPHang','MusicHomeRecommendation','MuiscDetail','MusicList'],
            }
        ]
    },
})