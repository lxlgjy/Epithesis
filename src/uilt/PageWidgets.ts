// 页面时间转换 与 歌词转换
import useStore from "../stores/counter";
import Element from './Element'
import {MusicPlayerShow} from "./PublicStatus";

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

export const AudioValue = (time: any, TimeAll: number): number => {
    return (((TimeAll) / ((Math.floor(time / 1000 / 60) * 60) + (Math.floor(time / 1000 % 60)))) * 100)
}

export const AudioProgressToggle = (time: any, TimeAll: number) => {
    return ((Math.floor(time / 1000 / 60) * 60 + Math.floor((time / 1000 % 60))) * (TimeAll) / 100).toFixed(2)
}

export const lyric = (item: object) => {
    return new Promise(resolve => {
        // @ts-ignore
        let lyric: any = item['lrc']['lyric']
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
        resolve(lyricArr)
    })
}

export const BackgroundImage = () => {
    const {Background} = Element()

    let backgroundArr = [
        {left: '8D7B68', top: 'A4907C'},
        {left: '2E4F4F', top: '0E8388'},
        {left: '4C4B16', top: '898121'},
        {left: '635985', top: '443C68'},
        {left: 'F1DBBF', top: 'AA5656'},
        {left: '7B8FA1', top: '567189'},
        {left: 'DFD3C3', top: 'D0B8A8'},
        {left: '227C70', top: '88A47C'},
        {left: '735F32', top: 'C69749'},
        {left: '624F82', top: '9F73AB'},
        {left: '3D8361', top: 'D6CDA4'},
        {left: '1C3879', top: '607EAA'},
    ]

    Background.style.background = `linear-gradient(to left top, #${backgroundArr[useStore().Start.BackgroundIndex].left}, #${backgroundArr[useStore().Start.BackgroundIndex].top})`
}

export const currentTime = (time: number) => {
    const h = parseInt((time / 3600).toString())
    const minute = parseInt((time / 60 % 60).toString())
    const second = Math.ceil(time % 60)

    const hours = h < 10 ? '0' + h : h
    const formatSecond = second > 59 ? 59 : second
    return `${hours > 0 ? `${hours}:` : ''}${minute < 10 ? '0' + minute : minute}:${formatSecond < 10 ? '0' + formatSecond : formatSecond}`
}



