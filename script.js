$(document).ready(function () {
  $(".award__carousel").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});

$(document).ready(function () {
  $(".banner__carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true
  });
});

$(".project__content-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: ".project__image-carousel",
  adaptiveHeight: true
});
$(".project__image-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".project__content-carousel",
  fade: true,
  adaptiveHeight: true
});

const mobileNavClose = document.querySelector(".mobile-nav-close");
const mobileNavOpen = document.querySelector(".mobile-nav-open");
const mobileNavList = document.querySelector(".nav-list");

mobileNavOpen.addEventListener("click", (e) => {
  mobileNavList.classList.toggle("active");
});

mobileNavClose.addEventListener("click", (e) => {
  mobileNavList.classList.toggle("active");
});