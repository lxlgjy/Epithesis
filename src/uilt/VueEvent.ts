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

    HomeAudio.addEventListener('ended', async (e: Event) => {
        if (useStore().Audio.MusicSongNow.length > 1) {
            if(useStore().Start.AudioMode === 0) {
                const {HomeAudio} = Element()
                HomeAudio.currentTime = 0
                await HomeAudio.play()
            } else if(useStore().Start.AudioMode === 1) {
                let AudioSlice = useStore().Audio.MusicSongNow.slice()
                for(let i = 0; i < AudioSlice.length; i++) {
                    let AudioMathRandom = AudioRandom(i)
                    AudioExchange(AudioSlice, i , AudioMathRandom)
                }
                //@ts-ignore
                await MusicSongAndLyric(AudioSlice[useStore().Start.AudioSongIndex]['id'])
                await HomeAudio.play()
            } else {
                useStore().Start.AddAudioIndex()
                // @ts-ignore
                await MusicSongAndLyric(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
                await HomeAudio.play()
            }

        } else {
            if(useStore().Start.AudioMode === 0) {
                const {HomeAudio} = Element()
                HomeAudio.currentTime = 0
                await HomeAudio.play()
            } else {
                console.log('这是列表最后一首歌曲')
            }
        }
    })
}

const AudioRandom = (max:number) => {
    return Math.floor(Math.random() * (max + 1))
}

const AudioExchange = (AudioArray:Array<object>, index:number , random:number) => {
    let t = AudioArray[index]
    AudioArray[index] = AudioArray[random]
    AudioArray[random] = t
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
export const mess = (type:string) => {
    if (MusicPageNoticeShow.value) {
        const message = window.$message
        switch(type) {
            case type = 'warning':
                message.warning(useStore().Start.MusicNotice)
                break;
            case type = 'success':
                message.success(useStore().Start.MusicNotice)
                break;
        }
    }
}


