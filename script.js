const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
const cerrarFormularioBtn = document.getElementById("cerrarFormulario");
const overlay = document.getElementById("overlay");

mostrarFormularioBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});

cerrarFormularioBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});
