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
    const PlayerImg = computed(() => {
        // @ts-ignore
        return useStore().Start.AudioMode === 1 ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['al']['picUrl'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['al']['picUrl']
    })
    const PlayerSongName = computed(() => {
        // @ts-ignore
        return useStore().Start.AudioMode === 1 ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['name'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['name']
    })
    const PlayerSingerName = computed(() => {
        // @ts-ignore
        return useStore().Start.AudioMode === 1 ? useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['ar'][0]['name'] : useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['ar'][0]['name']

    })
    const PlayerFinalSongTime = computed(() => {
        // @ts-ignore
        return useStore().Start.AudioMode === 1 ? Time(useStore().Audio.MusicSongNow[useStore().Start.AudioModeRandomList[useStore().Start.AudioSongIndex]]['dt']) : Time(useStore().Audio.MusicSongNow[useStore().Start.AudioSongIndex]['dt'])

    })

    return {PlayerImg, PlayerSongName, PlayerSingerName, PlayerFinalSongTime}
}

//capabilities
export const useCapabilitiesComputed = () => {
    const IsLove = computed(() => {
        return useStore().Detail.MusicLoveListId.indexOf(useStore().Detail.MusicCapabilities.id) !== -1
    })

    return {IsLove}
}