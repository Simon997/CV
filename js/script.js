$(document).ready(function() {

	/*$("form").submit(function(e) {
		if ((document.getElementById("lastname").value.length == 0) || (document.getElementById("lastnname").value.length == 0) || (document.getElementById("email").value.length == 0)){
			e.preventDefault();
		}

		if ((document.getElementById("lastname").value.length == 0) && (document.getElementById("lastnname").value.length != 0)){
			document.getElementById("lastname").style.border = "thick solid red"
			$("#content .champs #lastname").after("<h3>Veuillez remplir le champ nom svp</h3>")
		}
		if ((document.getElementById("lastnname").value.length == 0) && (document.getElementById("lastname").value.length != 0)){
			document.getElementById("lastnname").style.border = "thick solid red"
			$("#content .champs #lastname").after("<h3>Veuillez remplir le champ prénom svp</h3>")
		}
		if ((document.getElementById("lastnname").value.length == 0) && (document.getElementById("lastname").value.length == 0)){
			document.getElementById("lastnname").style.border = "thick solid red"
			document.getElementById("lastname").style.border = "thick solid red"
			$("#content .champs #lastname").after("<h3>Veuillez remplir le champ nom et prénom svp</h3>")
		}


		if (document.getElementById("email").value.length == 0){
			document.getElementById("email").style.border = "thick solid red"
			$("#content .champs #email").after("<h3>Veuillez remplir le champ email svp</h3>")
		}

		if ((document.getElementById("lastname").value.length != 0) && (document.getElementById("lastname").style.border = "thick solid red")){
			document.getElementById("lastname").style.border = "thick solid white"
		}

		if ((document.getElementById("lastnname").value.length != 0) && (document.getElementById("lastnname").style.border = "thick solid red")){
			document.getElementById("lastnname").style.border = "thick solid white"
		}

		if ((document.getElementById("email").value.length != 0) && (document.getElementById("email").style.border = "thick solid red")){
			document.getElementById("email").style.border = "thick solid white"
		}


		});*/
		function surligne(champ, erreur){
   		if(erreur==true){
      	champ.style.backgroundColor = "#fba";
   		}
   		else
      	champ.style.backgroundColor = "";
		}

		function verifPseudo(champ){
   		if(champ.value.length < 2 || champ.value.length > 25){
      	surligne(champ, true);
      	return false;
   		}
   		else{
      	surligne(champ, false);
      	return true;
   		}
}

});


