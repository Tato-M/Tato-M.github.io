// Efecto acordeon
var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.children[1].classList.toggle("rotar");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Efecto menu deslisable
function openNav() {
  document.getElementById("sidebar").style.width = "300px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}