import {defineStore} from "pinia";

const useLoginStore = defineStore('Login',{
    state:() => {
        return {
            MusicUname:[] as object
        }
    },
    actions:{
        getMusicUname(data:object) {
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