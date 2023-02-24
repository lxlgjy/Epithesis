// 所有页面的鼠标键盘事件
import router from "../router";
import useStore from "../stores/counter";
import {PlayListAxios} from './Api/PlaylistApi'
import {
    DetailHomeAxios, DetailMVAxios,
    DetailPlaylistAxios,
    DetailSearchAxios,
    DetailSingerAxios,
    LoveSongs
} from "./Api/DetailApi";
import {
    MusicLoginBackgroundShow,
    MusicLoginShow, MusicPageCapabilities, MusicPageNoticeShow,
    MusicPlay,
    MusicPlayer, MusicPlayerTime,
    MusicPlayerToggle,
    MusicSearchInputShow
} from './PublicStatus'
import {
    DetailSelect,
    MusicAudioModeModule,
    MusicAudioPlayAll,
    MusicSongAndLyric,
    newAudioList,
    timeupdate
} from "./VueEvent";
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

export const SwiperData = () => {
    MusicPageNoticeShow.value = true
    useStore().Start.reviseMusicNotice('只展示轮播，不提供数据展示')
}


//歌单请求
export const Playlist_Cat = (dom: any, page?: number) => {
    if (dom.target.innerText !== '') {
        let title = dom.target.innerText
        // 切换歌单
        PlayListAxios(`/top/playlist?limit=35&order=hot&offset=1&cat=${title}`).then()
        useStore().Start.addPlayList(1)
    }
}
// 搜索请求
export const search = async () => {
    let searchInputValue = document.querySelector('.Search-top-input input') as HTMLInputElement

    if (searchInputValue.value !== '') {
        backgroundAndloadingToggle()

        await DetailSearchAxios(`/cloudsearch?keywords=${searchInputValue.value}`)

        routerPush('Search', 'Search', searchInputValue.value)

        MusicSearchInputShow.value = false
        backgroundAndloadingToggle()

    }
}
//歌手请求
export const MusicSinger = async (id: string) => {
    await useStore().Start.ToggleMusicData(false)
    backgroundAndloadingToggle()

    await DetailSingerAxios(`/artist/detail?id=${id}`, `/artists?id=${id}`)

    await useStore().Start.ToggleMusicData(true)
    backgroundAndloadingToggle()

}
// mv请求
export const FilmMovie = async (id: string, type?: string) => {
    await useStore().Start.ToggleMusicData(false)

    backgroundAndloadingToggle()

    await DetailMVAxios(`/mv/detail?mvid=${id}`, id)

    await useStore().Start.ToggleMusicData(true)
    backgroundAndloadingToggle()

}
// 首页home 请求
export const MusicHomeDetail = async (id: string, routerType?: string) => {
    await useStore().Start.ToggleMusicData(false)
    backgroundAndloadingToggle()

    if (routerType === 'HomeSwiper') {

    } else if (routerType === 'HomeRecommendedSongs') {

        await DetailHomeAxios(`/recommend/songs`, id, 'GetTheSongsDirectly')

        backgroundAndloadingToggle()

    } else if (routerType === 'HomePlaylist') {

        await DetailHomeAxios(`/playlist/detail?id=${id}`, id, 'DoNotGetTheSongsDirectly')

        backgroundAndloadingToggle()

    } else if (routerType === 'HomeRankings') {

        await DetailHomeAxios(`/playlist/detail?id=${id}`, id, 'DoNotGetTheSongsDirectly')

        backgroundAndloadingToggle()

    } else if (routerType === 'HomeAlbum') {
        await DetailHomeAxios(`/album?id=${id}`, id, 'Album')

        backgroundAndloadingToggle()
    }
    await useStore().Start.ToggleMusicData(true)

}

export const MusicPlayListDetail = async (id: string) => {
    await useStore().Start.ToggleMusicData(false)

    backgroundAndloadingToggle()

    await DetailPlaylistAxios(`/playlist/detail?id=${id}`, id)


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


}
//详情界面点击
export const Player = async (id: string, item: object) => {
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
    // @ts-ignore
    HomeAudio.currentTime = AudioProgressToggle(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'], e)
}

// 提供倍速 （歌曲播放完恢复1.0x）
export const AudioSpeed = (speed: number) => {
    const {HomeAudio} = Element()
    HomeAudio.playbackRate = speed
    AudioToggle()
}


export const AudioToggle = () => {
    MusicAudioModeToggle()
}

export const AudioMode = async (index: number) => {
    // 修改函数
    if(useStore().Audio.MusicSongNow.length > 1) {

    } else {
        switch(index) {
            case index = 1:
                MusicPageNoticeShow.value = true
                useStore().Start.reviseMusicNotice('列表只有一首歌曲，无法进行随机播放，请添加音乐')
                break
            case index = 2:
                MusicPageNoticeShow.value = true
                useStore().Start.reviseMusicNotice('列表只有一首歌曲，无法进行列表播放，请添加音乐')
                break
            default:

        }
    }
    useStore().Start.ToggleAudioMode(index)
    MusicAudioModeToggle()

    MusicPageNoticeShow.value = true
    useStore().Start.reviseMusicNotice(`播放模式已切换（${index === 0 ? '单曲循环' : (index === 1 ? '随机播放' : '列表循环')}）`)

    //模式是否切换
    if (useStore().Start.AudioMode === 1) {
        const AudioSlice = await newAudioList() as Array<number>
        useStore().Start.reviseAudioModeRandomList(AudioSlice)

        //@ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['id'])
    } else if (useStore().Start.AudioMode === 2) {
        //@ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
    }
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
        let item = useStore().Detail.MusicSongsDetailList.DetailSong

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
        MusicPageNoticeShow.value = true
        type === 'Next' ? useStore().Start.reviseMusicNotice('已经最后一首了！！！') : useStore().Start.reviseMusicNotice('已经没有上一首了！！！')

    } else {
        if (type === 'Next') {
            if (useStore().Start.AudioSongIndex < useStore().Audio.MusicSongNow.length - 1) {
                useStore().Start.AddAudioIndex()

                await MusicAudioModeModule()
            }
        } else {
            if (useStore().Start.AudioSongIndex > 0) {
                useStore().Start.subtractAudioIndex()

                await MusicAudioModeModule('Previous')
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

export const PlayListToggle = async (title: string) => {
    await PlayListAxios(`/top/playlist?limit=35&order=hot&offset=${(useStore().Start.PlayList - 1) * 35}&cat=${title}&timestamp=${Date.now()}`)
}





