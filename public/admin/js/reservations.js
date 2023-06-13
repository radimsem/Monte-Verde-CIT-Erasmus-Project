const deleteBtns = document.querySelectorAll(".delete");
const deletePopup = document.querySelector(".delete_popup");
const deleteOverlay = document.querySelector(".delete_overlay");
const deleteBtnYes = document.getElementById("yes");
const deleteBtnNo = document.getElementById("no");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    deletePopup.classList.toggle("active");
    deleteOverlay.classList.toggle("active");

    const clientName = btn.closest("tr").querySelector(".client_name").textContent;
    deletePopup.querySelector("h2 span").textContent = clientName;

    deleteBtnNo.addEventListener("click", () => {
      deletePopup.classList.remove("active");
      deleteOverlay.classList.remove("active");
    })

    deleteBtnYes.addEventListener("click", () => {
      btn.closest("tr").remove();

      deletePopup.classList.remove("active");
      deleteOverlay.classList.remove("active");
    })
  })
})