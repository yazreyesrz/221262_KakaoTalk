document.addEventListener("DOMContentLoaded", function () {
  const button2 = document.querySelector(".dropbtn2");
  const dropdown2 = document.querySelector(".dropdown-content2");

  button2.addEventListener("click", function () {
    dropdown2.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn2")) {
      if (dropdown2.classList.contains("show")) {
        dropdown2.classList.remove("show");
      }
    }
  });
});
