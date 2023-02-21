import {defineStore} from "pinia";
import {AudioListPush} from "../uilt/VueIncident";

const useAudioStore = defineStore('Audio', {
    state: () => {
        return {
            MusicSong: [] as object,
            MusicLyric: [] as object,
            MusicSongNow: [] as Array<object>
        }
    },
    actions: {
        getMusicSong(data: object) {
            this.MusicSong = data
        },
        getMusicLyric(data: object) {
            this.MusicLyric = data
        },
        getMusicSongNow(data: object) {
            this.MusicSongNow.push(data)
        },
        replaceMusicSongNow(data: object) {
            let SongList: Array<object> = []
            SongList.push(data)
            this.MusicSongNow = SongList
        },
        replaceMusicSongNowListPush(data: Array<object>) {
            this.MusicSongNow = data
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'MusicAudio',
                storage: window.sessionStorage,
                paths: ['MusicSong', 'MusicLyric', 'MusicSongNow']
            }
        ]
    }
})

export default useAudioStore