// 首页Swiper轮播
// 2022-11-24     11-30重写

const Swiper = () => {
    const swiperlist = <HTMLDivElement>document.querySelector('.main-box-first')
    const list = <HTMLUListElement>document.querySelector('.main-ul')
    const lis = document.querySelectorAll('#mainOrigin ul li')

    return {
        swiperlist,
        list,
        lis
    }

}


// 计算函数 圆点排列
export const OriginHander = (index:any) => {
    console.log(index)
}

export const HanderLeft = () => {
    const {list, swiperlist} = Swiper()
    list.style.left == '0px' ? list.style.left = '0px' : list.style.left = parseInt(list.style.left) + swiperlist.offsetWidth + 'px'
}

export const HanderRight = () => {
    const {list , swiperlist , lis } = Swiper()
    list.style.left == - (lis.length - 1) * swiperlist.offsetWidth + 'px' ? list.style.left = -(lis.length -1) * swiperlist.offsetWidth + 'px' : list.style.left = parseInt(list.style.left) - swiperlist.offsetWidth + 'px'
}

