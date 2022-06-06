// トグルに設定
jQuery(function ($) {
  const HIDDEN_CLASS = "is-hidden";
  $(".option2").addClass(HIDDEN_CLASS);
  
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

  $(".answer_box input[type='text']").each(function(index, element){
    $(this).bind('keydown keyup keypress change',function(){
      const textLength = $(this).val().length;
      const FAFilledOut = "fa-filledout";
      if (textLength == 0 && $(".chk:checked").length == 0) {
        $(this).parents('.option1').removeClass(FAFilledOut);
        $(this).prev('input[type="checkbox"]').prop('checked', false);
        $('#submit').attr('disabled', 'disabled');
      }else if(textLength == 0){
        $(this).parents('.option1').removeClass(FAFilledOut);
        $(this).prev('input[type="checkbox"]').prop('checked', false);
      }else{
        const $wrapper = $(this).closest(".option2");
        const $tgt = $wrapper.find('input[type="checkbox"]');
        $(this).parents('.option1').addClass(FAFilledOut);
        $($tgt).prop('checked', true);
        console.log($tgt);
        $('#submit').removeAttr('disabled');
      }
    });
   });
});
