import {defineStore} from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({

        MusicDate: ''

    }),
    actions: {
        getMusicDate(MusicList: any) {
            this.MusicDate = MusicList
        }
    },
    persist: {
        enabled: true,
        // 自定义持久化参数
        strategies: [
            {
                // 自定义key
                key: 'Music',
                // 自定义存储方式，默认sessionStorage
                storage: localStorage,
                // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
                paths: ['MusicDate'],
            }
        ]
    },
})