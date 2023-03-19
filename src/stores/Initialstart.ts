import {defineStore} from "pinia";

const useStartStore = defineStore('Start', {
    state: () => {
        return {
            LoginShow: true as Boolean,
            PageShow: true as Boolean,
            HomeDetail: true as Boolean,
            LoginAvatar: false as Boolean,
            MusicData: false as Boolean,
            AudioShow: false as Boolean,
            AudioSongIndex: 0 as number,
            MusicNotice: '' as string,
            PlayList: 1 as number,
            AudioMode: 2 as number,
            AudioModeRandomList: [] as Array<number>,
            PlayListLoading: false as Boolean,
            BackgroundIndex: 0 as number,
            ThemesBoolean: false, //主题
            //设置信息
            Language: '汉语', //语言
            Topic: 'light', //主题
            MusicQuality: 'standard', // 音乐品质
            LyricSize: '16px', //歌词大小
            DoubleClickThePlaybackMode: '单曲', //双击播放模式
            PlayBackgroundCustomization: '', // 播放背景自定义
            BackgroundBokeh: false, // 背景虚化
            more: '' // 更多
        }
    },
    actions: {
        ToggleLoginShow(boolean: Boolean) {
            this.LoginShow = boolean
        },
        TogglePageShow(boolean: Boolean) {
            this.PageShow = boolean
        },
        ToggleLoginAvatar(boolean: Boolean) {
            this.LoginAvatar = boolean
        },
        ToggleMusicData(boolean: Boolean) {
            this.MusicData = boolean
        },
        ToggleAudioShow(boolean: Boolean) {
            this.AudioShow = boolean
        },
        AddAudioIndex() {
            this.AudioSongIndex++
        },
        AddPlayList() {
            this.PlayList++
        },
        subtractAudioIndex() {
            this.AudioSongIndex--
        },
        reviseMusicNotice(message: string) {
            this.MusicNotice = message
        },
        addPlayList(index: number) {
            this.PlayList = index
        },
        ToggleAudioMode(data: number) {
            this.AudioMode = data
        },
        reviseAudioModeRandomList(data: Array<number>) {
            this.AudioModeRandomList = data
        },
        TogglePlayListLoading(data: Boolean) {
            this.PlayListLoading = data
        },
        ToggleBackgroundIndex(type: string) {
            if (type === 'add') {
                this.BackgroundIndex < 11 ? this.BackgroundIndex++ : this.BackgroundIndex = 0
            } else if (type === 'sub') {
                this.BackgroundIndex > 0 ? this.BackgroundIndex-- : this.BackgroundIndex = 12
            } else if ('start') {
                return false
            } else if ('GoBeyond') {
                this.BackgroundIndex = 0
            } else {
                return false
            }
        },
        setLanguage(value: string) {
            this.Language = value
        },
        setMusicQuality(value: string) {
            this.MusicQuality = value
        },
        setLyricSize(value: string) {
            this.LyricSize = value
        },
        setDoubleClickThePlaybackMode(value: string) {
            this.Language = value
        },

    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'Start',
                storage: window.localStorage,
                paths: ['LoginShow', 'LoginAvatar', 'Language', 'MusicQuality', 'LyricSize', 'ThemesBoolean']
            },
            {
                key: 'startSession',
                storage: window.sessionStorage,
                paths: ['HomeDetail', 'AudioShow', 'PageShow', 'AudioSongIndex', 'PlayList', 'AudioMode', 'AudioModeRandomList', 'AudioMode', 'BackgroundIndex']
            }
        ]
    }
})

export default useStartStore