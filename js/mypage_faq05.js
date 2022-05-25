// トグルに設定
jQuery(function ($) {
  $(".option2").css("display", "none");
  // 質問の答えをあらかじめ非表示
  
  //質問をクリック
  $(".option1").click(function () {
      
  //クリックしたoption以外の全てのopenを取る
  $(".option1").not(this).children("span").removeClass("open");
  
  // クリックされたoption以外のoption2を閉じる
  $(".option1").not(this).children("div").slideUp(300);
  
  //thisにopenクラスを付与
  $(this).children("span").toggleClass("open");
  
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
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
      const g = $("#label1_7").prop('checked');
      $("#label1_7").prop('checked') == false;
      if (a !== 0) {
      $(".label1_1").css("background", "#8B806C");
      $(".label1_1").css("border", "solid 1px #8B806C");
      $(".label1_1").css("color", "white");
      $('#submit').removeAttr('disabled');
      }else if(b === 0 && c === 0 && d === 0 && e === 0 && f === 0 &&  g == false) {
    $(".label1_1").css("background", "white");
    $(".label1_1").css("border", "solid 1px #6A4E4E");
    $(".label1_1").css("color", "#6A4E4E");
    $('#submit').attr('disabled', 'disabled');
  }else{
    $(".label1_1").css("background", "white");
    $(".label1_1").css("border", "solid 1px #6A4E4E");
    $(".label1_1").css("color", "#6A4E4E");
  }
  });
  $('.fa2').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
      const g = $("#label1_7").prop('checked');
      $("#label1_7").prop('checked') == false;
      if (b !== 0) {
      $(".label1_2").css("background", "#8B806C");
      $(".label1_2").css("border", "solid 1px #8B806C");
      $(".label1_2").css("color", "white");
      $('#submit').removeAttr('disabled');
      }else if(b === 0 && c === 0 && d === 0 && e === 0 && f === 0 &&  g == false) {
    $(".label1_2").css("background", "white");
    $(".label1_2").css("border", "solid 1px #6A4E4E");
    $(".label1_2").css("color", "#6A4E4E");
    $('#submit').attr('disabled', 'disabled');
  }else{
    $(".label1_2").css("background", "white");
    $(".label1_2").css("border", "solid 1px #6A4E4E");
    $(".label1_2").css("color", "#6A4E4E");
  }
  });
  $('.fa3').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
      const g = $("#label1_7").prop('checked');
      $("#label1_7").prop('checked') == false;
      if (c !== 0) {
      $(".label1_3").css("background", "#8B806C");
      $(".label1_3").css("border", "solid 1px #8B806C");
      $(".label1_3").css("color", "white");
      $('#submit').removeAttr('disabled');
      }else if(b === 0 && c === 0 && d === 0 && e === 0 && f === 0 &&  g == false) {
    $(".label1_3").css("background", "white");
    $(".label1_3").css("border", "solid 1px #6A4E4E");
    $(".label1_3").css("color", "#6A4E4E");
    $('#submit').attr('disabled', 'disabled');
  }else{
    $(".label1_3").css("background", "white");
    $(".label1_3").css("border", "solid 1px #6A4E4E");
    $(".label1_3").css("color", "#6A4E4E");
  }
  });
  $('.fa4').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
      const g = $("#label1_7").prop('checked');
      $("#label1_7").prop('checked') == false;
      if (d !== 0) {
      $(".label1_4").css("background", "#8B806C");
      $(".label1_4").css("border", "solid 1px #8B806C");
      $(".label1_4").css("color", "white");
      $('#submit').removeAttr('disabled');
      }else if(b === 0 && c === 0 && d === 0 && e === 0 && f === 0 &&  g == false) {
    $(".label1_4").css("background", "white");
    $(".label1_4").css("border", "solid 1px #6A4E4E");
    $(".label1_4").css("color", "#6A4E4E");
    $('#submit').attr('disabled', 'disabled');
  }else{
    $(".label1_4").css("background", "white");
    $(".label1_4").css("border", "solid 1px #6A4E4E");
    $(".label1_4").css("color", "#6A4E4E");
  }
  });
  $('.fa5').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
      const g = $("#label1_7").prop('checked');
      $("#label1_7").prop('checked') == false;
      if (e !== 0) {
      $(".label1_5").css("background", "#8B806C");
      $(".label1_5").css("border", "solid 1px #8B806C");
      $(".label1_5").css("color", "white");
      $('#submit').removeAttr('disabled');
      }else if(b === 0 && c === 0 && d === 0 && e === 0 && f === 0 &&  g == false) {
    $(".label1_5").css("background", "white");
    $(".label1_5").css("border", "solid 1px #6A4E4E");
    $(".label1_5").css("color", "#6A4E4E");
    $('#submit').attr('disabled', 'disabled');
  }else{
    $(".label1_5").css("background", "white");
    $(".label1_5").css("border", "solid 1px #6A4E4E");
    $(".label1_5").css("color", "#6A4E4E");
  }
  });
  $('.fa6').bind('keydown keyup keypress change',function(){
      const a = $("input.fa1").val().length;
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
      const g = $("#label1_7").prop('checked');
      $("#label1_7").prop('checked') == false;
      if (f !== 0) {
      $(".label1_6").css("background", "#8B806C");
      $(".label1_6").css("border", "solid 1px #8B806C");
      $(".label1_6").css("color", "white");
      $('#submit').removeAttr('disabled');
      }else if(b === 0 && c === 0 && d === 0 && e === 0 && f === 0 &&  g == false) {
    $(".label1_6").css("background", "white");
    $(".label1_6").css("border", "solid 1px #6A4E4E");
    $(".label1_6").css("color", "#6A4E4E");
    $('#submit').attr('disabled', 'disabled');
  }else{
    $(".label1_6").css("background", "white");
    $(".label1_6").css("border", "solid 1px #6A4E4E");
    $(".label1_6").css("color", "#6A4E4E");
  }
  });
});


// なにも選択していない状況で「次に」に進めないように設定
$(function() {
$('#submit').attr('disabled', 'disabled'); //①
    $('#label1_7').click(function() { //②
      const a = $("input.fa1").val().length;
      const b = $("input.fa2").val().length;
      const c = $("input.fa3").val().length;
      const d = $("input.fa4").val().length;
      const e = $("input.fa5").val().length;
      const f = $("input.fa6").val().length;
    if (b === 0 && c === 0 && d === 0 && e === 0 && f === 0 && $(this).prop('checked') == false ) {
        $('#submit').attr('disabled', 'disabled');　//④
    } else {
        $('#submit').removeAttr('disabled');　//⑤
    }
});
});