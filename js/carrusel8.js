document.addEventListener("DOMContentLoaded", function () {
  const slides8 = document.querySelectorAll(".slide8");
  let currentSlide = 0;

  function showSlide(n) {
    slides8[currentSlide].style.display = "none";
    currentSlide = (n + slides8.length) % slides8.length;
    slides8[currentSlide].style.display = "block";
  }
});
