// トグルに設定




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