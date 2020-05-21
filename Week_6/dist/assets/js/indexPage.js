"use strict";

// 輪播
var swiper; // 目前輪播的數量

var nowSwiper = 3;
$(document).ready(function () {
  // 初始化輪播
  swiper = new Swiper('.swiper-container', {
    // 自動播放
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    centeredSlides: false,
    autoplay: {
      // 縮放時不打斷自動播放
      disableOnInteraction: true,
      delay: 3000
    },
    breakpoints: {
      // when window width is >= 460px
      460: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=indexPage.js.map
