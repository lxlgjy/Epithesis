// 鼠标悬停歌单图片上，显示遮罩和播放图标
// 2022-11-21
export const slide = () => {

    const lis = document.querySelectorAll('.main-lis-kiss')
    const img = document.querySelectorAll('.main-lis-kiss img')
    const i = document.querySelectorAll('.main-masking')
    lis.forEach((item, index) => {
        item.addEventListener('mouseover', (e) => {
            e.preventDefault
            // img[index].className = 'w'
            // i[index].className = 's main-masking'


        })

        item.addEventListener('mouseleave', (e) => {
            e.preventDefault
            // img[index].className = ''
            // i[index].className = 'main-masking'


        });
    })


}