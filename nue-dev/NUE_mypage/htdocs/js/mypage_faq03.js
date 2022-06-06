jQuery(function ($) {
    $('#submit').attr('disabled', 'disabled'); //①
    $(".answer_box input[type='checkbox']").each(function(index, element){
        $(this).click(function() { //②
            if ( $(this).prop('checked') == false ) {　//③
            $('#submit').attr('disabled', 'disabled');　//④
        } else {
            $('#submit').removeAttr('disabled');　//⑤
        }
        const a = $(this).siblings("input");
        a.prop('checked', false); 
        const FAFilledOut = "fa-filledout";
        // const $target = ".label1_4";
        $(".label1_4").removeClass(FAFilledOut);
        $("input.fa1").val("");
        });
       });

  $('input:checkbox').click(function() {//  チェックした項目以外のチェックを外す
    const a = $(this).siblings("input");
    a.prop('checked', false);  
  });

// テキストエリアに文字が入力されていたら、テキストエリアの外はチェックと同様のエフェクトを追加、かつ「次へ」のボタンをクリックできるように
function textLabelStatus($target) {
    $($target).bind('keydown keyup keypress change blur',function(){
        const textLength = $("input"+$target).val().length;
        console.log(textLength);
        const FAFilledOut = "fa-filledout";
        if (textLength !== 0) {
            $($target).parent('label').addClass(FAFilledOut);
            const $wrapper = $(this).closest(".answer_box");
            const $tgt = $wrapper.find('input');
            $tgt.prop('checked', false);  
            $($target).parent('label')
            console.log($($target).parent('label'));
            $($target).parent('input').prop('checked', true);
            $('#submit').removeAttr('disabled');
        }else if ($(".chk:checked").length > 0) {
            $($target).parent('label').removeClass(FAFilledOut);
            $($target).parent('input').prop('checked', false);
            $('#submit').removeAttr('disabled');
        }else{
            $($target).parent('label').removeClass(FAFilledOut);
            $($target).parent('input').prop('checked', false);
            $('#submit').attr('disabled', 'disabled');
        }
    });
    }
    textLabelStatus('.fa1');
});