window.addEventListener("scroll", () => {
  const header = document.getElementsByClassName("header")[0];
  if (window.scrollY > 0) {
    header.classList.add("solid-header");
  } else {
    header.classList.remove("solid-header");
  }
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    },
    1400: {
      items: 7
    }
  }
})
