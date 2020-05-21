"use strict";

//- 打開折疊
function openCollapseHandler(that) {
  //- 取得目標
  var infoBox = document.getElementById('infoBox');
  var arrowIcon = document.getElementById('arrowIcon'); //- 判斷有無 show 新增或刪除

  infoBox.classList.toggle('show');
  arrowIcon.classList.toggle('show');
}
//# sourceMappingURL=information.js.map
