//后续在pinia中增加新数据更改interface
export interface usePiniaStore {
    Home: []
    Playlist: []
    Singer: []
    Detail: []
    Login: []
    Start: []
    Audio: []
    Mv: []
    Search: useSearch
}

interface useSearch {
    HotSearchList: HotSearchList[],
    SearchHistory: SearchHistory[],
    SearchTheList: SearchTheList[]
}

interface HotSearchList {
    searchWord: string
    score: string
}

interface SearchTheList {
    name: string
    id: string
    dt: number
    al: {
        picUrl: string
        name: string
    }
    ar: ar[]
}

interface ar {
    name: string
}

export interface SearchHistory {
    SearchForAValue: string
}