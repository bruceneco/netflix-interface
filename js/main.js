window.addEventListener("scroll", () => {
  const header = document.getElementsByClassName("header")[0];
  if (window.scrollY > 0) {
    header.classList.add("solid-header");
  } else {
    header.classList.remove("solid-header");
  }
});
