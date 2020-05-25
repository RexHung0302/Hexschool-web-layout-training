# Week_7 - 視差滾動

## 簡介

本週練習使用 **[AOS](https://michalsnik.github.io/aos/)** 套件 及 **[Animate](https://animate.style/#utilities)** 套件。

---

## 關卡目標

1. 學會不使用一行 JS 就做出視差滾動

---

## 心得

雖然之前有使用過 **[Animate](https://animate.style/#utilities)** 套件，但好像改版過了，而且單純使用這個套件無法達到滾動到這定區域就能出現動畫。

這週學到了 **[AOS](https://michalsnik.github.io/aos/)** 套件，甚至可以搭配 **[Animate](https://animate.style/#utilities)** 做使用，真的是很方便！

~~只是在使用上有點問題，這邊會先做上傳之後再補上解決方式，現在畫面剛開始停留的地方會出現動畫，其他地方加上 `data-aoe` 的滑到那邊不會出現，就算 **init** 的設定有把 `once: true;` 改為 `flase`，原本一開始畫面停留有動畫的地方畫面移去別的地方再回來，還是不會再跑一次。~~

20200525 後更： 感謝同組同學 Alex 幫忙找到問題了，因為自己犯蠢在 body 下了 overflow-x: hidden; 所以動畫都沒出現，目前正常了。

> *雖然本週作業可以拿之前的直接套上套件來做練習，但為了練習切版還是毛起來從頭切。*

---

## 安裝步驟

```
//- 安裝 node.js 跳過

1. $ npm install --global gulp //- 安裝全域 gulp, 如果無法安裝請在最前方加上 sudo -> 例：sudo npm i gulp -g

2. $ git clone 

3. $ cd Hexschool-web-layout-training 

4. $ cd Week_7 // 本次作業在第七週

5. $ npm install // 安裝套件

6. $ gulp // 輸入 gulp 後面如果沒帶名稱會自動抓 gulp 的 default 任務(Gulp 介紹請點參考下方連結處)

7. Enjoy!

```

---

## 連結

Source Code：[點我](https://github.com/RexHung0302/Hexschool-web-layout-training/tree/master/Week_7)

設計稿：[點我](https://xd.adobe.com/view/08ed586b-17ef-45c1-525f-be5513e81e53-7edc/screen/1db39d53-a7ea-417c-a1c6-a9d0803fcb38/Landing-page-1920)

Demo：[點我](https://rexhung0302.github.io/Hexschool-web-layout-training/Week_7/dist/index.html)

Blog: [點我](#)

> Gulp 介紹：[點我](https://rexhung0302.github.io/2020/05/06/20200506/#more)

---
