document.addEventListener("DOMContentLoaded", function () {
  const slides5 = document.querySelectorAll(".slide5");
  let currentSlide = 0;

  function showSlide(n) {
    slides5[currentSlide].style.display = "none";
    currentSlide = (n + slides5.length) % slides5.length;
    slides5[currentSlide].style.display = "block";
  }
});
