// 页面时间转换 与 歌词转换
import useStore from "../stores/counter";
import {useRoute} from "vue-router";


export const Time = (time: any) => {
    let Time = time / 1000
    let m: string | number = Math.floor(Time / 60)
    let s: string | number = Math.floor(Time % 60)
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    return m + ':' + s
}
//
export const progress = (time: any, TimeAll: number) => {
    let Length = (((TimeAll) / ((Math.floor(time / 1000 / 60) * 60) + (Math.floor(time / 1000 % 60)))) * 100)

    return (Length <= 10 ? Length : Length - 1) + '%'

}

export const  AudioValue = (time: any, TimeAll: number):number => {
    return (((TimeAll) / ((Math.floor(time / 1000 / 60) * 60) + (Math.floor(time / 1000 % 60)))) * 100)
}

export const AudioProgressToggle = (time: any, TimeAll: number) => {
    return ((Math.floor(time / 1000 / 60) * 60 + Math.floor((time / 1000 % 60))) * (TimeAll) / 100).toFixed(2)
}

export const lyric = () => {
    // @ts-ignore
    let lyric: any = useStore().Audio.MusicLyric['lrc']['lyric']
    let newLyric = lyric.split('[').slice(1)

    let lyricArr: any = []
    newLyric.forEach((item: any, index: number) => {
        let first = item.split(']')
        let m = parseInt(first[0].split(':').slice(0))
        let s = parseInt(first[0].split(':').slice(1))
        let ss = (first[0].split('.').slice(1))
        if (first[1] != '\n') {
            let lyricObj = {
                time: (m * 60 + s) + '.' + ss,
                text: first[1]
            }
            lyricArr.push(lyricObj)
        }
    })
    return lyricArr
}

export const BackgroundImage = (background: any) => {
    let backgroundArr = ['linear-gradient(to top, #30cfd0 0%, #330867 100%)', 'linear-gradient(to right, #74ebd5 0%, #9face6 100%)', 'linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)', 'linear-gradient(to right, #434343 0%, black 100%)', 'linear-gradient(to top, #09203f 0%, #537895 100%)', 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)', 'linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)', 'linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)', 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)']

    background.style.backgroundImage = backgroundArr[Math.round(Math.random() * 9)]
}

export const currentTime = (time: number) => {
    const h = parseInt((time / 3600).toString())
    const minute = parseInt((time / 60 % 60).toString())
    const second = Math.ceil(time % 60)

    const hours = h < 10 ? '0' + h : h
    const formatSecond = second > 59 ? 59 : second
    return `${hours > 0 ? `${hours}:` : ''}${minute < 10 ? '0' + minute : minute}:${formatSecond < 10 ? '0' + formatSecond : formatSecond}`
}



