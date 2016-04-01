var isTheaterEnabled = false;

function hide() {
	(document.getElementById("mainContent")).setAttribute("style", "display: none;");
	(document.getElementById("mainHeader")).setAttribute("style", "display: none;");
	(document.getElementsByClassName("fluid-container bg-black")[1]).setAttribute("style", "display: none;");
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).setAttribute("style", "width: 0px;");
	
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).getElementsByTagName('h1')[0].setAttribute("style", "display: none;");
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).getElementsByTagName('p')[0].setAttribute("style", "display: none;");
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).getElementsByTagName('div')[0].setAttribute("style", "display: none;");

	(document.getElementsByClassName('player-container pos-relative')[0]).setAttribute("style", "width:100%");

	var myNode = document.getElementById("theater-mode");

	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}

	document.getElementById("theater-mode").appendChild(document.createTextNode("Modo Normal"));
}

function show() {
	(document.getElementById("mainContent")).setAttribute("style", "");
	(document.getElementById("mainHeader")).setAttribute("style", "");
	(document.getElementsByClassName("fluid-container bg-black")[1]).setAttribute("style", "");
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).setAttribute("style", "");

	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).getElementsByTagName('h1')[0].setAttribute("style", "");
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).getElementsByTagName('p')[0].setAttribute("style", "");
	(document.getElementsByClassName("player-info noAuth layoutTwo col-white")[0]).getElementsByTagName('div')[0].setAttribute("style", "");

	(document.getElementsByClassName('player-container pos-relative')[0]).setAttribute("style", "width:70%");

	var myNode = document.getElementById("theater-mode");

	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}

	document.getElementById("theater-mode").appendChild(document.createTextNode("Modo Teatro"));
}

//Cria botão
var btn = document.createElement("button")
var t = document.createTextNode("Modo Teatro");
btn.setAttribute("id","theater-mode");
btn.setAttribute("style","right: 0; top: 100%; position: absolute; width: 150px;");

btn.addEventListener("click", function() {
  if(isTheaterEnabled){
  	console.log("show");
  	show();

  	isTheaterEnabled = false;
  }else{
  	console.log("hide");
  	hide();

  	isTheaterEnabled = true;
  }
}, false);

btn.appendChild(t);
document.getElementsByClassName("player-container pos-relative")[0].appendChild(btn);