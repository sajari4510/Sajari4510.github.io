$(function() {
    var wrap = $(".wrap.fixed");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) wrap.addClass("sticky");
        else wrap.removeClass("sticky");
    });
});

$(document).ready(function() {

  $(window).scroll(function() {
      if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
        $('.popup').css( "left", "20px" )
        $('.arrow').hide();
      }else{
        $('.popup').css( "left", "-380px" ); 
        $('.arrow').show();
    }
  });
  
  $('.close').click(function(){
    $('.popup').hide();
  });
  
 
});


$('.arrow').click(function(){
   $("html").animate({ scrollTop: $('html').prop("scrollHeight")}, 1200);
   $('.popup').show();
});
