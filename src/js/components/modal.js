const modal = document.querySelector(".modal");
if (modal) {
  const overlay = modal.querySelector(".overlay");
  const btnClose = modal.querySelector(".modal__content-btn");
  const closeModal = () => {
    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  };
  overlay.addEventListener("click", closeModal);
  btnClose.addEventListener("click", closeModal);
}
