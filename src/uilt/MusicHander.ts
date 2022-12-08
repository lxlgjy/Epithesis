import {yaundLen} from './MainContent'
export const MuiscSwitch = (title:string,index:any) => {
    const list = <HTMLUListElement>document.querySelector('.main-ul')
    list.style.left = '0px'

    const li = document.querySelectorAll('#mainOrigin ul li') as NodeListOf<HTMLLIElement>

    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#ccc'
    }

    yaundLen(li)

    switch(title) {
        case '为你推荐':
            index.value = 0;
            break;
        case '原创经典':
            index.value = 1;
            break;
        case '网络歌曲':
            index.value = 2;
            break;
        case '官方歌单':
            index.value = 3;
            break;
        case '情歌':
            index.value = 4;
            break;
    }
}