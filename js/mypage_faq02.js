// トグルに設定
jQuery(function ($) {
  $(".option2").css("display", "none");
  // 質問の答えをあらかじめ非表示
  
  //質問をクリック
  $(".option1").click(function () {
      
  //クリックしたoption以外の全てのopen,writtenを取る
  $(".option1").not(this).children("span").removeClass("open");
  $(".option1").not(this).removeClass("written");
  
  // クリックされたoption以外のoption2を閉じる
  $(".option1").not(this).children("div").slideUp(300);
  
  //thisにopen,writtenクラスを付与
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
  
  // テキストエリアに文字が入力されていたら、テキストエリアの外はチェックと同様のエフェクトを追加
  const a1_1 = Boolean($("#label1_1_1").prop('checked'));
  const a1_2 = Boolean($("#label1_1_2").prop('checked'));
  const a1_3 = Boolean($("#label1_1_3").prop('checked'));
  const a1_4 = Boolean($("#label1_1_4").prop('checked'));
  const a1_5 = Boolean($("#label1_1_5").prop('checked'));
  const a1_6 = Boolean($("#label1_1_6").prop('checked'));
  const a2_1 = Boolean($("#label1_2_1").prop('checked'));
  const a2_2 = Boolean($("#label1_2_2").prop('checked'));
  const a2_3 = Boolean($("#label1_2_3").prop('checked'));
  const a2_4 = Boolean($("#label1_2_4").prop('checked'));
  const a2_5 = Boolean($("#label1_2_5").prop('checked'));
  const a2_6 = Boolean($("#label1_2_6").prop('checked'));
  const a3_1 = Boolean($("#label1_3").prop('checked'));

  $('.fa1').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      console.log(a);
      if (a !== 0) {
      $(".label1_1_6").css("background", "#8B806C");
      $(".label1_1_6").css("border", "solid 1px #8B806C");
      $(".label1_1_6").css("color", "white");
      $('#label1_1_6').prop('checked', true);
      $('#submit').removeAttr('disabled');
      }else if(a1_1 == true && a1_2 == false && a1_3 == false && a1_4 == false && a1_5 == false && a1_6 == false && a2_1 == false && a2_2 == false && a2_3 == false && a2_4 == false && a2_5 == false && a2_6 == false && a3_1 == false){
        $(".label1_1_6").css("background", "white");
        $(".label1_1_6").css("border", "solid 1px #6A4E4E");
        $(".label1_1_6").css("color", "#6A4E4E");
        $('#label1_1_6').prop('checked', false);
        $('#submit').attr('disabled', 'disabled');
    }else{
        $(".label1_1_6").css("background", "white");
        $(".label1_1_6").css("border", "solid 1px #6A4E4E");
        $(".label1_1_6").css("color", "#6A4E4E");
        $('#label1_1_6').prop('checked', false);
        $('#submit').removeAttr('disabled');
    }
  });
  $('.fa2').bind('keydown keyup keypress change',function(){
      const a = $("input.fa2").val().length;
      console.log(a);
      if (a !== 0) {
      $(".label1_2_6").css("background", "#8B806C");
      $(".label1_2_6").css("border", "solid 1px #8B806C");
      $(".label1_2_6").css("color", "white");
      $('#label1_2_6').prop('checked', true);
      $('#submit').removeAttr('disabled');
      }else if(a1_1 == true && a1_2 == false && a1_3 == false && a1_4 == false && a1_5 == false && a1_6 == false && a2_1 == false && a2_2 == false && a2_3 == false && a2_4 == false && a2_5 == false && a2_6 == false && a3_1 == false){
        $(".label1_2_6").css("background", "white");
        $(".label1_2_6").css("border", "solid 1px #6A4E4E");
        $(".label1_2_6").css("color", "#6A4E4E");
        $('#label1_2_6').prop('checked', false);
        $('#submit').attr('disabled', 'disabled');
      }else{
        $(".label1_2_6").css("background", "white");
        $(".label1_2_6").css("border", "solid 1px #6A4E4E");
        $(".label1_2_6").css("color", "#6A4E4E");
        $('#label1_2_6').prop('checked', false);
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