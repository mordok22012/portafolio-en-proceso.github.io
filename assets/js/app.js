const scrollUp = document.querySelector("#scroll-up");

const menuHamburguesa = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
//variables para el carousel
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

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


//funcionalidad de carrusel
function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
  }
  function setActiveClass(index) {
    carouselItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
    setActiveClass(currentIndex);
  }
  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
    setActiveClass(currentIndex);
  }
  setActiveClass(currentIndex);

  document.querySelector('#nextBtn').addEventListener('click', nextSlide);
document.querySelector('#prevBtn').addEventListener('click', prevSlide);