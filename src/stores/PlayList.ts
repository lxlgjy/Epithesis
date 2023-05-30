import {defineStore} from "pinia";
import {ApiPlayList} from "../uilt/Api/PlaylistApi";

//预留接口

interface MusicPLayListAdd {
    id:string,
    name:string
}
interface MusicPlayList {
    MusicPlayList:MusicPLayListAdd[],
    MusicPlayListTitle:[],
    MusicPlayHistory:[]
}

export interface MusicStore {
    MusicStore:MusicPlayList
}

const usePlayListStore = defineStore('Playlist', {
    state: () => {
        return {
            MusicPlayList: [] as MusicStore['MusicStore']['MusicPlayList'],
            MusicPlayListTitle: [] as MusicStore['MusicStore']['MusicPlayListTitle'],
            MusicPlayHistory:[] as MusicStore['MusicStore']['MusicPlayHistory']
        }
    },
    actions: {
        getMusicPlayList(data: MusicStore['MusicStore']['MusicPlayList']) {
            this.MusicPlayList = data
        },
        getMusicPlayListTitle(data: MusicStore['MusicStore']['MusicPlayListTitle']) {
            this.MusicPlayListTitle = data
        },
        AddMusicPlayList(data:ApiPlayList['AllMusicListData']['AddPlayList']) {
            this.MusicPlayList.push(data)
        },
        setMusicPlayHistory(data:MusicStore['MusicStore']['MusicPlayHistory']) {
            this.MusicPlayHistory = data
        }

    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'MusicPlayListData',
                storage: window.sessionStorage,
                paths: ['MusicPlayList','MusicPlayListTitle']
            }
        ]

    }
})

export default usePlayListStore