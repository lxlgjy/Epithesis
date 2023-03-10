export interface useHome {
    MusicSwiperData: MusicSwiperData[]
    MusicRecommendData: MusicRecommendData[]
    MusicRankingData: MusicRankingData[]
    MusicLatestAlbum: MusicLatestAlbum[]
    MusicHotSinger: MusicHotSinger[]
}

interface MusicSwiperData {
    picUrl: string
    copywriter: string
}

interface MusicRecommendData {
    id: string
    coverImgUrl: string
    name: string
}

interface MusicRankingData {
    id: string
    coverImgUrl: string
}

interface MusicLatestAlbum {
    name: string
    id: string
    picUrl: string
    company: string
}

interface MusicHotSinger {
    id: string
    img1v1Url: string
}