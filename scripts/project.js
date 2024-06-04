function changeImage(imageSrc, element) {
  let mainImage = document.getElementById("mainImage");
  mainImage.classList.add("fade-out");

  setTimeout(() => {
    mainImage.src = imageSrc;
    mainImage.classList.remove("fade-out");
  }, 500); // Match this duration with the CSS transition duration

  let items = document.getElementsByClassName("content-item");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
  element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.content-item').classList.add('active');
    changeImage('/assets/pro_1.png', document.querySelector('.content-item'));
  });