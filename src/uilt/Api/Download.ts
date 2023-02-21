import axios from 'axios'
import file from 'file-saver'
import useStore from "../../stores/counter";
import {MusicPageNoticeShow} from "../PublicStatus";

export const DownloadSong = (id:string , name:string,singer:string) => {
    MusicPageNoticeShow.value = true
    useStore().Start.reviseMusicNotice('正在下载请稍候......')
    axios({
        url:`http://127.0.0.1:3000/song/url?id=${id}&timestamp=${Date.now()}`,
        method:'POST',
        data:{
            cookie:localStorage.getItem('cookie')
        }
    }).then(data => {
        d(data.data.data[0].url , name + '-' + singer)
    })
    useStore().Start.reviseMusicNotice('下载完成')

}

const d  = (url:string,name:string) => {
    axios({
        url:url,
        method:'GET',
        responseType:'blob'
    }).then(res => {
        file.saveAs(res.data,name+'.mp3')
    })
}


