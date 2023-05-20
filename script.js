document.getElementById("nav").style.display = "none";
document.getElementById("nav").style.opacity = "0";
function showNav(x) {
  x.classList.toggle("showNav")
  var k = document.getElementById("nav");
  if (k.style.display === "none") {
    k.style.display = "block";
    document.getElementById("nav").style.opacity = "0";
  } else {
    k.style.display = "none";
    document.getElementById("nav").style.opacity = "100";
  }

}

