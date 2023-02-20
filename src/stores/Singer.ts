import {defineStore} from "pinia";

const useSingerStore = defineStore('Singer',{
    state:() => {
        return {
            MusicSingerArtists:[] as Object
        }
    },
    actions:{
        getMusicSingerArtists(data:object) {
            this.MusicSingerArtists = data
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'MusicSingerData',
                storage:window.sessionStorage,
                paths:['MusicSingerArtists']
            }
        ]
    }
})

export default useSingerStore