document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown-content");

  button.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  });
});
