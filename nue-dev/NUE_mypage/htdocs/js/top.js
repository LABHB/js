jQuery(function ($) {
  // $(".r_accordion-content:not(:first-of-type)").css("display", "none");// コンテンツがいくつかあったときに、1つ目以外が閉じるように設定（今回の場合不要だが、cssで操作できるもの）
  //nth-of-typeは使い方注意：https://miyattiblog.com/why-nth-of-type-and-nth-child-do-not-work/#nth-of-type-2
  $(".r_js-accordion-title:first-of-type").addClass("open");// 最初のタイトルのみが開いているように設定
  $('.r_js-accordion-title').on('click', function () {// タイトルがクリックされたら
    const $wrapper = $(this).closest(".r_js-accordion-container");
    const $target = $wrapper.find(".r_js-accordion-content");
    $target.slideToggle(200);// ゆっくりとスライドアップ&ダウン
    $(this).toggleClass('open', 200);// タイトルに.openを付与
  });  
  });

$(document).ready(function () {
  $("#header-btn").on("click",function(){
    $("body").toggleClass("is-openMenu");
  });
});