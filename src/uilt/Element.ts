const Element = () => {
    let HomeAudio = document.querySelector('#Audio') as HTMLAudioElement //播放
    let HomeUl = document.querySelector('.main-ul') as HTMLUListElement // 首页滑动
    let HomeBox = document.querySelector('#main-box') as HTMLDivElement // 首页滑动
    let LyricULBox = document.querySelector('#PlayLyricScroll') as HTMLUListElement
    let Capabilities = document.querySelector('#capabilities') as HTMLDivElement //右击功能
    let Background = document.querySelector('.Player-BackgroundImage') as HTMLDivElement //背景
    let PlayerLyric = document.querySelectorAll('.PlayerLyric') as NodeListOf<HTMLLIElement> //歌词每行高度
    let searchInputValue = document.querySelector('.Search-top-input input') as HTMLInputElement // 搜索
    let SearchAgain = document.querySelector('.SearchAgain') as HTMLInputElement // 再次搜索


    return {
        HomeUl,
        HomeBox,
        HomeAudio,
        LyricULBox,
        Capabilities,
        Background,
        PlayerLyric,
        searchInputValue,
        SearchAgain
    }
}


export default Element