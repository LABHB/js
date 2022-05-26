jQuery(function ($) {
  $(".r_accordion-content:not(:first-of-type)").css("display", "none");// コンテンツがいくつかあったときに、1つ目以外が閉じるように設定
  //nth-of-typeは使い方注意：https://miyattiblog.com/why-nth-of-type-and-nth-child-do-not-work/#nth-of-type-2
  $(".r_js-accordion-title:first-of-type").addClass("open");// 最初のタイトルのみが開いているように設定
  $('.r_js-accordion-title').on('click', function () {// タイトルがクリックされたら
    $(this).next().slideToggle(200);// ゆっくりとスライドアップ&ダウン
    $(this).toggleClass('open', 200);// タイトルに.openを付与
  });  
  });

jQuery(function ($) {
  $('.js-accordion-title').on('click', function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass('open', 200);
    });
  });

$(document).ready(function () {
  $("#header-btn").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});