document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  showSlide(currentSlide);

  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});
