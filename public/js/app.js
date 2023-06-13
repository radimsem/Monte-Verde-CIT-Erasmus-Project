const toggleBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-navigation");

toggleBtn.addEventListener("click", () => {
  toggleBtn.querySelectorAll("span").forEach(span => {
    span.classList.toggle("open");
  })
  toggleBtn.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
})