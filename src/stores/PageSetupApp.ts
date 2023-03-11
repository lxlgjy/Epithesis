import {defineStore} from "pinia";

const useSetupStore = defineStore('PageSetupApp', {
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
                key: 'MusicSetupApp',
                storage: window.localStorage,
                paths: ['LyricSize', 'PageThemes']
            }
        ]
    }
})

export default useSetupStore