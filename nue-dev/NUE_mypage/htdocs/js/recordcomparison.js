'use strict';

// タブ切り替え
$(function(){
  $('.bl_tabList li a').click(function (e) {
    e.preventDefault();
    $('.bl_tabList li a').removeClass('active');
    $('.bl_tabContent > div').removeClass('active');
    $(this).addClass('active');
    const array = $('.bl_tabList li a').index(this);
    $('.bl_tabContent > div').eq(array).fadeIn(300).addClass('active');
    $('.bl_tabContent > div').not('.active').hide();
  });
});

// スムーススクロール
window.addEventListener('DOMContentLoaded', function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.from(anchorLinks);

  anchorLinksArr.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top; //ここに- 50 などと数値を入れるとヘッダー固定のスクロールが実現できる
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});

// インクルード（必要？）
fetch("./record00.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".record00").innerHTML = data;
  });
fetch("./record01.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".record01").innerHTML = data;
  });

// ガイドを消す
  $('body').on('click', '.batsu' , function() {
    $(".compareguide").css("display", "none");
});