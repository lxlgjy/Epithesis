import {defineStore} from "pinia";


interface DetailSong {
    id?:string;
}

interface MusicSongsDetailList {
    DetailTitle:{}
    DetailSong: DetailSong[]
}

interface MusicLoveListId {

}

interface MusicStore {
    MusicSongsDetailList:MusicSongsDetailList;
    MusicLoveListId: MusicLoveListId[]
}

const useDetailStore = defineStore('Detail', {
    state: () => {
        return {
            MusicSongsDetailList:{} as MusicStore['MusicSongsDetailList'],
            MusicMV:[] as object,
            MusicLoveListId:[] as MusicStore['MusicLoveListId'],
            MusicCapabilities:{}
        }
    },
    actions:{
        getMusicSongsDetailList(data:MusicStore['MusicSongsDetailList']) {
            this.MusicSongsDetailList = data
        },
        getMusicMV(data:object) {
            this.MusicMV = data
        },
        getMusicCapabilities(data:object) {
            this.MusicCapabilities = data
        },
        getMusicLoveListId(data:MusicStore['MusicLoveListId']) {
            this.MusicLoveListId = data
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