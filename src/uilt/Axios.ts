import axios from "axios";
import useStore from "../stores/counter";

export const publicGetFunction = (params:string) => {
    return new Promise(resolve => {
        axios({
            url:`http://127.0.0.1:3000${params}`,
            method:'GET',
            data:{
                cookie:localStorage.getItem('cookie')
            }
        }).then(data => {
            resolve(data.data)
            useStore().Start.ToggleStatus(true)

        })
    })
}

export const publicPostFunction = (params:string) => {
    return new Promise(resolve => {
        axios({
            url:`http://127.0.0.1:3000${params}`,
            method:'POST',
            data:{
                cookie:localStorage.getItem('cookie')
            }
        }).then(data => {
            resolve(data.data)
            useStore().Start.ToggleStatus(true)

        })
    })
}




