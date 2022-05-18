let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
    },
    breakpoints: {
      949: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      280: {
        spaceBetween: 5,
        slidesPerView: 1,
      }
    }
  });
  let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      949: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      650: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      500: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      350: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      280: {
        spaceBetween: 30,
        slidesPerView: 1,
      }
    }
  });
  let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".slider__next2",
      prevEl: ".slider__prev2",
    },
    breakpoints: {
      1140: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      280: {
        slidesPerView: 1,
        spaceBetween: 50,
      }
    }
  });
  let swiper4 = new Swiper(".mySwiper4", {
    loop: true,
    speed: 3000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });