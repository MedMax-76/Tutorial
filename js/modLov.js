setTimeout(function () {
  const modalwin = document.getElementById("modnoye_okno");
  modalwin.style.display = "block";
  document
    .getElementById("kaxalon_oyena")
    .addEventListener("click", function () {
      modalwin.style.display = "none";
    });
}, 10000);
