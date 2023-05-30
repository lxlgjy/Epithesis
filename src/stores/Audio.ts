import {defineStore} from "pinia";
import {usePiniaStore} from '../uilt/PiniaInterface/ContentPinia'
import {MusicSongNow} from "../uilt/PiniaInterface/Audiointerace";

const useAudioStore = defineStore('Audio', {
    state: () => {
        return {
            MusicSong: {} as usePiniaStore['Audio']['MusicSong'],
            MusicLyric: [] as usePiniaStore['Audio']['MusicLyric'],
            MusicSongNow: [] as usePiniaStore['Audio']['MusicSongNow'],
            PlayHistory: [] as usePiniaStore['Audio']['PlayHistory']
        }
    },
    actions: {
        getMusicSong(data: usePiniaStore['Audio']['MusicSong']) {
            this.MusicSong = data
        },
        getMusicLyric(data: usePiniaStore['Audio']['MusicLyric']) {
            this.MusicLyric = data
        },
        getMusicSongNow(data: MusicSongNow ) {
            this.MusicSongNow.push(data)
        },
        replaceMusicSongNow(data: MusicSongNow ) {
            let SongList: usePiniaStore['Audio']['MusicSongNow']  = []
            SongList.push(data)
            this.MusicSongNow = SongList
        },
        replaceMusicSongNowListPush(data: usePiniaStore['Audio']['MusicSongNow'] ) {
            this.MusicSongNow = data
        },
        setPlayHistory(data:usePiniaStore['Audio']['PlayHistory']) {
            this.PlayHistory = data
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