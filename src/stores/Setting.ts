import {defineStore} from "pinia";

const useSettingStore = defineStore('Setting', {
    state: () => {
        return {
            LyricSize: '16px',
            PageThemes: 'Light'
        }
    },
    actions: {
        setLyricSize(value: string) {
            this.LyricSize = value
        },
        setPageThemes(value: string) {
            this.PageThemes = value
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'MusicSetting',
                storage: window.localStorage,
                paths: ['LyricSize', 'PageThemes']
            }
        ]
    }
})

export default useSettingStore