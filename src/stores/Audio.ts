import {defineStore} from "pinia";

export interface MusicSongNow {
    id:string
}

interface useAudioStore {
    MusicSong:[]
    MusicLyric:[]
    MusicSongNow:MusicSongNow[]
}

const useAudioStore = defineStore('Audio', {
    state: () => {
        return {
            MusicSong: [] as useAudioStore['MusicSong'],
            MusicLyric: [] as useAudioStore['MusicLyric'],
            MusicSongNow: [] as useAudioStore['MusicSongNow']
        }
    },
    actions: {
        getMusicSong(data: useAudioStore['MusicSong']) {
            this.MusicSong = data
        },
        getMusicLyric(data: useAudioStore['MusicLyric']) {
            this.MusicLyric = data
        },
        getMusicSongNow(data: MusicSongNow) {
            this.MusicSongNow.push(data)
        },
        replaceMusicSongNow(data: MusicSongNow) {
            let SongList: useAudioStore['MusicSongNow'] = []
            SongList.push(data)
            this.MusicSongNow = SongList
        },
        replaceMusicSongNowListPush(data: useAudioStore['MusicSongNow']) {
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