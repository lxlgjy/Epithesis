export interface useSearch {
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