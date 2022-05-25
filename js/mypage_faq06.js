// トグルに設定
jQuery(function ($) {
  $(".option2").css("display", "none");
  // 質問の答えをあらかじめ非表示
  
  //質問をクリック
  $(".option1").click(function () {
      
  //クリックしたoption以外の全てのopenを取る
  $(".option1").not(this).children("span").removeClass("open");
  $(".option1").not(this).removeClass("written");
  
  // クリックされたoption以外のoption2を閉じる
  $(".option1").not(this).children("div").slideUp(300);
  
  //thisにopenクラスを付与
  $(this).children("span").toggleClass("open");
  $(this).toggleClass("written");
  
  //thisのcontentを展開、開いていれば閉じる
  console.log($(this).children(".option2"));
  $(this).children("div").slideToggle(300);

  //option2をクリックした際に、２重でクリックイベントが発生するのを防ぐ
  $(".option2btn").on('click',function(event){
      event.stopPropagation();
  });  
  });
  
  // テキストエリアに文字が入力されていたら、テキストエリアの外はチェックと同様のエフェクトを追加、かつ「次へ」のボタンをクリックできるように
  $('.fa1').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      console.log(a);
      if (a !== 0) {
      $(".label1_1_3").css("background", "#8B806C");
      $(".label1_1_3").css("border", "solid 1px #8B806C");
      $(".label1_1_3").css("color", "white");
      $('#submit').removeAttr('disabled');
  }
  });
  $('.fa2').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      console.log(a);
      if (a !== 0) {
      $(".label1_2_3").css("background", "#8B806C");
      $(".label1_2_3").css("border", "solid 1px #8B806C");
      $(".label1_2_3").css("color", "white");
      $('#submit').removeAttr('disabled');
      }
  });
});


// なにも選択していない状況で「次に」に進めないように設定
$(function() {
$('#submit').attr('disabled', 'disabled'); //①
    $('#label1_3').click(function() { //②
    if ( $(this).prop('checked') == false ) {　//③
        $('#submit').attr('disabled', 'disabled');　//④
    } else {
        $('#submit').removeAttr('disabled');　//⑤
    }
});
$('#label1_2_1').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_2_2').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_2_3').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_2_4').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_2_5').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_2_6').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_1_1').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_1_2').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_1_3').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_1_4').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_1_5').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});
$('#label1_1_6').click(function() { //②
  if ( $(this).prop('checked') == false ) {　//③
      $('#submit').attr('disabled', 'disabled');　//④
  } else {
      $('#submit').removeAttr('disabled');　//⑤
  }
});

});