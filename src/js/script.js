$(document).ready(function(){

  // Функция вызова Toggle
  function openToggle() {
    $(".main-toggle-nav").slideToggle("slow");
  }
  $('.btn-toggle').on('click', openToggle);

// Карусель в блоке "trace"
  $('.slick-collection').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  });


// При выборе размера меняем картинку

    function changeSlide() {
      var number = $(this).data('numbtn');
      console.log(number);
      if ($(this).hasClass('btn-size--active')) {
      } else {
        $('.btn-size').removeClass('btn-size--active');
        $('.slider-model-img').removeClass('slider-model-img--active');
        $(this).addClass('btn-size--active');
        $('.slider-model-img').eq(number - 1).addClass('slider-model-img--active');
      }
    }
    $('.btn-size').on('click', changeSlide);


});
