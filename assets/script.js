const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// RECUPERATION DES ELEMENTS
const bannerImage = document.querySelectorAll('.banner-img')
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const bannerTagline = document.querySelectorAll('.titre') 

// TEST EVENEMENT LEFT/RIGHT DES FLECHES
arrowLeft.addEventListener('click', function(evenement){
	console.log(evenement.target.className)
})
arrowRight.addEventListener('click', function(evenement){
	console.log(evenement.target.className)
})

// Compteur
let index = 0
bannerImage[index].src = "./assets/images/slideshow/" + slides[index].image
bannerTagline[index].innerHTML = slides[index].tagLine


// Fonction pour changement image
function changeImage(sens){
	index = index + sens
	if(index>slides.length -1)
	index = 0
	if(index<0)
	index = slides.length -1

	bannerImage[0].src = "./assets/images/slideshow/" + slides[index].image
	bannerTagline[0].innerHTML = slides[index].tagLine
}


	
