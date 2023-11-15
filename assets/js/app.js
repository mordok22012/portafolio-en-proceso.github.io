const scrollUp = document.querySelector("#scroll-up");

const menuHamburguesa = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

//funcionalidad de desplazamiento hacia arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth",
        }
    );
} );

// funcionalidad de menu-hamburguesa

menuHamburguesa.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Cerrar menu hamburguesa cuando un link de nav es clickeado
    navLink.forEach(link => {
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    });