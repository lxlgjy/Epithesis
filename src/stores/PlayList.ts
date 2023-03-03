import {defineStore} from "pinia";

const usePlayListStore = defineStore('Playlist', {
    state: () => {
        return {
            MusicPlayList: [] as object,
            MusicPlayListTitle: [] as object,
        }
    },
    actions: {
        getMusicPlayList(data: Object) {
            this.MusicPlayList = data
        },
        getMusicPlayListTitle(data: Object) {
            this.MusicPlayListTitle = data
        },
        AddMusicPlayList(data:object) {
            // this.MusicPlayList.push(data)
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