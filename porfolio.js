const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

function toggleMenu(isOpen) {
    if (isOpen) {
        menu.classList.add("visible");
    } else {
        menu.classList.remove("visible");
    }
}
open.addEventListener("click", () => {
    console.log("Botón Abrir clickeado");
    toggleMenu(true);
});

close.addEventListener("click", () => {
    console.log("Botón Cerrar clickeado");
    toggleMenu(false);
});

function redirect(ref){
    window.location.href = ref;
}

