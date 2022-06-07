
$(document).ready(function(){
    

  var swiper = new Swiper(".firstSwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay:{
        delay:3000
    },
  });

  var swiper = new Swiper(".secondSwiper", {
    // direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay:{
        delay:3000
    },
  });
    

    var ww = $(window).width();
    media();
    
    function media(){
      if(ww >= 1200){
        //풀페이지 플러그인
        new fullpage('#wrap', {
            anchors: ['firstPage','secondPage','3rdPage','4rdPage','5rdPage','6rdPage'],
          scrollBar: true
        });
    }else{
      
    }
    $(window).resize(function(){
      ww = $(window).width();
      media();
    });
    
    $('.arrow').click(function(){
      $('.allert-box').addClass('active');
    });
    $('.close').click(function(){
      $('.allert-box').removeClass('active');
    });
    
}
}); //end