/*const btnShare = document.getElementById("bntShare");
const btnFace = document.getElementById("btnFace");
const btnTwitter = document.getElementById("btnTwitter");
const btnLink = document.getElementById("btnLink");

btnShare.addEventListener("click", function () {
  window.location.href =
    "https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo#login";
});

// Agrega un evento de clic al botón
btnFace.addEventListener("click", function () {
  // Redirige al usuario a la URL deseada cuando se hace clic en el botón
  window.location.href = "https://www.facebook.com";
});

btnTwitter.addEventListener("click", function () {
  window.location.href =
    "https://twitter.com/i/flow/login?input_flow_data=%7B%3A%7D";
});

btnLink.addEventListener("click", function () {
  console.log("¡Se ha copiado el link correctamente!");
});*/

document.addEventListener("DOMContentLoaded", function () {
  var bntShare1 = document.getElementById("bntShare");

  bntShare1.addEventListener("click", function () {
    window.location.href =
      "https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo#login";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnFace2 = document.getElementById("btnFace");

  btnFace2.addEventListener("click", function () {
    window.location.href = "https://www.facebook.com";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnTwitter2 = document.getElementById("btnTwitter");

  btnTwitter2.addEventListener("click", function () {
    window.location.href =
      "https://twitter.com/i/flow/login?input_flow_data=%7B%3A%7D";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnLink2 = document.getElementById("btnLink");

  btnLink2.addEventListener("click", function () {
    window.location.href =
      "https://www.kakaocorp.com/page/service/service/KakaoTalk";
  });
});
