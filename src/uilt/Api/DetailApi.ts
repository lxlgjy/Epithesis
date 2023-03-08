import useStore from "../../stores/counter";
import {publicGetFunction, publicPostFunction} from "../Axios";


// All interfaces on the details page are type-defined
interface DetailApi {
    DetailAxios: Detail,
}

// 放入详情数据类型定义
export interface MusicDetailData {
    img: string,
    title: string,
    Label: Array<string>,
    BriefIntroduction: string,
    MusicLength: string
}

// 歌手
interface TitleFace {
    data: {
        artist: {
            cover: string;
            name: string;
            identities: Array<string>;
            briefDesc: string;
        },
        dailySongs: titleHome[],
    },
    playlist: {
        coverImgUrl: string;
        name: string;
        tags: Array<string>;
        description: string;
        trackIds: Array<string>
        tracks: Array<object>
    },
    album: {
        picUrl: string;
        name: string;
        description: string;
    },
    songs: []
}

interface titleHome {
    id: string;
    al: {
        picUrl: string
    };
    name: string
}

interface SongsFace {
    hotSongs: [];
    songs: [];
    result: {
        songs: []
    }

}

interface Detail {
    DetailAxiosTitle: TitleFace;
    DetailAxiosSongs: SongsFace
}

const DetailTitle = (img: string, title: string, Label: Array<string>, BriefIntroduction: string, MusicLength: string) => {
    return new Promise(resolve => {
        resolve({img, title, Label, BriefIntroduction, MusicLength})
    })
}

export const DetailSingerAxios = async (detail: string, detailSongs: string) => {
    const fetchDetail = await publicGetFunction(detail) as DetailApi['DetailAxios']['DetailAxiosTitle']
    const fetchDetailSongs = await publicGetFunction(detailSongs) as DetailApi['DetailAxios']['DetailAxiosSongs']

    const fetchTitle = await DetailTitle(fetchDetail.data.artist.cover, fetchDetail.data.artist.name, fetchDetail.data.artist.identities, fetchDetail.data.artist.briefDesc, '播放全部' + fetchDetailSongs.hotSongs.length) as MusicDetailData

    useStore().Detail.getMusicSongsDetailList({DetailTitle: fetchTitle, DetailSong: fetchDetailSongs.hotSongs})
}


export const DetailPlaylistAxios = async (detail: string, id: string) => {
    const fetchDetail = await publicGetFunction(detail) as DetailApi['DetailAxios']['DetailAxiosTitle']

    const fetchDetailSongs = await publicGetFunction(`/playlist/track/all?id=${id}&limit=${fetchDetail.playlist.trackIds.length}&offset=0`) as DetailApi['DetailAxios']['DetailAxiosSongs']

    const fetchTitle = await DetailTitle(fetchDetail.playlist.coverImgUrl, fetchDetail.playlist.name, fetchDetail.playlist.tags, fetchDetail.playlist.description, '播放全部' + fetchDetail.playlist.trackIds.length) as MusicDetailData

    useStore().Detail.getMusicSongsDetailList({DetailTitle: fetchTitle, DetailSong: fetchDetailSongs.songs})
}

export const DetailHomeAxios = async (detail: string, id: string, type: string) => {
    if (type === 'GetTheSongsDirectly') {
        const fetchDetail = await publicPostFunction(detail) as DetailApi['DetailAxios']['DetailAxiosTitle']

        const fetchTitle = await DetailTitle(fetchDetail.data.dailySongs[0].al.picUrl, fetchDetail.data.dailySongs[0].name, ['每日', '推荐'], '音乐是灵魂的食粮,是情感的表达,是生活的调味.在这里,你可以找到属于你的声音,让它陪伴你走过每一个时刻.', '播放全部' + fetchDetail.data.dailySongs.length) as MusicDetailData

        const fetchSong = fetchDetail.data.dailySongs // 特殊，没有简介，自己瞎编

        useStore().Detail.getMusicSongsDetailList({DetailTitle: fetchTitle, DetailSong: fetchSong})
    } else if (type === 'DoNotGetTheSongsDirectly') {
        const fetchDetail = await publicGetFunction(detail) as DetailApi['DetailAxios']['DetailAxiosTitle']

        const fetchTitle = await DetailTitle(fetchDetail.playlist.coverImgUrl, fetchDetail.playlist.name, fetchDetail.playlist.tags || ['每日', '精选'], fetchDetail.playlist.description, '播放全部' + fetchDetail.playlist.tracks.length) as MusicDetailData

        useStore().Detail.getMusicSongsDetailList({DetailTitle: fetchTitle, DetailSong: fetchDetail.playlist.tracks})
    } else {
        const fetchDetail = await publicGetFunction(detail) as DetailApi['DetailAxios']['DetailAxiosTitle']

        const fetchTitle = await DetailTitle(fetchDetail.album.picUrl, fetchDetail.album.name, ['专辑', '最新'], fetchDetail.album.description, '播放全部' + fetchDetail.songs.length) as MusicDetailData

        useStore().Detail.getMusicAlbumSong({DetailTitle: fetchTitle, DetailSong: fetchDetail.songs})

    }

}

export const DetailMVAxios = async (detail: string, id: string) => {
    const fetchDetail = await publicGetFunction(detail)

    const fetchAddress = await publicGetFunction(`/mv/url?id=${id}`)

    await useStore().Detail.getMusicMV({fetchDetail, fetchAddress})
}

// ThatLove 特殊，单独使用interface 接口定义
interface playlist {
    id: string
}

interface FetchThatLove {
    playlist: playlist[]
}

interface songs {
    id: string
    al: {
        picUrl: string
    }
}

interface FetchThatLoveSong {
    songs: songs[]
}

export const DetailThatLove = async () => {
    const id = useStore().Login.MusicUname.userId
    const fetchDetail = await publicPostFunction(`/user/playlist?uid=${id}`) as FetchThatLove
    const fetchSongs = await publicPostFunction(`/playlist/track/all?id=${fetchDetail.playlist[0].id}&timestamp=${Date.now()}`) as FetchThatLoveSong

    const fetchTitle: MusicDetailData = {
        img: fetchSongs?.songs[0].al.picUrl,
        title: '我喜欢的音乐',
        Label: ['喜欢', '个人'],
        BriefIntroduction: '每当我打开我的音乐库，都像是进入了一个神秘的音乐王国，我可以尽情享受其中的声音和旋律',
        MusicLength: '播放全部' + fetchSongs.songs.length
    }

    await useStore().Detail.getMusicSongsDetailList({DetailTitle: fetchTitle, DetailSong: fetchSongs.songs})
}

// 添加喜欢
export const LoveSongs = async (Api: string, id: string, type: string) => {
    if (type === 'true') {
        await publicPostFunction(Api)
        useStore().Detail.MusicLoveListId.push(id)
    } else {
        await publicPostFunction(Api)
        let arr: Array<any> = []
        useStore().Detail.MusicLoveListId.forEach(item => {
            if (item !== id) {
                arr.push(item)
            }
        })
        useStore().Detail.MusicLoveListId = arr
    }
}
