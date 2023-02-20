import useStore from "../../stores/counter";
import {publicGetFunction, publicPostFunction} from "../Axios";


interface DetailPlayList {
    [fetchDetail: string]: playlists
}

interface playlists {
    [playlist: string]: trackids
}

interface trackids {
    trackIds: object,
    length: number
}

export const DetailSingerAxios = async (detail: string, detailSongs: string, Album: string) => {
    const fetchDetail = await publicGetFunction(detail) as object
    const fetchDetailSongs = await publicGetFunction(detailSongs) as object
    const fetchDetailAlbum = await publicGetFunction(Album) as object

    let DetailSinger = {
        fetchDetail,
        fetchDetailSongs,
        fetchDetailAlbum
    }

    useStore().Detail.getMusicSongsDetailList(DetailSinger)
}

export const DetailPlayListAxios = async (detail: string, id: string, type?: string) => {
    if (type === 'DoNotGetTheSongsDirectly') {

        const fetchDetail: DetailPlayList = await publicGetFunction(detail) as DetailPlayList

        const fetchDetailSongs = await publicGetFunction(`/playlist/track/all?id=${id}&limit=${fetchDetail['playlist']['trackIds'].length}&offset=0`) as object

        let DetailPlayList = {
            fetchDetail,
            fetchDetailSongs
        }

        await useStore().Detail.getMusicSongsDetailList(DetailPlayList)
    } else if (type === 'GetTheSongsDirectly') {
        // console.log(1)
        const fetchDetailSongs = await publicPostFunction(detail) as object

        await useStore().Detail.getMusicSongsDetailList({fetchDetailSongs})
    } else if(type === 'MV') {

        const fetchDetail = await publicGetFunction(detail) as object

        const fetchAddress = await publicGetFunction(`/mv/url?id=${id}`) as object

        await useStore().Detail.getMusicMV({fetchDetail , fetchAddress})
    }
}

export const DetailSearchAxios = async (detail: string) => {
    const fetchDetail = await publicGetFunction(detail) as object
    useStore().Detail.getMusicSongsDetailList(fetchDetail)

}
export const DetailThatLove = async () => {
    // @ts-ignore
    const id = useStore().Login.MusicUname['data']['profile']['userId']
    const fetchDetail = await publicPostFunction(`/user/playlist?uid=${id}`) as any
    const fetchSongs = await publicPostFunction(`/playlist/track/all?id=${fetchDetail.playlist[0].id}&timestamp=${Date.now()}`) as object
    await useStore().Detail.getMusicSongsDetailList(fetchSongs)
}

// 添加喜欢
export const LoveSongs = async(Api:string,id:string ,type:string ) => {
    if(type === 'true') {
        const love =await  publicPostFunction(Api) as object
        useStore().Detail.MusicLoveListId.push(id)
    } else {
        const love =await  publicPostFunction(Api) as object
        let arr:Array<string> = []
        useStore().Detail.MusicLoveListId.forEach(item => {
            if(item !== id) {
                arr.push(item)
            }
        })
        useStore().Detail.MusicLoveListId = arr
    }

}
