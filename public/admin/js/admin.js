const closeBtn = document.querySelector(".close_btn");
const navAside = document.querySelector(".navigation_aside");

closeBtn.addEventListener("click", () => {
  navAside.classList.toggle("closed");
  closeBtn.classList.toggle("reverse");
})

if (window.innerWidth <= 767) {
  navAside.classList.toggle("closed");
  closeBtn.classList.toggle("reverse");
}