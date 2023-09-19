document.addEventListener("DOMContentLoaded", function () {
  const slides4 = document.querySelectorAll(".slide4");
  let currentSlide = 0;

  function showSlide(n) {
    slides4[currentSlide].style.display = "none";
    currentSlide = (n + slides4.length) % slides4.length;
    slides4[currentSlide].style.display = "block";
  }

  showSlide(currentSlide);

  const prevcuatroButton = document.getElementById("prevcuatro");
  const nextcuatroButton = document.getElementById("nextcuatro");

  prevcuatroButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextcuatroButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
});
