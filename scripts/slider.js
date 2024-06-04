let slideIndex = 0;
let slides = document.querySelector('.slides');
let dots = document.getElementsByClassName('dot');
let totalSlides = 4;
let interval;

function showSlides() {
  slideIndex++;
  if (slideIndex >= totalSlides + 1) { 
    slideIndex = 1;
    slides.style.transition = 'none';
    slides.style.transform = 'translateX(0)';
    setTimeout(() => {
      slides.style.transition = 'transform 0.5s ease-in-out';
      slides.style.transform = 'translateX(' + (-(slideIndex) * 100 / totalSlides) + '%)';
    }, 60);
  } else {
    slides.style.transform = 'translateX(' + (-(slideIndex) * 100 / totalSlides) + '%)';
  }
  updateDots();
  interval = setTimeout(showSlides, 1500);
}

function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[(slideIndex - 1) % totalSlides].className += " active";
}

function pauseSlides() {
  clearTimeout(interval);
}

function resumeSlides() {
  interval = setTimeout(showSlides, 1500);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});
