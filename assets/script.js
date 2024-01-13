const slides = [
	{"image":"slide1.jpg","tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"},
	{"image":"slide2.jpg","tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"},
	{"image":"slide3.jpg","tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"},
	{"image":"slide4.png","tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"}
]

// initialisation variable compteur
let index = 0

//Récupération des données du DOM
const imageCarrousel = document.querySelector('.banner-img')
const taglineCarrousel = document.querySelector('#banner p')

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')

const dotsCarrousel = document.querySelector('.dots')

// TEST EVENEMENT LEFT/RIGHT DES FLECHES
arrowLeft.addEventListener('click', function(e){
	console.log(e.target.className)
})
arrowRight.addEventListener('click', function(e){
	console.log(e.target.className)
})

// Création fonction défilement carrousel image + texte
function carrousel() {
	imageCarrousel.src = "./assets/images/slideshow/" + slides[index].image
	taglineCarrousel.innerHTML = slides[index].tagLine
}

// Création évènement fonction fleche
arrowLeft.addEventListener('click', flecheGauche)
arrowRight.addEventListener('click', flecheDroite)

// Création fonction fleche gauche
function flecheGauche() {
	selectionDot[index].classList.remove('dot_selected')
	if (index <= 0) {
		index = slides.length - 1
	} 
	else {
		index = index - 1		
	}	
	selectionDot[index].classList.add('dot_selected')
	carrousel()
}

//Création fonction flèche droite
function flecheDroite() {
	selectionDot[index].classList.remove('dot_selected')
	if (index >= slides.length - 1) {
		index = 0
	} 
	else {
		index = index + 1		
	}	
	selectionDot[index].classList.add('dot_selected')
	carrousel()
}

// Création des points de position
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add('dot')
	dotsCarrousel.appendChild(dot);
}
let selectionDot = document.querySelectorAll('.dot')
selectionDot[index].classList.add('dot_selected')



