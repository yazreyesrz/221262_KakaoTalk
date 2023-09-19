document.addEventListener("DOMContentLoaded", function () {
  const slides3 = document.querySelectorAll(".slide3");
  let currentSlide = 0;

  function showSlide(n) {
    slides3[currentSlide].style.display = "none";
    currentSlide = (n + slides3.length) % slides3.length;
    slides3[currentSlide].style.display = "block";
  }
});
