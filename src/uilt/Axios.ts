import axios from "axios";

export const Axios = (url:string,methods:string) => {
    return new Promise(reslove => {
        if(methods == 'get') {
            axios.get(url).then(res => {
                reslove(res)
            })
        }
    })
}