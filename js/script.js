$(document).ready(function(){
    $('.galery__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/right.svg"></button>'
    });
  });

  $('.galery_certificate').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev1"><img src="../img/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next2"><img src="../img/right.svg"></button>',
    speed: 1200
  });