import {defineStore} from "pinia";
import i18n from "../i18n";

interface SettingState {
    LyricSize: string
    PageThemes: string
    Language: 'zh' | 'en' // 更改类型
}

const useSettingStore = defineStore('Setting', {
    state: (): SettingState => {
        return {
            LyricSize: 'font-size-middle',
            PageThemes: 'Light',
            Language: 'zh'
        }
    },
    actions: {
        setLyricSize(value: string) {
            this.LyricSize = value
        },
        setPageThemes(value: string) {
            this.PageThemes = value
        },
        setLanguage(value: 'zh' | 'en') {
            this.Language = value
            i18n.global.locale.value = value
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'MusicSetting',
                storage: window.localStorage,
                paths: ['LyricSize', 'PageThemes', 'Language']
            }
        ]
    }
})

export default useSettingStore