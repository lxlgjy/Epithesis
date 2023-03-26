// vue功能- (动画)
import useStore from "../stores/counter";
import {MusicI, MusicPageNoticeShow, MusicPlay, MusicPlayer, MusicPlayerTime, MusicSongTime} from './PublicStatus'
import {AudioLyricAxios, AudioSongAxios} from "./Api/AudioApi";
import Element from "./Element";

export const AudioLyric = () => {
    const {HomeAudio} = Element()

    requestAnimationFrame(audioAnimateUpdate)

    HomeAudio.removeEventListener('ended', ended)

    HomeAudio.addEventListener('ended', ended)
}

export const newAudioList = () => {
    return new Promise(resolve => {
        let AudioSlice: Array<number> = []
        for (let i = 0; i < useStore().Audio.MusicSongNow.length; i++) {
            AudioSlice.push(i)
        }

        for (let i = 0; i < AudioSlice.length; i++) {
            let AudioMathRandom = AudioRandom(i)
            AudioExchange(AudioSlice, i, AudioMathRandom)
        }
        resolve(AudioSlice)
    })
}

const AudioRandom = (max: number) => {
    return Math.floor(Math.random() * (max + 1))
}


const AudioExchange = (AudioArray: Array<number>, index: number, random: number) => {
    let t = AudioArray[index]
    AudioArray[index] = AudioArray[random]
    AudioArray[random] = t
}

const audioAnimateUpdate = () => {
    const {HomeAudio, LyricULBox, PlayerLyric} = Element()
    const lyricLineHeight = PlayerLyric[0].offsetHeight
    const timeupdate = (e: Event) => {
        const LyricLength: any = useStore().Audio.MusicLyric
        MusicSongTime.value = parseInt(HomeAudio.currentTime.toString())
        MusicPlayerTime.value = (<HTMLAudioElement>e.target).currentTime

        for (let i = 0; i < LyricLength.length; i++) {
            if (MusicPlayerTime.value >= LyricLength[i].time) {
                MusicI.value = i
                LyricULBox.style.transform = `translateY(${500 - (lyricLineHeight * (i + 1) + 10)}px)`
            }
        }
    }

    HomeAudio.removeEventListener('timeupdate', timeupdate)

    HomeAudio.addEventListener('timeupdate', timeupdate)
}


const ended = async () => {
    console.log(MusicPlayerTime.value)
    if (useStore().Audio.MusicSongNow.length > 1) {
        await MusicAudioModeModule()
    } else {
        if (useStore().Start.AudioMode === 0) {
            const {HomeAudio} = Element()
            HomeAudio.currentTime = 0
            await HomeAudio.play()
        } else {
            MusicPlayer.value = false
            console.log('这是列表最后一首歌曲')
        }
    }
}

export const DetailSelect = () => {
    MusicPlayer.value = true
    MusicPlay.value = true

    timeupdate()
}

export const timeupdate = () => {
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
export const mess = (type: string) => {
    if (MusicPageNoticeShow.value) {
        const message = window.$message
        switch (type) {
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
        MusicPageNoticeShow.value = false

    }
}

export const MusicAudioPlayAll = async (id: string) => {
    const {HomeAudio} = Element()

    await MusicSongAndLyric(id)

    HomeAudio.currentTime = 0

    await HomeAudio.play()

    MusicPlayer.value = true

}

export const MusicAudioModeModule = async (type?: string) => {
    if (useStore().Start.AudioMode === 1) {
        type === undefined ? useStore().Start.AddAudioIndex() : false
        // @ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['id'])

    } else if (useStore().Start.AudioMode === 0) {
        const {HomeAudio} = Element()
        HomeAudio.currentTime = 0
        await HomeAudio.play()
    } else if (useStore().Start.AudioMode === 2) {
        type === undefined ? useStore().Start.AddAudioIndex() : false
        // @ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
    } else {
        return false
    }
    AudioLyric()

}


