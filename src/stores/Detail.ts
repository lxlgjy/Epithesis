import {defineStore} from "pinia";

const useDetailStore = defineStore('Detail', {
    state: () => {
        return {
            MusicSongsDetailList:[] as object,
            MusicMV:[] as object,
            MusicLoveListId:[] as Array<string>,
            MusicCapabilities:{}
        }
    },
    actions:{
        getMusicSongsDetailList(data:object) {
            this.MusicSongsDetailList = data
        },
        getMusicMV(data:object) {
            this.MusicMV = data
        },
        getMusicCapabilities(data:object) {
            this.MusicCapabilities = data
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'MusicDetail',
                storage:window.sessionStorage,
                paths:['MusicSongsDetailList' , 'MusicMV','MusicLoveListId','MusicCapabilities']
            }
        ]
    }
})

export default useDetailStore