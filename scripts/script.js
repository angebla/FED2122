var knop = document.querySelector("header svg");
var kruis = document.querySelector("nav > img");
var nav = document.querySelector("nav");
var body = document.querySelector("body");
var detail = document.querySelectorAll("footer details");
var navdetail = document.querySelectorAll("nav details");

//navigatie laten verschijnen
function slide(){
	nav.classList.add("navigatie");
}

knop.addEventListener("click", slide);

function unslide(){
	nav.classList.remove("navigatie");
}

kruis.addEventListener("click", unslide);

//scroll indicator
window.onscroll = scroll;

function scroll() {
  var winScroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.documentElement.style.setProperty('--scrollPercentage', scrolled + '%');
}

//details open
body.onload = details;
body.onresize = details;

function details() {
	if(window.matchMedia("(min-width: 80em)").matches)
		for (let i = 0; i < detail.length; i++) {
			detail[i].open = true;
	}
	else{
		for (let i = 0; i < detail.length; i++) {
			detail[i].open = false;
		}
	} 
}

//details open on hover

for (let i = 0; i < navdetail.length; i++) {
	navdetail[i].addEventListener("mouseover", open);
}

for (let i = 0; i < navdetail.length; i++) {
	navdetail[i].addEventListener("mouseout", close);
}

function open() {
	if(window.matchMedia("(min-width: 80em)").matches){
		this.open = true;
		}
}

function close() {
	if(window.matchMedia("(min-width: 80em)").matches){
		this.open = false;
		}
}



  