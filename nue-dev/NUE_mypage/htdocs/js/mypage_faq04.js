// なにも選択していない状況で「次に」に進めないように設定
$(function() {
    $(".answer_box input[type='checkbox']").each(function(index, element){
        $(this).click(function() { //②
            if ( $(this).prop('checked') == false && $(".chk:checked").length == 0) {　//③
            $('#submit').attr('disabled', 'disabled');　//④
        } else {
            $('#submit').removeAttr('disabled');　//⑤
        }
        });
       });

  function textLabelStatus($target) {
    $($target).bind('keydown keyup keypress change blur',function(){
        const textLength = $("input"+$target).val().length;
        const FAFilledOut = "fa-filledout";
        if (textLength !== 0) {
            $($target).parent('label').addClass(FAFilledOut);
            $($target).parent('input').prop('checked', true);
            $('#submit').removeAttr('disabled');
        }else{
            $($target).parent('label').removeClass(FAFilledOut);
            $($target).parent('input').prop('checked', false);
        }
    });
    }
    textLabelStatus('.fa1');
  });
  
  