import axios from "axios";

export const Axios = (url:string,methods:string,type:string) => {
    return new Promise(reslove => {
        if(methods == 'get' && type == 'MusicHome') {
            axios.get(url).then(res => {
                reslove(res)
            })
        }
    })
}