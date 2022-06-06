// トグルに設定
jQuery(function ($) {
    // Option2（詳細項目）を最初は非表示
    const HIDDEN_CLASS = "is-hidden";
    $(".option2").addClass(HIDDEN_CLASS);
    
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
    function textLabelStatus($target) {
        $($target).bind('keydown keyup keypress change blur',function(){
            const textLength = $("input"+$target).val().length;
            console.log(textLength);
            const FAFilledOut = "fa-filledout";
            
            if (textLength !== 0) {
                $($target).parent('label').addClass(FAFilledOut);
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
      textLabelStatus('.fa2');
});


// なにも選択していない状況で「次に」に進めないように設定
$(function() {
  $('#submit').attr('disabled', 'disabled'); //①
      $('#label1_3').click(function() { //②
      if ($(this).prop('checked') == false && $(".chk:checked").length == 0) {　//③
          $('#submit').attr('disabled', 'disabled');　//④
      }else {
          $('#submit').removeAttr('disabled');　//⑤
      }
  });
  $(".option2btn input[type='checkbox']").each(function(index, element){  //85行目から168行目をeachで対応
    $(this).click(function() { //②
        if ( $(this).prop('checked') == false && $(".chk:checked").length == 0 ) {　//③
            $('#submit').attr('disabled', 'disabled');　//④
        } else {
            $('#submit').removeAttr('disabled');　//⑤
        }
    });
   });
});