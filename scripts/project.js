export function initImageChanger() {
  const firstContentItem = document.querySelector(".content-item");
  if (firstContentItem) {
    firstContentItem.classList.add("active");
    changeImage("/assets/pro_1.png", firstContentItem);
  }

  const contentItems = document.querySelectorAll(".content-item");
  contentItems.forEach((item) => {
    item.addEventListener("click", function () {
      const imageSrc = item.dataset.image;
      changeImage(imageSrc, item);
    });
  });
}

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
