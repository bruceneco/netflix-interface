window.addEventListener("scroll", () => {
  const header = document.getElementsByClassName("header")[0];
  if (window.scrollY > 0) {
    header.classList.add("solid-header");
  } else {
    header.classList.remove("solid-header");
  }
});

// Show navigation arrows when mouse is on list
document.getElementById("keep-watching").onmouseover = () => {
  const arrows = document.getElementsByClassName("arrow");
  for (let i = 0; i <= arrows.length; i++) {
    arrows[i].removeAttribute("style");
  }
}
// Hide navigation arrows when mouse is on list
document.getElementById("keep-watching").onmouseout = () => {
  const arrows = document.getElementsByClassName("arrow");
  for (let i = 0; i <= arrows.length; i++) {
    arrows[i].setAttribute("style", "display: none;");
  }
}
