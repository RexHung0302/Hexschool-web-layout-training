// 輪播
var swiper;
// 目前輪播的數量
var nowSwiper = 3;

$(document).ready(function(){
    // 初始化輪播
    swiper = new Swiper('.swiper-container-1', {
        // 自動播放
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: {
            // 縮放時不打斷自動播放
            disableOnInteraction: true,
            delay: 3000,
        },
        breakpoints: {
            // when window width is >= 460px
            720: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 768px
            960: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    // 初始化輪播-2
    swiper = new Swiper('.swiper-container-2', {
        // 自動播放
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: {
            // 縮放時不打斷自動播放
            disableOnInteraction: true,
            delay: 3000,
        },
        breakpoints: {
            // when window width is >= 460px
            720: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 768px
            960: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});