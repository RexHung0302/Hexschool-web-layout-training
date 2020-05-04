//- 按鈕
const menu = document.getElementById('menu');
//- 收尋欄位
const searchRow = document.getElementById('searchRow');

//- 漢堡鈕點擊事件
function iconMenuClick() {
  //- 加上 active 或隱藏
  menu.classList.toggle('active');
}

//- 打開折疊
function openCollapseHandler(that) {
  console.log(that.parentNode, that.classList);
  //- 取得父節點
  let parent = that.parentNode;
  //- 判斷有無 active 新增或刪除
  parent.classList.toggle('active');
}

//- 收尋欄下拉
function searchRowPullClick() {
  searchRow.classList.toggle('active');
}