// なにも選択していない状況で「次に」に進めないように設定
$(function() {
  $('#submit').attr('disabled', 'disabled'); //①
      $('#label1_1').click(function() { //②
      if ( $(this).prop('checked') == false ) {　//③
          $('#submit').attr('disabled', 'disabled');　//④
      } else {
          $('#submit').removeAttr('disabled');　//⑤
      }
  });
      $('#label1_2').click(function() { //②
      if ( $(this).prop('checked') == false ) {　//③
          $('#submit').attr('disabled', 'disabled');　//④
      } else {
          $('#submit').removeAttr('disabled');　//⑤
      }
  });
      $('#label1_3').click(function() { //②
      if ( $(this).prop('checked') == false ) {　//③
          $('#submit').attr('disabled', 'disabled');　//④
      } else {
          $('#submit').removeAttr('disabled');　//⑤
      }
  });
      $('#label1_4').click(function() { //②
      if ( $(this).prop('checked') == false ) {　//③
          $('#submit').attr('disabled', 'disabled');　//④
      } else {
          $('#submit').removeAttr('disabled');　//⑤
      }
  });
      // テキストエリアに文字が入力されていたら、テキストエリアの外はチェックと同様のエフェクトを追加、かつ「次へ」のボタンをクリックできるように
      $('.fa1').bind('keydown keyup keypress change blur',function(){
        const a = $("input.fa1").val().length;
        console.log(a);
        if (a !== 0) {
        $(".label1_5").css("background", "#8B806C");
        $(".label1_5").css("border", "solid 1px #8B806C");
        $(".label1_5").css("color", "white");
        $('#submit').removeAttr('disabled');
    }else{
        $(".label1_5").css("background", "white");
        $(".label1_5").css("border", "solid 1px #6A4E4E");
        $(".label1_5").css("color", "#6A4E4E");
        $('#submit').attr('disabled', 'disabled');
    }
    });
  });
  
  