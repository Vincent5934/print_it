const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// initialisation variable compteur
let index = 0;

//Récupération des données du DOM
const slideImage = document.querySelector(".banner-img");
const slideTagline = document.querySelector("#banner p");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const slideDots = document.querySelector(".dots");

//fonction changement image et Titre coresspondant
function UpdateSlideImageAndTagline() {
  slideImage.src = "./assets/images/slideshow/" + slides[index].image;
  slideTagline.innerHTML = slides[index].tagLine;
}

//fonction de mise à jour des dots de positionnement en fonction de l'image sélectionnée
function UpdateDot() {
  selectionDot[index].classList.add("dot_selected");
}

//Comprtement flèche droite au click
arrowRight.addEventListener("click",function (changeSlideAndDotSelectionToRight) {
    console.log(changeSlideAndDotSelectionToRight.target.className);
    selectionDot[index].classList.remove("dot_selected");
    if (index >= slides.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    UpdateSlideImageAndTagline();
    UpdateDot();
  }
);

//Comportement flèche Gauche au click
arrowLeft.addEventListener("click", function (changeSlideAndDotSelectionToLeft) {
  console.log(changeSlideAndDotSelectionToLeft.target.className);
  selectionDot[index].classList.remove("dot_selected");
  if (index <= 0) {
    index = slides.length - 1;
  } else {
    index = index - 1;
  }
  UpdateSlideImageAndTagline();
  UpdateDot();
});

// Création des dots dans le HTML
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  slideDots.appendChild(dot);
}
let selectionDot = document.querySelectorAll(".dot");
UpdateDot();
