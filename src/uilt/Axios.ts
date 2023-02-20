import axios from "axios";

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
        })
    })
}





//     //歌词获取
//     else if (type == 'MusicSongLyric') {
//         const data: any = await GET(params)
//         useStore().getMusicSongLyric(data.data.lrc.lyric)
//     }



//     //喜欢的音乐
//     else if (type === 'love') {
//         const data: any = await GET(params , 'post')
//         useStore().getMusicLoveList(data.data.playlist)
//     }
//     //
//     else if(type === 'MyLove') {
//         const data: any = await GET(params , 'post')
//         console.log(data.data.songs)
//         useStore().getMusicLoveMyList(data.data.songs)
//
//     }
//     //最近播放
//     else if(type === 'MusicRecentlyPlayed') {
//         const data: any = await GET(params , 'post')
//         console.log(data.data)
//     }
// }



