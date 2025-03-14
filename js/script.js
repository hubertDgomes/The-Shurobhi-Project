new Typed("#typed", {
  strings: ["Piku", "Roshmalai", "Priyanka","My First Love","Everything"],
  typeSpeed: 20,
  delaySpeed: 40,
  loop: true,
});

new Typed("#typed2", {
  strings: ["Dhrubo", "Dhurboshita", "Momo","Honey","Baccha"],
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

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
