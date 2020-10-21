// let swiper1 = new Swiper(".swiper1", {
//   pagination: ".swiper-pagination1",
//   paginationClickable: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// let swiper2 = new Swiper(".swiper-container", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   centeredSlides: true,
//   loop: true,
//   autoplay: { delay: 5000 },

//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
// });

let swiper1 = new Swiper(".swiper1", {
  loop: true,
  autoplay: { delay: 4000 },
  pagination: ".swiper-pagination1",
  paginationClickable: true,
});
let swiper2 = new Swiper(".swiper2", {
  slidesPerView: "1",
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 3000 },
  pagination: ".swiper-pagination2",
  paginationClickable: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
  }
});
