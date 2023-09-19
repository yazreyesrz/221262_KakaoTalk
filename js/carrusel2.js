document.addEventListener("DOMContentLoaded", function () {
  const slides2 = document.querySelectorAll(".slide2");
  let currentSlide = 0;

  function showSlide(n) {
    slides2[currentSlide].style.display = "none";
    currentSlide = (n + slides2.length) % slides2.length;
    slides2[currentSlide].style.display = "block";
  }

  showSlide(currentSlide);

  const prevdosButton = document.getElementById("prevdos");
  const nextdosButton = document.getElementById("nextdos");

  prevdosButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextdosButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});
