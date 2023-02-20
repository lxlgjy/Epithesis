// vue小功能
import useStore from "../stores/counter";
import {MusicPlayer, MusicPlay, MusicSongTime, MusicPlayerTime, MusicI, MusicPageNoticeShow} from './PublicStatus'
import {lyric} from "./PageWidgets";
import {AudioLyricAxios, AudioSongAxios} from "./Api/AudioApi";
import {AudioListPush} from "./VueIncident";
import Element from "./Element";

export const AudioLyric = () => {
    let HomeAudio = document.querySelector('#Audio') as HTMLAudioElement

    requestAnimationFrame(audioAnimateUpdate)

    // HomeAudio.onended
    console.log(HomeAudio.duration)

    HomeAudio.addEventListener('ended', async (e: Event) => {
        if (useStore().Start.AudioSongIndex < useStore().Audio.MusicSongNow.length) {
            useStore().Start.AddAudioIndex()
            // @ts-ignore
            await MusicSongAndLyric(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
            await HomeAudio.play()
        } else {
            console.log('这是列表最后一首歌曲')
        }
    })
}

const audioAnimateUpdate = () => {
    let LyricLength = lyric()

    const {HomeAudio, LyricULBox} = Element()

    HomeAudio.addEventListener('timeupdate', (e: Event) => {
        MusicSongTime.value = parseInt(HomeAudio.currentTime.toString())
        MusicPlayerTime.value = (<HTMLAudioElement>e.target).currentTime
        // 每次timeupdate 返回四次 for循环四次 （未优化）
        for (let i = 0; i < LyricLength.length; i++) {
            if (MusicPlayerTime.value >= LyricLength[i].time) {
                MusicI.value = i
                LyricULBox.style.transform = `translateY(${500 - (72 * (i + 1))}px)`
            }
        }
    })
}

export const DetailSelect = () => {
    MusicPlayer.value = true
    MusicPlay.value = true

    timeupdate('initial')
}

export const timeupdate = (type?: string) => {
    let HomeAudio = document.querySelector('#Audio') as HTMLAudioElement

    if (MusicPlay.value) {
        HomeAudio.play().then()
    } else {
        HomeAudio.pause()
    }

    HomeAudio.addEventListener('timeupdate', (e: Event) => {
        MusicPlayerTime.value = (<HTMLAudioElement>e.target).currentTime
        MusicSongTime.value = parseInt(HomeAudio.currentTime.toString())
    })
}

export const Love = (id: string) => {
    let ids = useStore().Detail.MusicLoveListId as Array<any>
    return ids.indexOf(id) !== -1
}

export const MusicSongAndLyric = async (id: string) => {
    await AudioSongAxios(`/song/url?id=${id}`)
    await AudioLyricAxios(`/lyric?id=${id}`)
}

// 页面提示
export const mess = () => {
    if (MusicPageNoticeShow.value) {
        const message = window.$message
        message.warning(useStore().Start.MusicNotice)
    }
}


