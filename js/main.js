$(function(){
    $('.slider__inner').slick({
        
        arrows: false,
        asNavFor:'.rtumb', 
    });

    $('.rtumb').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
    });

});

  
  
  
  
  