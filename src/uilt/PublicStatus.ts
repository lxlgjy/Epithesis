import {reactive, toRef} from "vue";

const PublicStart = reactive({
    searchInputShow:false,  // 搜索
    loginShow:false, //登录
    loginBackgroundShow:false, //遮罩
    PlayerToggle: true,
    Play: false,
    Player: false,
    PlayerTime: 0,
    SongTime: 0,
    i: 0,
    loadingShow:false,
    Volume:false, // 音量滑动
    AudioMode:false, // 音乐模式
    AudioModeIndex:2, // 模式切换
    SongList:true, //播放列表,播放历史切换
    SongListShow:false, // 播放列表
    PageNoticeShow:false, // 信息展示
})

export const MusicSearchInputShow = toRef(PublicStart , 'searchInputShow')
export const MusicLoginShow = toRef(PublicStart , 'loginShow')
export const MusicLoginBackgroundShow = toRef(PublicStart , 'loginBackgroundShow')
export const MusicPlayerToggle = toRef(PublicStart, 'PlayerToggle')
export const MusicPlay = toRef(PublicStart, 'Play')
export const MusicPlayerTime = toRef(PublicStart, 'PlayerTime')
export const MusicSongTime = toRef(PublicStart, 'SongTime')
export const MusicI = toRef(PublicStart, 'i')
export const MusicPlayer = toRef(PublicStart, 'Player')
export const MusicLoadingShow = toRef(PublicStart , 'loadingShow')
export const MusicVolume  = toRef(PublicStart , 'Volume')
export const MusicAudioModeShow = toRef(PublicStart , 'AudioMode')
export const MusicAudioModeIndex = toRef(PublicStart , 'AudioModeIndex')
export const MusicSongList = toRef(PublicStart , 'SongList')
export const MusicSongListShow = toRef(PublicStart , 'SongListShow')
export const MusicPageNoticeShow = toRef(PublicStart , 'PageNoticeShow')