document.getElementById("inicio").addEventListener("click", function() {
    var contenedores = document.querySelectorAll(".contenedor");
    contenedores.forEach(function(contenedor) {
      if (contenedor.style.display === "none") {
        contenedor.style.display = "block";
      } else {
        contenedor.style.display = "none";
      }
    });
  });