import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = form.querySelector('input[type="email"]');
  const firstNameInput = form.querySelector('input[placeholder="First name*"]');
  const lastNameInput = form.querySelector('input[placeholder="Last name*"]');
  const termsCheckbox = form.querySelector('input[type="checkbox"]');
  const contactButton = form.querySelector(".contact_modal_btn");

  contactButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const formData = {
      email: emailInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      terms: termsCheckbox.checked,
    };

    try {
      contactButton.textContent = "sending";
      const response = await axios.post(
        "https://getform.io/f/ebpdkpxb",
        formData
      );
      if (response.status === 200) {
        emailInput.value = "";
        firstNameInput.value = "";
        lastNameInput.value = "";
        termsCheckbox.checked = false;
        contactButton.textContent = "form sent";
        setTimeout(() => {
          contactButton.textContent = "contact us";
        }, 1500);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      contactButton.textContent = "failed! try again";
      setTimeout(() => {
        contactButton.textContent = "contact us";
      }, 1500);
    }
  });
});
