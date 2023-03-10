const Element = () => {
    let HomeAudio = document.querySelector('#Audio') as HTMLAudioElement //播放
    let HomeUl = document.querySelector('.main-ul') as HTMLUListElement // 首页滑动
    let HomeBox = document.querySelector('#main-box') as HTMLDivElement // 首页滑动
    let LyricULBox = document.querySelector('#PlayLyricScroll') as HTMLUListElement
    let Capabilities = document.querySelector('#capabilities') as HTMLDivElement //右击功能
    let Background = document.querySelector('.Player-BackgroundImage') as HTMLDivElement //背景
    let PlayerLyric = document.querySelectorAll('.PlayerLyric') as NodeListOf<HTMLDivElement> //歌词每行高度


    return {HomeUl, HomeBox, HomeAudio, LyricULBox, Capabilities, Background, PlayerLyric}
}


export default Element