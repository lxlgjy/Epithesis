import {computed} from "vue";
import useStore from "../stores/counter";
import {useRoute} from "vue-router";
import {Time} from './PageWidgets'
//detail
export const useDetailComputed = () => {
    const route = useRoute()

    const DetailImg = computed(() => {
        return route.matched.length === 3 || route.name === 'HomeAlbum' ? useStore().Detail.MusicAlbumSong.DetailTitle.img : useStore().Detail.MusicSongsDetailList.DetailTitle.img
    })

    const DetailTitle = computed(() => {
        return route.matched.length === 3 || route.name === 'HomeAlbum' ? useStore().Detail.MusicAlbumSong.DetailTitle.title : useStore().Detail.MusicSongsDetailList.DetailTitle.title
    })

    const DetailLabel = computed(() => {
        return route.matched.length === 3 || route.name === 'HomeAlbum' ? useStore().Detail.MusicAlbumSong.DetailTitle.Label : useStore().Detail.MusicSongsDetailList.DetailTitle.Label
    })

    const DetailBriefIntroduction = computed(() => {
        return route.matched.length === 3 || route.name === 'HomeAlbum' ? useStore().Detail.MusicAlbumSong.DetailTitle.BriefIntroduction : useStore().Detail.MusicSongsDetailList.DetailTitle.BriefIntroduction
    })

    const DetailMusicLength = computed(() => {
        return route.matched.length === 3 || route.name === 'HomeAlbum' ? useStore().Detail.MusicAlbumSong.DetailTitle.MusicLength : useStore().Detail.MusicSongsDetailList.DetailTitle.MusicLength
    })

    const DetailSongList = computed(() => {
        return route.matched.length === 3 || route.name === 'HomeAlbum' ? useStore().Detail.MusicAlbumSong.DetailSong : useStore().Detail.MusicSongsDetailList.DetailSong
    })


    return {DetailImg, DetailTitle, DetailLabel, DetailBriefIntroduction, DetailMusicLength, DetailSongList}
}

//Player
export const usePlayerComponent = () => {
    const playerTime = computed(() => {
        //@ts-ignore
        return useStore().Audio.MusicSongNow.length > 1 ? (useStore().Start.AudioMode === 1 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['dt'] : (useStore().Start.AudioMode === 0 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['dt'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'])) : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt']

    })

    const PlayerThemesStyle = computed(() => {
        return useStore().Start.ThemesBoolean ? '--n-color:#222;--n-title-text-color:#fff' : '--n-color:#fff;--n-title-text-color:#000'
    })

    return {PlayerThemesStyle, playerTime}
}

//capabilities
export const useCapabilitiesComputed = () => {
    const IsLove = computed(() => {
        return useStore().Detail.MusicLoveListId.indexOf(useStore().Audio.MusicSong.data[0].id) !== -1
    })

    const LoveCap = computed(() => {
        return useStore().Detail.MusicLoveListId.indexOf(useStore().Detail.MusicCapabilities.id) !== -1
    })

    const background = computed(() => {
        return useStore().Start.ThemesBoolean ? '--capabilities-background:#242424;--color:#fff;' : '--capabilities-background:#fff;--color:#000'
    })

    const CapabilitiesImg = computed(() => {
        //@ts-ignore
        return useStore().Detail.MusicCapabilities ? useStore().Detail.MusicCapabilities['al']['picUrl'] : 'null'
    })

    return {IsLove, background, CapabilitiesImg , LoveCap}
}

export const useSearchComputed = () => {
    const searchBackground = computed(() => {
        return useStore().Start.ThemesBoolean ? '--search-background: #242424;color:#fff;--active:rgba(255, 255, 255, .1);--history:rgba(255,255,255,.2);--color:#fff;' : '--search-background: #fff;color:#000;--active:rgba(23,34,45,.2);--history:rgba(23, 34, 45, .1);--color:#000'
    })

    return {searchBackground}
}

export const useAudioComputed = () => {
    const AudioImg = computed(() => {
        // @ts-ignore
        return useStore().Audio.MusicSongNow.length > 1 ? (useStore().Start.AudioMode === 1 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['al']['picUrl'] : (useStore().Start.AudioMode === 0 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['al']['picUrl'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['al']['picUrl'])) : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['al']['picUrl']
    })
    const AudioName = computed(() => {
        if (useStore().Audio.MusicSongNow.length) {
            // @ts-ignore
            return useStore().Audio.MusicSongNow.length > 1 ? (useStore().Start.AudioMode === 1 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['name'] : (useStore().Start.AudioMode === 0 && !useStore().Start.ModeToggle ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['name'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['name'])) : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['name']
        } else {
            return ''
        }

    })
    const AudioSinger = computed(() => {
        if (useStore().Audio.MusicSongNow.length) {
            // @ts-ignore
            return useStore().Audio.MusicSongNow.length > 1 ? (useStore().Start.AudioMode === 1 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['ar'][0]['name'] : (useStore().Start.AudioMode === 0 && useStore().Start.ModeToggle === false ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['ar'][0]['name'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['ar'][0]['name'])) : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['ar'][0]['name']

        } else {
            return ''
        }

    })
    const AudioBackground = computed(() => {
        return useStore().Start.ThemesBoolean ? '--capabilities-background:#242424;--color:#fff;--active:rgba(255, 255, 255, .1);' : '--capabilities-background:#fff;color:#000;'
    })

    const AudioLastTime = computed(() => {
        // @ts-ignore
        return useStore().Audio.MusicSongNow.length > 1 ? (useStore().Start.AudioMode === 1 && useStore().Start.ModeToggle === false ? Time(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['dt']) : (useStore().Start.AudioMode === 0 && useStore().Start.ModeToggle === false ? Time(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['dt']) : Time(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt']))) : Time(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'])
        // return useStore().Start.AudioMode === 1 && useStore().Start.ModeToggle === false ? (useStore().Audio.MusicSongNow.length > 1   ? Time(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['dt']) : '') : Time(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'])
    })

    return {AudioImg, AudioName, AudioSinger, AudioBackground, AudioLastTime}
}

export const useSongListComputed = () => {
    const SongListBackground = computed(() => {
        return useStore().Start.ThemesBoolean ? '--background:#202020; --active-background:rgba(255,255,255,.1);--color:#fff;--secondLight: #7e7d7d;--selected-background:rgba(255,255,255,.2)' : '--background:#fff;--color:#000;'
    })
    return {SongListBackground}
}

export const useOtherSetting = () => {
    const OtherSettingTitle = computed(() => {
        return useStore().Start.otherSetting === 'concerning' ? '关于' :(useStore().Start.otherSetting === 'agreement' ? '协议'  :'本次更新')
    })
    return {OtherSettingTitle}
}

export const useSkeletonComputed = () => {
    const route = useRoute()

    const SkeletonShow = computed(() => {
        return route.meta['HomeRecommendedSongs'] || route.meta['HomePlaylist'] || route.meta['HomeAlbum'] || route.meta['HomeHotSinger'] || route.meta.page === 'PlayListDetail' || route.meta.page === 'SingerDetail' || route.path === '/MusicThatILove/LoveDetail' || route.path === '/MusicThatILove/LoveDetail/SongAlbum'
    })
    return {SkeletonShow}
}

export const useHomeComputed = () => {
    const MusicSwiperData = computed(() => {
        return useStore().Home.MusicSwiperData ? useStore().Home.MusicSwiperData : []
    })
    const MusicRecommendData = computed(() => {
        return useStore().Home.MusicRecommendData ? useStore().Home.MusicRecommendData : []
    })
    const MusicHotSinger = computed(() => {
        return useStore().Home.MusicHotSinger ? useStore().Home.MusicHotSinger : []
    })
    const MusicRankingData = computed(() => {
        return useStore().Home.MusicRankingData ? useStore().Home.MusicRankingData.slice(0, 16) : []
    })
    const MusicLatestAlbum = computed(() => {
        return useStore().Home.MusicLatestAlbum ? useStore().Home.MusicLatestAlbum.slice(0, 8) : []
    })
    return {MusicSwiperData, MusicRecommendData, MusicHotSinger, MusicRankingData, MusicLatestAlbum}
}