const Carousel = (id, title, content) => `
    <section id="${id}" class="carousel">
          <p>${title}</p>
        <div id="${id}-swipe-left" class="swipe-left"><img class="${id}-arrow arrow" style="display: none;" src="./img/arrow.png"
                                                                   alt="Passar lista para esquerda"></div>
        <div id="${id}-list">
            ${content}        
        </div>
        <div id="${id}-swipe-right" class="swipe-right"><img class="${id}-arrow arrow" style="display: none;" src="./img/arrow.png"
                                                                     alt="Passar lista para direita"></div>
    </section>
`;


window.addEventListener("scroll", () => {
  const header = document.getElementsByClassName("header")[0];
  if (window.scrollY > 0) {
    header.classList.add("solid-header");
  } else {
    header.classList.remove("solid-header");
  }
});

const carousels = [
  {name: "Continuar assistindo", id: "keep-watching"},
  {name: "Novos na Netflix", id: "new-in-netflix"},
  {name: "Descubra", id: "discovery"},
];


carousels.forEach(carousel => {
  let element = document.createElement("div");
  element.innerHTML = Carousel(carousel.id, carousel.name, "").trim();

// Show navigation arrows when mouse is on list
  element.querySelector("#" + carousel.id).addEventListener("mouseover", () => {
    const arrows = document.getElementsByClassName(`${carousel.id}-arrow`);
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].removeAttribute("style");
    }
  });
// Hide navigation arrows when mouse is on list
  element.querySelector("#" + carousel.id).addEventListener("mouseout", () => {
    const arrows = document.getElementsByClassName(`${carousel.id}-arrow`);
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].setAttribute("style", "display: none;");
    }
  });
  document.getElementById("main").appendChild(element);
});


