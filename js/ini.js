$(document).ready(function(){
	var url=identificador();
	switch(url) {
		case 'est':{
			$("li.nove").css("display","inline-block");
			$("li#soloprof").css("display","none");
			$("#iniciar").css("display","none");
			$("#cerrar").css("display","inline-block");
			break;
		}
		case 'prof':{
			$("li.nove").css("display","inline-block");
			$("a#cya").html('Cerrar Sesión');
			$("#iniciar").css("display","none");
			$("#cerrar").css("display","inline-block");
			break;
		}
		default:
			return
	}
});

function identificador() {
	var url = document.location.href;
	var est = /\?estudiante/;
	var prof = /\?profesor/;
	if (est.test(url)){
		return "est";
	}
	if(prof.test(url)){
		return "prof";
	}
	else{
		return "pub";
	}
	return;
}

function login(){
 	var url = "data/data.json"
 	var xhttp = new XMLHttpRequest();
 	xhttp.onreadystatechange = function(){
 		if (xhttp.readyState ==4 && xhttp.status == 200){
 			var json = JSON.parse(xhttp.responseText) ;
 
 			var correo = $("#ulogin").val();
 			var password = $("#clogin").val();
 
 			if ((correo=="")||(password=="")){
 				alert("No ha llenado los campos")
 			}else{
 				var contador = 0
 				for (i = 0; i<json.length ; i++){
 					console.log("estudiante")
 					contador= contador+1;
 					var correoJson = json[i].email
 					var passwordJson = json[i].password
 					var tipoJson = json[i].type
 
 					if ( (correoJson==correo) && (passwordJson!=password)){
 						alert("contraseña incorrecta!!")
 						break;
 					}else if((correoJson==correo) && (passwordJson==password)){
 						window.location= document.location.href +"?" +tipoJson + "=" + correoJson;
 						break;
 					}
 				}
 				if (contador>= json.length) {
 					alert("usuario no existente");
 				}
 				
 			}
 		}
 
 
 	}
 
 	xhttp.open("GET", url);
 	xhttp.send();
 
 
 }


