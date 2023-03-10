export interface useAxios {
    Search: Search
    Home: Home
}

interface Home {
    useHotSingerFetch: useHotSingerFetch
}

interface useHotSingerFetch {
    artists: []

}

interface Search {
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