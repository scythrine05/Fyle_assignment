const contact_btn = document.getElementById("contact_btn");
const contact_modal = document.querySelector(".contact_modal");
const backdrop = document.getElementById("backdrop");

const openModal = () => {
  contact_modal.classList.add("active");
  backdrop.classList.add("active");
};

const closeModal = () => {
  contact_modal.classList.remove("active");
  backdrop.classList.remove("active");
};

contact_btn.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);

