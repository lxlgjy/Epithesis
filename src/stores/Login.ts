import {defineStore} from "pinia";

interface MusicStore {
    MusicUname: {
        userId: string,
        avatarUrl:string
        [key:string]:unknown
    }
}

const useLoginStore = defineStore('Login',{
    state:() => {
        return {
            MusicUname: {}  as MusicStore['MusicUname']
        }
    },
    actions:{
        getMusicUname(data:MusicStore['MusicUname']) {
            this.MusicUname = data
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'MusicLogin',
                storage:window.localStorage,
                paths:['MusicUname']
            }
        ]
    }
})

export default useLoginStore