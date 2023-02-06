const slides = document.querySelectorAll('.slider div');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let currentSlide = 0;

function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

function startSlide() {
  reset();
  slides[0].style.display = 'block';
}

function slideLeft() {
  reset();
  slides[currentSlide - 1].style.display = 'block';
  currentSlide--;
}

function slideRight() {
  reset();
  slides[currentSlide + 1].style.display = 'block';
  currentSlide++;
}

prev.addEventListener('click', function() {
  if (currentSlide === 0) {
    currentSlide = slides.length;
  }
  slideLeft();
});

next.addEventListener('click', function() {
  if (currentSlide === slides.length - 1) {
    currentSlide = -1;
  }
  slideRight();
});

startSlide();
