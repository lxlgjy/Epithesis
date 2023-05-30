export interface Home {
    useHotSingerFetch: useHotSingerFetch
    useSwiperDataFetch:useSwiperDataFetch
    useRecommendDataFetch:useRecommendDataFetch
    useLatestAlbumFetch:useLatestAlbumFetch
    useRankingData:useRankingData
}


interface useHotSingerFetch {
    artists:[]
}

interface useSwiperDataFetch {
    result:[]
}

interface useRecommendDataFetch {
    playlists:[]
}

interface useRankingData {
    list:[]
}

interface useLatestAlbumFetch {
    albums:[]
}
