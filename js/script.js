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

    $("form").submit(function(e){
      var chaine=document.formSaisie.Email.value;
      var res=chaine.indexOf("@");
        // si la valeur du champ prenom est non vide
      if((document.formSaisie.Nom.value.length >= 4)&&(document.formSaisie.Prénom.value.length >= 4)&&(res!=-1)){
        // alors on envoie le formulaire
        document.formSaisie.submit();
      }
      else {
        // sinon on affiche un message
        alert("Remplissez correctement les champs.")
        e.preventDefault();
      }
    });
});


