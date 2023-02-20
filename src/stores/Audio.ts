import {defineStore} from "pinia";

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
        clearMusicSongNow() {
            this.MusicSongNow = []
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