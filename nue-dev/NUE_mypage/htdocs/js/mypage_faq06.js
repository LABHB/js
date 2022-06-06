// トグルに設定
jQuery(function ($) {
    const HIDDEN_CLASS = "is-hidden";
    $(".option2").addClass(HIDDEN_CLASS);
  
  //質問をクリック
  $(".option1").click(function () {
      const $wrapper = $(this).closest("div");
      const $target = $wrapper.find("span");
      const $tgt = $wrapper.find(".chk");
      console.log($target);
      console.log($($target).hasClass("open"));
      if ($($target).hasClass("open") == false) {
          $(this).addClass("written");
        }else if($(".chk:checked").length == 0 && $($target).hasClass("open") == true){
        console.log($(this).find(".chk"));
        console.log("OK");
        $(this).removeClass("written");
    }else if($(".chk:checked").length !== 0 && $($target).hasClass("open") == true){
        $(this).addClass("written");
        console.log($(this).find(".chk").find('input[type="checkbox"]:checked'));
        console.log("Ha");
      }
      
  //クリックしたoption以外の全てのopenを取る
  $(".option1").not(this).children("span").removeClass("open");
//   $(".option1").not(this).removeClass("written");
  
  // クリックされたoption以外のoption2を閉じる
  $(".option1").not(this).children("div").slideUp(300);
  
  //thisにopenクラスを付与
  $(this).children("span").toggleClass("open");
//   $(this).addClass("written");
  
  //thisのcontentを展開、開いていれば閉じる
  console.log($(this).children(".option2"));
  $(this).children("div").slideToggle(300);

  //option2をクリックした際に、２重でクリックイベントが発生するのを防ぐ
  $(".option2btn").on('click',function(event){
      event.stopPropagation();
  }); 
  });
});


// なにも選択していない状況で「次に」に進めないように設定
$(function() {
    $('#submit').attr('disabled', 'disabled'); //①
    
    $(".answer_box input").each(function(index, element){
        $(this).click(function() { //②
            if ( $(this).prop('checked') == false && $(".chk:checked").length == 0) {　//③
            $('#submit').attr('disabled', 'disabled');　//④
        } else {
            const $wrapper = $(this).closest(".answer_box");
            const $tgt = $wrapper.find('input[type="checkbox"]');
            const $tgtspn = $wrapper.find('.option1');
            const $tgtspnself = $(this).closest(".option1");
            $tgt.not(this).prop('checked', false);  
            $tgtspn.not($tgtspnself).removeClass('written');  
            console.log($tgtspn);
            $('#submit').removeAttr('disabled');　//⑤
        }
        });
       });
});