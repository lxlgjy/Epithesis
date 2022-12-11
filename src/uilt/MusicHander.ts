import {yaundLen} from './MainContent'
export const MuiscSwitch = (title:string,index:any) => {
    const list = <HTMLUListElement>document.querySelector('.main-ul')
    list.style.left = '0px'

    const li = document.querySelectorAll('#mainOrigin ul li') as NodeListOf<HTMLLIElement>

    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#ccc'
    }

    yaundLen(li)
    let TitleIndex = 0

    switch(title) {
        case '网络歌曲':
            index.value = 0;
            TitleIndex = 0
            break;
        case '浪漫':
            index.value = 1;
            TitleIndex = 1
            break;
        case '学习':
            index.value = 2;
            TitleIndex = 2
            break;
        case '轻音乐':
            index.value = 3;
            TitleIndex = 3
            break;
        case '华语':
            index.value = 4;
            TitleIndex = 4
            break;
    }
    HeaderTitle(TitleIndex)
}

const HeaderTitle = (index:number) => {
    const li = document.querySelectorAll('.main-title-level li') as NodeListOf<HTMLLIElement>

    for(let i = 0 ; i < li.length ; i++) {
        li[i].style.color = '#333'
    }
    li[index].style.color = '#39a9ed'


}