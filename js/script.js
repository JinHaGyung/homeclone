
var swiper = new Swiper(".mySwiper", {
     autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  pagination: {
        el: ".pagination",
        type: "fraction"
      },
  loop:true,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".guideSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

var swiper = new Swiper(".rankSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {  
    480: {
      slidesPerView: 1,
    },
    766: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});