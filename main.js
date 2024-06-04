import "./scripts/email";
import "./scripts/modal";
import { initImageChanger } from "./scripts/project";
import { showSlides } from "./scripts/slider";



document.addEventListener("DOMContentLoaded", function() {
  initImageChanger();
  showSlides();
});