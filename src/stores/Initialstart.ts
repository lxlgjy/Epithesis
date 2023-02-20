import {defineStore} from "pinia";

const useStartStore = defineStore('Start',{
    state:() => {
        return {
            LoginShow:true as Boolean,
            PageShow:true as Boolean,
            HomeDetail:true as Boolean,
            LoginAvatar:false as Boolean,
            MusicData:false as Boolean,
            AudioShow:false as  Boolean,
            AudioSongIndex:0 as number,
            MusicNotice:'' as string,
        }
    },
    actions:{
        ToggleLoginShow(boolean:Boolean) {
            this.LoginShow = boolean
        },
        TogglePageShow(boolean:Boolean) {
            this.PageShow = boolean
        },
        ToggleLoginAvatar(boolean:Boolean) {
            this.LoginAvatar = boolean
        },
        ToggleMusicData(boolean:Boolean) {
            this.MusicData = boolean
        },
        ToggleAudioShow(boolean:Boolean) {
            this.AudioShow = boolean
        },
        AddAudioIndex() {
            this.AudioSongIndex++
        },
        subtractAudioIndex() {
          this.AudioSongIndex--
        },
        reviseMusicNotice(message:string) {
            this.MusicNotice = message
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'Start',
                storage:window.localStorage,
                paths:['LoginShow','LoginAvatar']
            },
            {
                key:'startSession',
                storage:window.sessionStorage,
                paths:['HomeDetail' , 'AudioShow' ,'PageShow','AudioSongIndex']
            }
        ]
    }
})

export default useStartStore