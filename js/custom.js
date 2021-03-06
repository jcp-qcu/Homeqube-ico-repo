$(function(){
    
    $('.slider').slick({
      
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        dots: false,
        ease: true,
        prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: false,
              nextArrow: false
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              unslick: true,
              dots: false,
              prevArrow: false,
              nextArrow: false
            },
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    
      
});