setTimeout(function () {
  const modalwin = document.getElementById("modnoye_okno");
  modalwin.style.display = "block";
  document
    .getElementById("kaxalon_oyena")
    .addEventListener("click", function () {
      modalwin.style.display = "none";
    });
}, 20000);

setTimeout(function () {
  const modalwin = document.getElementById("modnoye_okno1");
  modalwin.style.display = "block";
  document
    .getElementById("kaxalon_oyena1")
    .addEventListener("click", function () {
      modalwin.style.display = "none";
    });
}, 50000);

setTimeout(function () {
  const modalwin = document.getElementById("modnoye_okno2");
  modalwin.style.display = "block";
  document
    .getElementById("kaxalon_oyena2")
    .addEventListener("click", function () {
      modalwin.style.display = "none";
    });
}, 70000);
