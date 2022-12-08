// 首页Swiper轮播
// 2022-11-24     11-30重写

const Swiper = () => {
    const swiperlist = <HTMLDivElement>document.querySelector('.main-box-first')
    const list = <HTMLUListElement>document.querySelector('.main-ul')
    const lis = document.querySelectorAll('#mainOrigin ul li') as NodeListOf<HTMLLIElement>
    return {
        swiperlist,
        list,
        lis
    }
}

const yuandian = () => {
    // ts li类型检查失误
    const li = document.querySelectorAll('#mainOrigin ul li') as NodeListOf<HTMLLIElement>
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = '#ccc'
    }

    yaundLen(li)
}

export const yaundLen = ( li:any) => {
    const list = <HTMLUListElement>document.querySelector('.main-ul')
    let lisLen = parseInt(list.style.left)
    switch (lisLen) {
        case 0 :
            li[0].style.backgroundColor = '#868686'
            break
        case -1220:
            li[1].style.backgroundColor = '#868686'
            break
        case -2440:
            li[2].style.backgroundColor = '#868686'
            break
        case -3660:
            li[3].style.backgroundColor = '#868686'
            break
        case -4880:
            li[4].style.backgroundColor = '#868686'
            break
        case -6100:
            li[5].style.backgroundColor = '#868686'
            break
        case -7320:
            li[6].style.backgroundColor = '#868686'
            break
    }
}


// 原点
export const OriginHander = () => {
    const li = document.querySelectorAll('#mainOrigin ul li') as NodeListOf<HTMLLIElement>
    li[0].style.backgroundColor = '#868686'
    yaundLen(li)
}

export const HanderLeft = () => {
    const {list, swiperlist} = Swiper()
    list.style.left == '0px' ? list.style.left = '0px' : list.style.left = parseInt(list.style.left) + swiperlist.offsetWidth + 'px'
    yuandian()
}

export const HanderRight = () => {
    const {list, swiperlist, lis} = Swiper()
    list.style.left == -(lis.length - 1) * swiperlist.offsetWidth + 'px' ? list.style.left = '0px' : list.style.left = parseInt(list.style.left) - swiperlist.offsetWidth + 'px'
    yuandian()

}



