
function iniciador( nombre){
	var url = "data/data.json"
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState ==4 && xhttp.status == 200){
			var json = JSON.parse(xhttp.responseText);
			for (i = 0; i< json.length ; i++){
				console.log(nombre)
				if (nombre == json[i].name){

					var nombreJson = json[i].name
					var correoJson = json[i].email
					var birthdayJson = json[i].birthday
					var ejercicios = json[i].ejercicios
					var nivel = json[i].nivel
					var imagen = json[i].imagen

					$(".perfil").append(
						'<div class="panel-heading">' + 
							'<h3 class="panel-title">'+ nombreJson+ '</h3>'+
						'</div>'+
						'<div class="panel-body">'+
							'<div class="row">'+
								'<div class="col-xs-12 col-sm-12 col-md-3 imagenPerfil" align="center">' +
									'<img src="' + imagen+ '" class="img-responsive img-circle">'+
								'</div>'+
								'<div class=" col-md-9 col-lg-9 ">'+
									'<table class="table table-user-information">'+
										'<tbody>'+
											'<tr>'+
												'<td class="title">Correo Electrónico:</td>'+
												'<td><a href="mailto:' + correoJson + '">' + correoJson +'</a></td>'+
											'</tr>'+
											'<tr>'+
												'<td class="title">Fecha de Nacimiento</td>'+
												'<td>' + birthdayJson + '</td>'+
											'</tr>'+
											'<tr>'+
												'<td class="title">Ejercicios propuestos</td>'+
												'<td>' + ejercicios+ '</td>'+
											'</tr>'+
											'<tr>'+
												'<td class="title">Nivel</td>'+
												'<td>' + nivel + '</td>'+
											'</tr>'+
										'</tbody>'+
									'</table>'+
								'</div>'+
							'</div>'+
						'</div>'
					)
				}

			}
		}

	}

	xhttp.open("GET", url);
	xhttp.send();


}
$(document).ready(function(){
	iniciador("Marco Antonio Calderón Argüello");
})
