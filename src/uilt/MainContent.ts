// 首页Swiper轮播
// 2022-11-24
export const Swiper = () => {


    const swiperBox = <HTMLDivElement>document.querySelector('.main-box-first')
    const leftButton = <HTMLAnchorElement>document.querySelector('.main-slide-left a')
    const rightButton = <HTMLAnchorElement>document.querySelector('.main-slide-right a')

    const list = <HTMLUListElement>document.querySelector('.main-ul')

    list.style.left = 0 + 'px'

    let index = 0

    slide(leftButton, list, swiperBox, 'left')
    slide(rightButton, list, swiperBox, 'right')
}


// 滑动函数
function slide(doc: HTMLAnchorElement, list: HTMLUListElement, box: HTMLDivElement, direction: string) {
    if (direction === 'left') {
        doc.addEventListener('click', (e) => {
            e.preventDefault()
            // list.style.left = '0px' ? list.style.left :
            list.style.left =parseInt(list.style.left) + box.offsetWidth + 'px'
        })
    } else {
        doc.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(parseInt(list.style.left))
            // list.style.left > '-100000px' ? list.style.left :
            list.style.left= parseInt(list.style.left) + (- box.offsetWidth) + 'px'
        })
    }
}
