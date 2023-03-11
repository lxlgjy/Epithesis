import {defineStore} from "pinia";

const useSettingStore = defineStore('Setting', {
    state: () => {
        return {
            Language: '汉语', //语言
            Topic: 'light', //主题
            MusicQuality: '高', // 音乐品质
            LyricSize: '16px', //歌词大小
            DoubleClickThePlaybackMode: '单曲', //双击播放模式
            PlayBackgroundCustomization: '', // 播放背景自定义
            BackgroundBokeh: false, // 背景虚化
            more: '' // 更多
        }
    },
    actions: {
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
                key: 'MusicSetting',
                storage: window.localStorage,
                paths: ['Language', 'MusicQuality', 'LyricSize']
            }
        ]
    }
})

export default useSettingStore