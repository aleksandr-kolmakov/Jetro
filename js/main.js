$(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor:'.trumb', 
    });

    $('.trumb').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        centerMode: false,
        focusOnSelect: true,
    });

});

  
  



  
  