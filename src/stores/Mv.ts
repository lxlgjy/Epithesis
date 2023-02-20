import {defineStore} from "pinia";

const useMvStore = defineStore('MV',{
    state:() => {
        return {
            MvList:[] as object
        }
    },
    actions:{
        getMvList(data:object) {
            this.MvList = data
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'MusicMv',
                storage:window.sessionStorage,
                paths:['MvList']
            }
        ]
    }
})

export default useMvStore