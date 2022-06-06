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
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

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

// インクルード
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
fetch("inc/calendar02.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar02").innerHTML = data;
  });
fetch("inc/calendar03.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar03").innerHTML = data;
  });
fetch("inc/calendar04.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar04").innerHTML = data;
  });
fetch("inc/calendar05.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar05").innerHTML = data;
  });
  fetch("inc/calendar06.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar06").innerHTML = data;
  });
  fetch("inc/calendar07.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar07").innerHTML = data;
  });
  fetch("inc/calendar08.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar08").innerHTML = data;
  });
  fetch("inc/calendar09.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar09").innerHTML = data;
  });
  fetch("inc/calendar10.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar10").innerHTML = data;
  });
  fetch("inc/calendar11.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".calendar11").innerHTML = data;
  });
  fetch("inc/calendar12.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector(".calendar12").innerHTML = data;
    });


    // ガイドを消す
  $('body').on('click', '.batsu' , function() {
    console.log("ok");
    $(".compareguide").css("display", "none");
});