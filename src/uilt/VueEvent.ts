// vue功能
import useStore from "../stores/counter";
import {MusicPlayer, MusicPlay, MusicSongTime, MusicPlayerTime, MusicI, MusicPageNoticeShow} from './PublicStatus'
import {lyric} from "./PageWidgets";
import {AudioLyricAxios, AudioSongAxios} from "./Api/AudioApi";
import Element from "./Element";

export const AudioLyric = () => {
    const {HomeAudio} = Element()

    requestAnimationFrame(audioAnimateUpdate)

    HomeAudio.addEventListener('ended', async () => {
        if (useStore().Audio.MusicSongNow.length > 1) {
           await MusicAudioModeModule()

        } else {
            if(useStore().Start.AudioMode === 0) {
                const {HomeAudio} = Element()
                HomeAudio.currentTime = 0
                await HomeAudio.play()
            } else {
                MusicPlayer.value = false
                console.log('这是列表最后一首歌曲')

            }
        }
    })
}

export const newAudioList = () => {
    return new Promise(resolve => {
        let AudioSlice:Array<number> = []
        for(let i = 0; i < useStore().Audio.MusicSongNow.length;i ++) {
            AudioSlice.push(i)
        }

        for(let i = 0; i < AudioSlice.length; i++) {
            let AudioMathRandom = AudioRandom(i)
            AudioExchange(AudioSlice, i , AudioMathRandom)
        }
        resolve(AudioSlice)
    })
}

const AudioRandom = (max:number) => {
    return Math.floor(Math.random() * (max + 1))
}



const AudioExchange = (AudioArray:Array<number>, index:number , random:number) => {
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
            case type = 'error':
                message.error(useStore().Start.MusicNotice)
                break;
        }
    }
}

export const MusicAudioPlayAll = async(id:string) => {
    const {HomeAudio} = Element()

    await MusicSongAndLyric(id)

    HomeAudio.currentTime = 0

    await HomeAudio.play()

    MusicPlayer.value = true

}

export const MusicAudioModeModule = async(type?:string) => {
    if(useStore().Start.AudioMode === 1) {
        useStore().Start.AddAudioIndex()
        // @ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['id'])

        // if(type === 'Previous') {
        //     // @ts-ignore
        //     await MusicSongAndLyric(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
        // } else {
        //     // @ts-ignore
        //     await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['id'])
        // }

    } else if(useStore().Start.AudioMode === 0) {
        const {HomeAudio} = Element()
        HomeAudio.currentTime = 0
        await HomeAudio.play()
    } else {
        // @ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
    }
}

export const AudioToole = (fun:any) => {
    console.log(fun);
    return 1
}


