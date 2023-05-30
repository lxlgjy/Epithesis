import useStore from "../../stores/counter"
import {publicGetFunction} from '../Axios'
import {MusicStore} from "../../stores/PlayList";


interface ApiList {
    playlistTitle: {
        tags: []
    }
    playList: {
        playlists: []
    }
    AddPlayList: {
        id:string,
        name:string
    }
    playHistory:{
        data:{
            list:[]
        }
    }

}

export interface ApiPlayList {
    AllMusicListData: ApiList
}

export const PlayListTitleAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as ApiPlayList['AllMusicListData']['playlistTitle']
    useStore().Playlist.getMusicPlayListTitle(fetch.tags)
}

export const PlayListAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as ApiPlayList['AllMusicListData']['playList']
    useStore().Playlist.getMusicPlayList(fetch.playlists)
}

export const PLayListAddAxios = async (Api: string) => {
    const fetch = await publicGetFunction(Api) as ApiPlayList['AllMusicListData']['playList']

    fetch.playlists.forEach((item:ApiPlayList['AllMusicListData']['AddPlayList']) => {
        useStore().Playlist.AddMusicPlayList(item)
    })
}

export const PlayHistory = async(Api:string) => {
    const fetch = await publicGetFunction(Api) as ApiPlayList['AllMusicListData']['playHistory']
    useStore().Playlist.setMusicPlayHistory(fetch.data.list)
}

