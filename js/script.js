new Typed("#typed", {
  strings: ["Piku", "Roshmalai", "Priyanka","My First Love","Everything"],
  typeSpeed: 20,
  delaySpeed: 40,
  loop: true,
});

$(".pikus").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
});
