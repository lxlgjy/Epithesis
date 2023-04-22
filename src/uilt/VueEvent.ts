// vue功能- (动画)
import useStore from "../stores/counter";
import {MusicI, MusicPageNoticeShow, MusicPlay, MusicPlayer, MusicPlayerTime, MusicSongTime} from './PublicStatus'
import {AudioLyricAxios, AudioSongAxios} from "./Api/AudioApi";
import Element from "./Element";
import anime from "animejs";

export const AudioLyric = () => {
    const {HomeAudio} = Element()

    HomeAudio.removeEventListener('ended', ended)

    HomeAudio.addEventListener('ended', ended)

    requestAnimationFrame(audioAnimateUpdate)


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

    HomeAudio.removeEventListener('timeupdate', timeupdate)


    HomeAudio.addEventListener('timeupdate', timeupdate)

    // 仿苹果歌词滚动。借鉴BlurLyric
    let lyricNum = 0
    const bodyHeight = document.body.offsetHeight;
    let s = 0

    function timeupdate(e: Event) {
        const LyricLength: any = useStore().Audio.MusicLyric
        MusicSongTime.value = parseInt(HomeAudio.currentTime.toString())
        MusicPlayerTime.value = (<HTMLAudioElement>e.target).currentTime
        for (let i = 0; i < LyricLength.length; i++) {
            if (MusicPlayerTime.value >= LyricLength[i].time) {
                //
                MusicI.value = i

                if (MusicI.value > s) {
                    s = MusicI.value
                    lyricNum++
                    LyricSelect(PlayerLyric, lyricNum, bodyHeight, LyricULBox)
                }

                // 无任何特效滚动，浏览器性能差的机器
                // LyricULBox.style.transform = `translateY(${500 - (lyricLineHeight * (i + 1) + 10)}px)`
            }
        }
    }


}

const LyricSelect = (lis: NodeListOf<HTMLLIElement>, lyricNum: number, bodyHeight: number, lyrics: HTMLUListElement) => {
    anime({
        easing: 'cubicBezier(.3, .5, .2, 1)', //弹簧参数  .3, .5, .2, 1
        targets: lis, // 根元素
        duration: 600, // 动画
        // el => Element , i => index
        delay: (el, i) => {
            return Fun.funcDelay(i - lyricNum)
        },
        filter: (el: HTMLElement, i: number) => {
            return Fun.funcBlur(i, lyricNum)
        },
        color: (el: HTMLElement, i: number) => {
            let offset = i - lyricNum
            // if (i == lyricNum) return 'rgb(0,0,0,.9)'
            //
            // return 'rgb(0,0,0,' + (0.6 * (0.5 ** Math.abs(offset))) + ')'
            return (i == lyricNum) ? 'rgb(0,0,0,0.7)' : ('rgb(0,0,0,' + (0.25 * (0.65 ** Math.abs(i -
                lyricNum))) + ')')
        }, translateY: () => {
            return Math.floor(lyrics.offsetTop - lis[lyricNum].offsetTop + (
                bodyHeight * 0.04))
        }
    })
}

const Fun = {
    funcBlur(i: number, lyricNum: number) {
        // let offset = i - lyricNum
        // return 'blur(' + (1 - .9 ** Math.abs(offset)) + 'vh)'
        let offset = i - lyricNum
        if (offset == 0) return 'blur(0vh)';
        let value = (0.7 - (0.5 ** Math.abs(offset)))
        if (value < 0.5) {
            return 'blur(' + value + 'vh)'
        } else {
            return 'blur(' + 0.5 + 'vh)'
        }
    },
    funcDelay(offset: number) {
        // return Math.floor(40 * (offset * (0.9 ** Math.abs(offset)) ));
        if (offset < -2 || offset > 7) return 0
        return 64 * (offset + 2);
    }
}


const ended = async () => {
    if (useStore().Audio.MusicSongNow.length > 1) {
        await useStore().Start.ModeToggleFalse()

        await MusicAudioModeModule()
        await useStore().Start.ModeToggleTrue()
    } else {
        if (useStore().Start.AudioMode === 0) {
            await MusicAudioModeModule()
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
//登陆（cookie请求）
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
// 问题 播放
export const MusicAudioPlayAll = async (id: string) => {
    const {HomeAudio} = Element()

    await MusicSongAndLyric(id)

    HomeAudio.currentTime = 0

    await HomeAudio.play()

    MusicPlayer.value = true

}

export const MusicAudioModeModule = async (type?: string) => {
    if (useStore().Start.AudioMode === 1) {
        type === 'Next' ? useStore().Start.AddAudioIndex() : (type === 'Previous' ? useStore().Start.subtractAudioIndex() :  (type === 'SongList' ? false : useStore().Start.AddAudioIndex()))
        // @ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['id'])
    } else if (useStore().Start.AudioMode === 0) {
        const {HomeAudio} = Element()
        HomeAudio.currentTime = 0
        await HomeAudio.play()
        MusicPlayer.value = true
    } else if (useStore().Start.AudioMode === 2) {
        type === 'Next' ? useStore().Start.AddAudioIndex() : (type === 'Previous' ? useStore().Start.subtractAudioIndex() : (type === 'SongList' ? false :  useStore().Start.AddAudioIndex()))
        // @ts-ignore
        await MusicAudioPlayAll(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['id'])
    } else {
        return false
    }

    AudioLyric()

}


