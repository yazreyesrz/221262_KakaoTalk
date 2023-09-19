document.addEventListener("DOMContentLoaded", function () {
  var bntShare2 = document.getElementById("bntShare2");

  bntShare2.addEventListener("click", function () {
    window.location.href =
      "https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo#login";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnFace2 = document.getElementById("btnFace2");

  btnFace2.addEventListener("click", function () {
    window.location.href = "https://www.facebook.com";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnTwitter2 = document.getElementById("btnTwitter2");

  btnTwitter2.addEventListener("click", function () {
    window.location.href =
      "https://twitter.com/i/flow/login?input_flow_data=%7B%3A%7D";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var btnLink2 = document.getElementById("btnLink2");

  btnLink2.addEventListener("click", function () {
    window.location.href =
      "https://www.kakaocorp.com/page/service/service/KakaoTalk";
  });
});
