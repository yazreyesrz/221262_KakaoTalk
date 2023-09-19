document.addEventListener("DOMContentLoaded", function () {
  const slides6 = document.querySelectorAll(".slide6");
  let currentSlide = 0;

  function showSlide(n) {
    slides6[currentSlide].style.display = "none";
    currentSlide = (n + slides6.length) % slides6.length;
    slides6[currentSlide].style.display = "block";
  }

  showSlide(currentSlide);

  const prevseisButton = document.getElementById("prevseis");
  const nextseisButton = document.getElementById("nextseis");

  prevseisButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextseisButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});
