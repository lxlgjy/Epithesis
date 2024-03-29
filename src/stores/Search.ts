import {defineStore} from "pinia";
import {usePiniaStore} from "../uilt/PiniaInterface/ContentPinia";
import {SearchHistory} from '../uilt/PiniaInterface/SearchInterface'

const useSearchStore = defineStore('Search', {
    state: () => {
        return {
            HotSearchList: [] as usePiniaStore['Search']['HotSearchList'],
            SearchHistory: [] as usePiniaStore['Search']['SearchHistory'],
            SearchTheList: [] as usePiniaStore['Search']['SearchTheList']
        }
    },
    actions: {
        getHotSearchList(data: usePiniaStore['Search']['HotSearchList']) {
            this.HotSearchList = data
        },
        getSearchHistory(data: SearchHistory) {
            this.SearchHistory.unshift(data)
        },
        setSearchHistory(data: usePiniaStore['Search']['SearchHistory']) {
            this.SearchHistory = data
        },
        getSearchTheList(data: usePiniaStore['Search']['SearchTheList']) {
            this.SearchTheList = data
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'MusicSearch',
                storage: window.sessionStorage,
                paths: ['HotSearchList', 'SearchTheList']
            },
            {
                key: 'MusicSearch',
                storage: window.localStorage,
                paths: ['SearchHistory']
            }
        ]
    }
})

export default useSearchStore