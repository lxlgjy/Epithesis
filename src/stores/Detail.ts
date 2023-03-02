import {defineStore} from "pinia";
import {MusicDetailData} from "../uilt/Api/DetailApi";


interface DetailSong {
    id?:string;
}

interface Capabilities {
    al:{
        id:string
        name:string
    }
    id:string
    name:string
}

interface MusicSongsDetailList {
    DetailTitle:MusicDetailData
    DetailSong: DetailSong[]
}

interface MusicLoveListId {}


export interface MusicStore {
    MusicSongsDetailList:MusicSongsDetailList;
    MusicLoveListId: MusicLoveListId[];
    MusicCapabilities: Capabilities;
    MusicAlbumSong: MusicSongsDetailList
}

const useDetailStore = defineStore('Detail', {
    state: () => {
        return {
            MusicSongsDetailList:{} as MusicStore['MusicSongsDetailList'],
            MusicMV:[] as object,
            MusicLoveListId:[] as MusicStore['MusicLoveListId'],
            MusicCapabilities: {} as MusicStore['MusicCapabilities'],
            MusicAlbumSong:{} as MusicStore['MusicAlbumSong']
        }
    },
    actions:{
        getMusicSongsDetailList(data:MusicStore['MusicSongsDetailList']) {
            this.MusicSongsDetailList = data
        },
        getMusicMV(data:object) {
            this.MusicMV = data
        },
        getMusicCapabilities(data:MusicStore['MusicCapabilities']) {
            this.MusicCapabilities = data
        },
        getMusicLoveListId(data:MusicStore['MusicLoveListId']) {
            this.MusicLoveListId = data
        },
        getMusicAlbumSong(data:MusicStore['MusicAlbumSong']) {
            this.MusicAlbumSong = data
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