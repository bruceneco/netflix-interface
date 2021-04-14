window.addEventListener("scroll", () => {
  const header = document.getElementsByClassName("header")[0];
  if (window.scrollY > 0) {
    header.classList.add("solid-header");
  } else {
    header.classList.remove("solid-header");
  }
});

document.onload = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    alert("Vi que você está usando o celular para visualizar. Infelizmente o intuito desse site não é ficar agradável ao celular, então a interface dele só fica bonita quando acessada de um computador.")
  }
}

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
