const elmt=document.querySelector(".normal");
function eventclbk(e){
	console.log("cliked");
	elmt.classList.toggle("normal");
}
elmt.onclick = eventclbk;