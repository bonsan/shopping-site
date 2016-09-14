/*! サブメニュー */
$(document).ready(function(){

  $("#page_link h4").click(function () {
    if($(this).hasClass("openlink")){
      $(this).removeClass("openlink");
    }else{
      $(this).addClass("openlink");
    }
      $("#page_link h4 + ul").slideToggle();
  });

  $("#categories_link h4").click(function () { /
    if($(this).hasClass("openlink")){
        $(this).removeClass("openlink");
    }else{
      $(this).addClass("openlink");
    }
      $("#categories_link h4 + ul").slideToggle();
  });
});
