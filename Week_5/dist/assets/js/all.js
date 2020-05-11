"use strict";

var userRow = document.getElementsByClassName('userRow'); //- 判斷目前頁面

$(document).ready(function () {
  // alert(location.pathname);
  // 目前在 Admin 頁面
  if (location.pathname === '/admin.html') {
    $('#Admin_li').addClass('active');
  } // 目前在 Assignment 頁面
  else if (location.pathname === '/assignment.html') {
      $('#Assignment_li').addClass('active');
    } // 其他
    else {
        $('#Dashboard_li').addClass('active');
      }
}); //- 點擊打開回覆框

$('#outside_reply').click(function () {
  // let contentInfo_width = $('#contentInfo').width();
  var userRow_height = $('.userRow').height(); //- 加入 show Class name

  $('#messageBox').addClass('show'); //- 加入寬度高度

  $('#replyBox').css('width', '100%');
  $('#replyBox').css('height', userRow_height + 32 + 36);
}); //- 點擊關閉回覆框

$('#cancelBtn').click(function () {
  //- 移除 show Class name
  $('#messageBox').removeClass('show'); //- 移除寬度高度

  $('#replyBox').css('width', '0%');
  $('#replyBox').css('height', '0'); //- 清空輸入框框內容(使用 empty 因為是 Div 不是真的 Input)

  $('#contenteditableBox').empty('');
}); //- 點擊圖片上傳

$('#imgUploadBtn').click(function () {
  //- 先清空 input
  $('#imgUploadInput').val(''); //- 點擊隱藏的 Input 按鍵

  $('#imgUploadInput').click();
}); //- 圖片上傳

$('#imgUploadInput').change(function () {
  //- 檔案
  var file = $('#imgUploadInput').prop('files')[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function (e) {
    // 創造新標籤
    var imgElement = document.createElement('img'); // 取得圖片路徑

    var imgUrl = e.target.result; // 取得新的 ID

    var nweId = new Date(); // 加入 ID

    imgElement.setAttribute('id', nweId); // 加入圖片路徑

    imgElement.setAttribute('src', imgUrl); // 更改圖片大小

    imgElement.setAttribute('width', '200px');
    imgElement.setAttribute('height', '200px'); // 插入圖片

    $('#contenteditableBox').append(imgElement);
  };
}); //- 點擊檔案上傳

$('#fileUploadBtn').click(function () {
  //- 先清空 input
  $('#fileUploadInput').val(''); //- 點擊隱藏的 Input 按鍵

  $('#fileUploadInput').click();
}); ////////////////* 以下為 Admin 頁面 *////////////////
//- 顯示個人詳細資訊彈窗

function showDetailModalHandler() {
  $('#detailModal').addClass('modal-show');
}

; //- 顯示新增個人詳細資訊彈窗

function showAddDetailModalHandler() {
  $('#addDetailModal').addClass('modal-show');
}

; //- 顯示個人編輯詳細資訊彈窗

function showEditDetailModalHandler() {
  //- 設定角色的 Value
  $('#accessLevel').val('1');
  $('#editDetailModal').addClass('modal-show');
}

; //- 關閉個人詳細資訊彈窗 或 關閉新增個人詳細資訊彈窗 或 關閉個人編輯詳細資訊彈窗

$('.closeModal-btn').click(function () {
  $('#detailModal').removeClass('modal-show');
  $('#addDetailModal').removeClass('modal-show');
  $('#editDetailModal').removeClass('modal-show');
}); //- 顯示個人詳細按鈕

$('#showDetailBtn').click(function () {
  //- 加上 show 顯示按鈕
  $('#detailBtnInfo').toggleClass('show'); //- 加上 show 讓箭頭跑動畫

  $('#showDetailRow__arrowIcon').toggleClass('show');
}); //- 點擊空白區域外

$(document).mouseup(function (e) {
  var clickTargetArea = $(' #targetOne'); // 設定點擊目標區域

  var clickTargetArea_2 = $('#targetTwo'); // 設定點擊目標區域

  var clickTargetArea_3 = $('#targetThree'); // 設定點擊目標區域

  if (!clickTargetArea.is(e.target) && clickTargetArea.has(e.target).length === 0 && !clickTargetArea_2.is(e.target) && clickTargetArea_2.has(e.target).length === 0 && !clickTargetArea_3.is(e.target) && clickTargetArea_3.has(e.target).length === 0) {
    //- 關閉個人詳細資訊彈窗 或 關閉新增個人詳細資訊彈窗 或 關閉個人編輯詳細資訊彈窗
    $('#detailModal').removeClass('modal-show');
    $('#addDetailModal').removeClass('modal-show');
    $('#editDetailModal').removeClass('modal-show');
  }
});
//# sourceMappingURL=all.js.map
