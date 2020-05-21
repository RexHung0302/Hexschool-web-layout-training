"use strict";

//- 打開折疊
function openCollapseHandler(that) {
  //- 取得目標
  var target = document.getElementById('navbarRow'); //- 判斷有無 active 新增或刪除

  target.classList.toggle('showMenuList');
} // 換頁


function changePageHandler(targetPage) {
  console.log($(window).width()); // 小於 992px 可以用下拉的方式選擇要去哪一頁

  if (targetPage === 'Product' && $(window).width() < 992) return;
  window.location = '/product.html';
} //- 判斷目前頁面並加上 Class 讓側邊顯示該有的 CSS


$(document).ready(function () {
  // console.log(!!location.pathname.match(/admin.html/i));
  // 目前在 首頁 頁面
  if (!!location.pathname.match(/index/i)) {
    // navbar 替 a 標籤加上白色文字
    $('.header').addClass('nowOnIndexPage');
  } else if (!!location.pathname.match(/information|payment|done/i)) {
    // 目前在付款頁面１
    $('.bugerBtnIcon').remove();
    $('.menuList').remove();
    $('#footer').remove();
  }
}); //- 購物車新增數量

function addCountNumHandler(that, num, price) {
  //- 獲取這一層的 input value
  var targetNum = $(that).parent().find('input').val(); //- 獲取計算總價的 span

  var totalPriceSpan = $(that).parent().parent().parent().find('span')[0]; //- 如果減少之後小於一就 return;

  if (parseInt(targetNum) + num < 1) return; //- 增加

  $(that).parent().find('input').val(parseInt(targetNum) + num);
  totalPriceSpan.innerHTML = 'NT$' + formatNumber($(that).parent().find('input').val() * price);
} //- 加上逗點的 function


function formatNumber(str, glue) {
  // 如果傳入必需為數字型參數，不然就噴 isNaN 回去
  if (isNaN(str)) {
    return NaN;
  } // 決定三個位數的分隔符號


  var glue = typeof glue == 'string' ? glue : ',';
  var digits = str.toString().split('.'); // 先分左邊跟小數點

  var integerDigits = digits[0].split(""); // 獎整數的部分切割成陣列

  var threeDigits = []; // 用來存放3個位數的陣列
  // 當數字足夠，從後面取出三個位數，轉成字串塞回 threeDigits

  while (integerDigits.length > 3) {
    threeDigits.unshift(integerDigits.splice(integerDigits.length - 3, 3).join(""));
  }

  threeDigits.unshift(integerDigits.join(""));
  digits[0] = threeDigits.join(glue);
  return digits.join(".");
} //- 金錢格式化


function clearNumberText(str) {
  str = str.replace(/,|N|T/g, ""); // 取消字串中出現的所有逗號 

  return str;
} //- 移除商品


function removeGoodHandler(that) {
  //- 移除商品
  $(that).parents().eq(4).remove();
} //- 打開購物車


function openShoppingCartHandler() {
  //- 布幕
  var darkScreen = document.getElementById('darkScreen'); //- 購物車

  var shoppingCartModal = document.getElementById('shoppingCartModal'); //- 判斷有無 show 新增或刪除

  darkScreen.classList.toggle('show');
  shoppingCartModal.classList.toggle('show');
}
//# sourceMappingURL=all.js.map
