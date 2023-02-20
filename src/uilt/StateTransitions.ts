// 页面所有状态转换(不包括pinia状态)

import useStore from "../stores/counter";
import {
    MusicLoadingShow,
    MusicLoginBackgroundShow,
    MusicAudioModeShow,
    MusicSongList,
    MusicSongListShow
} from "./PublicStatus";


export const avatarToggle = () => {
    useStore().Start.ToggleLoginAvatar(!useStore().Start.LoginAvatar)
}

export const backgroundAndloadingToggle = () => {
    MusicLoadingShow.value = !MusicLoadingShow.value
    MusicLoginBackgroundShow.value = !MusicLoginBackgroundShow.value
}

export const MusicAudioShow = () => {
    useStore().Start.ToggleAudioShow(true)
}

export const MusicAudioModeToggle = () => {
    MusicAudioModeShow.value = !MusicAudioModeShow.value
}

export const MusicSongListToggle = () => {
    MusicSongList.value = !MusicSongList.value
}

export const MusicSongListShowToggle = () => {
    MusicSongListShow.value = !MusicSongListShow.value
}