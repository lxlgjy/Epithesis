const Element = () => {
    let HomeAudio = document.querySelector('#Audio') as HTMLAudioElement //播放
    let HomeUl = document.querySelector('.main-ul') as HTMLUListElement // 首页滑动
    let HomeBox = document.querySelector('#main-box') as HTMLDivElement // 首页滑动
    let LyricULBox = document.querySelector('#PlayLyricScroll') as HTMLUListElement
    let Capabilities = document.querySelector('#capabilities') as HTMLDivElement //右击功能


    return {HomeUl, HomeBox , HomeAudio , LyricULBox , Capabilities }
}


export default Element