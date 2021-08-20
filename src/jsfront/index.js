import $ from 'jquery'


function myFunc () {

  $(document).ready(function(){
    // $('#toogleMenuBtn').click( function(){
    //   $('.sm-nav').toggleClass('d-none');
    //   $('.close-menu').toggleClass('d-none');
    //   $('.open-menu').toggleClass('d-none');
    // });



    $('.image-carousel').click( function(event) {
      $('.image-active').removeClass('image-active');
      let target = event.target
      $(target).addClass('image-active')
      let img = $('#mainImg')
      let newImg = $(target).attr("src")
      img.attr('src', newImg)
    })

    var imgIndex = 0;
    let imgArray = $('.image-carousel img').toArray();
    let maxNumOfImgs = $(imgArray).length;

    function changeImg(count) {
      if (imgIndex === 0 && count === -1) {
        imgIndex = maxNumOfImgs - 1;
      } else if (imgIndex === maxNumOfImgs - 1 && count === 1) {
        imgIndex = 0;
      } else {
        imgIndex += count;
      }
      $('.image-active').removeClass('image-active');
      $(imgArray[imgIndex]).addClass('image-active');
      $('#mainImg').attr("src", ($('.image-active').attr("src")))
    }

    $('.prev-img').click( function(event) {
      changeImg(-1);
    })

    $('.next-img').click( function(event) {
      changeImg(1);
    })


    $('.feedback-cards').not('.slick-initialized').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,

      prevArrow: $('.prev-nav-btn button'),
      nextArrow: $('.next-nav-btn button'),
      appendDots: $('.nav-dots'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          }
        }
      ]
    });
  });
}
export default myFunc


