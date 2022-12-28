// 首页Swiper轮播
// 2022-11-24     11-30重写

const Swiper = (UL: string, BOX: string, LI: string) => {
    const swiperlist = <HTMLDivElement>document.querySelector(BOX)
    const list = <HTMLUListElement>document.querySelector(UL)
    const lis = document.querySelectorAll(LI) as NodeListOf<HTMLLIElement>
    return {
        swiperlist,
        list,
        lis
    }
}


export const HanderLeft = (UL: string, BOX: string, LI: string) => {
    const {list, swiperlist} = Swiper(UL, BOX, LI)
    list.style.left == '0px' ? list.style.left = '0px' : list.style.left = parseInt(list.style.left) + swiperlist.offsetWidth + 'px'
}

export const HanderRight = (UL: string, BOX: string, LI: string,index:number) => {
    const {list, swiperlist, lis} = Swiper(UL, BOX, LI)
    list.style.left == -((lis.length / index) - 1) * swiperlist.offsetWidth + 'px' ? list.style.left = '0px' : list.style.left = parseInt(list.style.left) - swiperlist.offsetWidth + 'px'
}


export const Aired = () => {
    const li = document.querySelectorAll('.p-hang-li-box')
    const i = document.querySelectorAll('.p-hang-li-div-adr i') as NodeListOf<HTMLElement>

    li.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            i[index].className = 'p'
            i[index].innerHTML = ''
        })
        item.addEventListener('mouseleave', () => {
            i[index].className = ''
            i[index].innerHTML = '——'
        })
    })
}


