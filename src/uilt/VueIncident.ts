// 所有页面的鼠标键盘事件
import router from "../router";
import useStore from "../stores/counter";
import {PlayListAxios} from './Api/PlaylistApi'
import {DetailPlayListAxios, DetailSearchAxios, DetailSingerAxios, LoveSongs} from "./Api/DetailApi";
import {AudioLyricAxios, AudioSongAxios} from "./Api/AudioApi";
import {
    MusicAudioModeIndex,
    MusicLoginBackgroundShow,
    MusicLoginShow, MusicPageCapabilities, MusicPageNoticeShow,
    MusicPlay,
    MusicPlayer, MusicPlayerTime,
    MusicPlayerToggle,
    MusicSearchInputShow
} from './PublicStatus'
import {DetailSelect, mess, MusicSongAndLyric, timeupdate} from "./VueEvent";
import {
    backgroundAndloadingToggle,
    MusicAudioModeToggle,
    MusicAudioShow,
    MusicSongListShowToggle,
    MusicSongListToggle
} from './StateTransitions'
import Element from "./Element";
import {AudioProgressToggle} from './PageWidgets'
import {DownloadSong} from "./Api/Download";

export const LoginClickShow = () => {
    MusicLoginShow.value = true
    MusicLoginBackgroundShow.value = true
}

interface Event {
    clientX: number,
    clientY: number,
    offsetX: number,
    pageX: number,
    preventDefault: Function,
    stopPropagation: Function,
}


//页面顶部路由返回前进
export const headerTopLeft = async () => {
    await router.back()
}

export const headerTopRight = () => {
    router.go(1)
}
// 搜索
export const headerTopInput = () => {
    MusicSearchInputShow.value = true
    MusicLoginBackgroundShow.value = true
}
//遮罩
export const allPageBackground = () => {
    MusicSearchInputShow.value = false
    MusicLoginBackgroundShow.value = false
    MusicLoginShow.value = false
}
//首页左右滑动 - （横向轮播-无自动滚动）
export const left = () => {
    let {HomeUl, HomeBox} = Element()
    let length = parseInt(HomeUl.style.left)
    length === 0 ? HomeUl.style.left = 0 + 'px' : HomeUl.style.left = length + HomeBox.offsetWidth + 'px'
}
export const right = () => {
    let {HomeUl, HomeBox} = Element()
    let length = parseInt(HomeUl.style.left)
    length === -(4 * HomeBox.offsetWidth) ? HomeUl.style.left = 0 + 'px' : HomeUl.style.left = length - HomeBox.offsetWidth + 'px'
}
//歌单请求
export const Playlist_Cat = (dom: any, page?: number) => {
    if (dom.target.innerText !== '') {
        let title = dom.target.innerText
        // 切换歌单
        PlayListAxios(`/top/playlist?limit=35&order=hot&offset=1&cat=${title}`).then()
    }
}
// 搜索请求
export const search = async () => {
    let searchInputValue = document.querySelector('.Search-top-input input') as HTMLInputElement

    if (searchInputValue.value !== '') {
        await DetailSearchAxios(`/cloudsearch?keywords=${searchInputValue.value}`)
        routerPush('Search', 'Search', searchInputValue.value)

        MusicLoginBackgroundShow.value = false
        MusicSearchInputShow.value = false
    }
}
//歌手请求
export const MusicSinger = async (id: string) => {
    await useStore().Start.ToggleMusicData(false)
    backgroundAndloadingToggle()

    await DetailSingerAxios(`/artist/detail?id=${id}`, `/artists?id=${id}`, `/artist/desc?id=${id}`)

    await useStore().Start.ToggleMusicData(true)
    backgroundAndloadingToggle()

}
// mv请求
export const FilmMovie = async (id: string, type?: string) => {
    await useStore().Start.ToggleMusicData(false)

    backgroundAndloadingToggle()

    await DetailPlayListAxios(`/mv/detail?mvid=${id}`, id, 'MV')

    await useStore().Start.ToggleMusicData(true)
    backgroundAndloadingToggle()

}
// 首页home 请求
export const MusicHomeDetail = async (id: string, routerType?: string) => {
    await useStore().Start.ToggleMusicData(false)
    backgroundAndloadingToggle()

    if (routerType === 'HomeSwiper') {

    } else if (routerType === 'HomeRecommendedSongs') {

        await DetailPlayListAxios(`/recommend/songs`, id, 'GetTheSongsDirectly')
        backgroundAndloadingToggle()

    } else if (routerType === 'HomePlaylist') {

        await DetailPlayListAxios(`/playlist/detail?id=${id}`, id, 'DoNotGetTheSongsDirectly')

        backgroundAndloadingToggle()

    } else if (routerType === 'HomeRankings') {

        await DetailPlayListAxios(`/playlist/detail?id=${id}`, id, 'DoNotGetTheSongsDirectly')

        backgroundAndloadingToggle()

    } else if (routerType === 'HomeAlbum') {
        await DetailPlayListAxios(`/album?id=${id}`, id, 'GetTheSongsDirectly')

        backgroundAndloadingToggle()
    }
    await useStore().Start.ToggleMusicData(true)

}

export const MusicPlayListDetail = async (id: string) => {
    await useStore().Start.ToggleMusicData(false)

    backgroundAndloadingToggle()

    await DetailPlayListAxios(`/playlist/detail?id=${id}`, id, 'DoNotGetTheSongsDirectly')

    backgroundAndloadingToggle()

    await useStore().Start.ToggleMusicData(true)

}
// 可以添加查看更多，进行路由跳转 - （路由跳转改为子路由嵌套）
const routerPush = (name: string, type?: string, page?: string) => {

    router.push({
        name: name,
        query: {
            page: page
        }
    }).then()

    backgroundAndloadingToggle()

}
//详情界面点击
export const Player = async (id: string, item:object) => {
    await MusicSongAndLyric(id)
    useStore().Start.AudioSongIndex = 0


    useStore().Audio.replaceMusicSongNow(item)
    // await Axios(`/check/music?id=${id}`, 'VerifyThatTheMusicIsAvailable') 是否可以播放

    DetailSelect()

    MusicAudioShow()
}

// 歌词点击播放
export const lyricSelect = (time: number) => {
    let HomeAudio = document.querySelector('#Audio') as HTMLAudioElement
    HomeAudio.currentTime = time
    PlayerAudio('lyric')
}

// 播放
export const PlayerAudio = (type?: string) => {
    //判断是否需要播放
    MusicPlay.value = !MusicPlay.value
    MusicPlayer.value = !MusicPlayer.value

    if (type == 'lyric') {
        MusicPlay.value = true
        MusicPlayer.value = true
    }

    timeupdate()
}

// 进入播放界面时隐藏其他界面
export const playerAudioShow = () => {
    useStore().Start.TogglePageShow(false)
}

// 播放界面返回
export const PlayerBack = () => {
    useStore().Start.TogglePageShow(true)
}


export const PlayToggle = (Toggle: boolean) => {
    MusicPlayerToggle.value = !Toggle
}

//添加喜欢列表
export const Like = (e: Event, id: string, type: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (type === 'true') {
        LoveSongs(`/like?id=${id}&timestamp=${Date.now()}`, id, type).then()
    } else {
        LoveSongs(`/like?id=${id}&like=false&timestamp=${Date.now()}`, id, type).then()
    }
}

export const AudioVolumeMouseMove = (value: number) => {
    const {HomeAudio} = Element()
    HomeAudio.volume = value / 100
}

export const AudioProgress = async (e: Event) => {
    const {HomeAudio} = Element()

    HomeAudio.pause()

    // @ts-ignore
    if (e.target.offsetWidth < 617) {
        let absolutely = ((e.offsetX / 617) * 100).toFixed(2)
        // @ts-ignore
        HomeAudio.currentTime = AudioProgressToggle(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'], absolutely)
    } else {
        // @ts-ignore
        let absolutely = ((e.offsetX / e.target.offsetWidth) * 100).toFixed(2)
        // @ts-ignore
        HomeAudio.currentTime = AudioProgressToggle(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'], absolutely)
    }

    await HomeAudio.play()
}

// 提供倍速 （歌曲播放完恢复1.0x）
export const AudioSpeed = (speed:number) => {
    const {HomeAudio} = Element()
    HomeAudio.playbackRate = speed
    AudioToggle()
}


export const AudioToggle = () => {
    MusicAudioModeToggle()
}

export const AudioMode = (index: number) => {
    MusicAudioModeIndex.value = index

    useStore().Start.ToggleAudioMode(index)

    MusicAudioModeToggle()

    MusicPageNoticeShow.value = true

    useStore().Start.reviseMusicNotice(`播放模式已切换（${index === 0 ? '单曲循环': (index === 1 ? '随机播放' : '列表循环')}）`)
}

//播放列表（左侧滑动出现）
export const SongListToggle = () => {
    MusicSongListToggle()
}

export const SongListShowToggle = () => {
    MusicSongListShowToggle()
}

//添加音乐到播放列表
export const AudioListPush = async (type?: string) => {
    MusicAudioShow()
    if (type === 'add') {

        if (MusicPlay.value || !MusicPlay.value) {

            await MusicSongNowPush()

        } else if (MusicPlay.value === false && useStore().Audio.MusicSongNow.length < 1) {
            await MusicSongNowPush()
            await MusicListAndPush()
        }

    } else {
        // @ts-ignore
        let item = await useStore().Detail.MusicSongsDetailList['songs']

        useStore().Audio.replaceMusicSongNowListPush(item)
        useStore().Start.AudioSongIndex = 0

        await MusicListAndPush()
    }
}

const MusicListAndPush = async () => {
    // @ts-ignore
    let id = await useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id']
    await MusicSongAndLyric(id)

    DetailSelect()
}

const MusicSongNowPush = async () => {
    // @ts-ignore
    let item = await useStore().Detail.MusicSongsDetailList['songs']

    item.forEach((items: object) => {
        useStore().Audio.getMusicSongNow(items)
    })
}

//下一首and上一首切换播放(可以简化)
export const NextAndPrevious = async (type?: string) => {
    const {HomeAudio} = Element()

    if (useStore().Audio.MusicSongNow.length < 2) {

    } else {
        if (type === 'Next') {
            if (useStore().Start.AudioSongIndex < useStore().Audio.MusicSongNow.length - 1) {
                MusicPageNoticeShow.value = false
                useStore().Start.AddAudioIndex()
                // @ts-ignore
                await MusicSongAndLyric(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
                await HomeAudio.play()
                MusicPlay.value = true
                MusicPlayer.value = true
            } else {
                MusicPageNoticeShow.value = true
                useStore().Start.reviseMusicNotice('已经最后一首了！！！')
            }
        } else {
            if (useStore().Start.AudioSongIndex > 0) {
                MusicPageNoticeShow.value = false
                useStore().Start.subtractAudioIndex()
                // @ts-ignore
                await MusicSongAndLyric(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
                await HomeAudio.play()
                MusicPlay.value = true
                MusicPlayer.value = true
            } else {
                MusicPageNoticeShow.value = true
                useStore().Start.reviseMusicNotice('已经没有上一首了！！！')
            }
        }

    }

}

//下载音乐
export const MusicDownload = (id: string, name: string, singer: string) => {
    DownloadSong(id, name, singer)
}

//右击显示小功能
export const Capabilities = (e: Event, data: object, type?: string) => {
    MusicPageCapabilities.value = true

    useStore().Detail.getMusicCapabilities(data)

    const {Capabilities} = Element()
    if (type === 'SongList') {
        Capabilities.style.top = e.clientY + 'px'
        Capabilities.style.left = (e.clientX - 200) + 'px'
    } else {
        Capabilities.style.top = e.clientY + 'px'
        Capabilities.style.left = e.clientX + 'px'
    }

}

//监听组件是否滚动
export const scorll = () => {
    MusicPageCapabilities.value = false
}

export const PlayListToggle = async(title:string) => {
    await PlayListAxios(`/top/playlist?limit=35&order=hot&offset=${(useStore().Start.PlayList - 1) * 35}&cat=${title}&timestamp=${Date.now()}`)
}





