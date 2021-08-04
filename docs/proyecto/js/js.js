var imagenes = document.querySelectorAll("img");

console.log(imagenes);

// for (var i = 0; i < imagenes.length; i++) {
// 	imagenes[i].src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-xa-1NJxFNFo%2FUl5eBoB2imI%2FAAAAAAAABIA%2FKbxpWz5Nhew%2Fs1600%2Fteclado.jpg&f=1&nofb=1";
// }

// Script to open and close sidebar
function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}