const artsLink = document.querySelector(".articles_link a");
const dropdown = document.querySelector(".dropdown");
const closeBtn = document.querySelector(".close_btn");
const navAside = document.querySelector(".navigation_aside");

artsLink.addEventListener("click", () => {
  dropdown.classList.toggle("active");
})

closeBtn.addEventListener("click", () => {
  navAside.classList.toggle("closed");
  closeBtn.classList.toggle("reverse");
})

if (window.innerWidth <= 767) {
  navAside.classList.toggle("closed");
  closeBtn.classList.toggle("reverse");
}