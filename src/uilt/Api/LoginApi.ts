import {publicGetFunction, publicPostFunction} from "../Axios";
import useStore from "../../stores/counter";
import {MusicLoginBackgroundShow, MusicLoginShow} from "../PublicStatus";


export const LoginAxios = async () => {
    let timer: NodeJS.Timer
    let timestamp = Date.now()
    const cookie = localStorage.getItem('cookie')

    const res = await publicGetFunction(`/login/qr/key?timerstamp=${Date.now()}`) as any
    const key = res.data.unikey
    const res2 = await publicGetFunction(`/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`) as any
    let img = document.querySelector('#qrImg') as HTMLImageElement
    img.src = res2.data.qrimg

    timer = setInterval(async () => {
        const statusRes = await checkStatus(key)
        if (statusRes.code === 800) {
            alert('二维码已过期,请重新获取')
            clearInterval(timer)
        }
        if (statusRes.code === 803) {
            clearInterval(timer)
            alert('授权登录成功')

            MusicLoginBackgroundShow.value = false
            MusicLoginShow.value = false
            useStore().Start.ToggleLoginShow(false)
            await localStorage.setItem('cookie', statusRes.cookie)
            let MusicUname = await getLoginStatus(statusRes.cookie)
            useStore().Login.getMusicUname(MusicUname.data.profile)
        }
    }, 3000)
}

async function checkStatus(key: string) {
     return await publicGetFunction(`/login/qr/check?key=${key}&timerstamp=${Date.now()}`) as any
}

async function getLoginStatus(cookie = '') {
    return await publicPostFunction(`/login/status?timerstamp=${Date.now()}`) as any
}