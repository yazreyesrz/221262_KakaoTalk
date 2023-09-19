document.addEventListener("DOMContentLoaded", function () {
  const slides7 = document.querySelectorAll(".slide7");
  let currentSlide = 0;

  function showSlide(n) {
    slides7[currentSlide].style.display = "none";
    currentSlide = (n + slides7.length) % slides7.length;
    slides7[currentSlide].style.display = "block";
  }

  showSlide(currentSlide);

  const prevsieteButton = document.getElementById("prevsiete");
  const nextsieteButton = document.getElementById("nextsiete");

  prevsieteButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextsieteButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});
