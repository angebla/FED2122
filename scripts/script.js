var knop = document.querySelector("header svg");
var kruis = document.querySelector("nav > img");
var nav = document.querySelector("nav");

function slide(){
	nav.classList.add("navigatie");
}

knop.addEventListener("click", slide);



function unslide(){
	nav.classList.remove("navigatie");
}

kruis.addEventListener("click", unslide)