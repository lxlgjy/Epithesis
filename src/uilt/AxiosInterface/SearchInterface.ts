export interface Search {
    useHotSearchFetch: useHotSearchFetch,
    useSearchSongListFetch: useSearchSongListFetch
}

interface useHotSearchFetch {
    data: []
}

interface useSearchSongListFetch {
    result: {
        songs: []
    }
}