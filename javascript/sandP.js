$(document).on('show','.accordion', function (e) {
         //$('.accordion-heading i').toggleClass(' ');
         $(e.target).prev('.accordion-heading').addClass('accordion-opened');
    });
    
    $(document).on('hide','.accordion', function (e) {
        $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
        //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
    });

var ej =[{"titulo":"TITULO","autor":"AUTOR","dificultad":"FACIL","breve":"Resuen resumen","etiquetas":["et1","et2","et3"],"hecho":"50","descripcion":"des desde desde","entradas":"desc de entrads","salidas":"desc de salidas"},
		 {"titulo":"TITULO","autor":"AUTOR","dificultad":"MEDIO","breve":"Resuen resumen","etiquetas":["et1","et2","et3"],"hecho":"50","descripcion":"des desde desde","entradas":"desc de entrads","salidas":"desc de salidas"},
		 {"titulo":"TITULO","autor":"AUTOR","dificultad":"FACIL","breve":"Resuen resumen","etiquetas":["et1","et2","et3"],"hecho":"50","descripcion":"des desde desde","entradas":"desc de entrads","salidas":"desc de salidas"},
		 {"titulo":"TITULO","autor":"AUTOR","dificultad":"DIFICIL","breve":"Resuen resumen","etiquetas":["et1","et2","et3"],"hecho":"50","descripcion":"des desde desde","entradas":"desc de entrads","salidas":"desc de salidas"},
		 {"titulo":"TITULO","autor":"AUTOR","dificultad":"FACIL","breve":"Resuen resumen","etiquetas":["et1","et2","et3"],"hecho":"50","descripcion":"des desde desde","entradas":"desc de entrads","salidas":"desc de salidas"}
		]

$(document).ready(function() {
	if(identificador()=="est"){
		mostrarEjercicios(ej);
		resolverEjercicio(ej[0]);

	}


});

function mensajeAceptado() {
	// funcion para crear un modal de mensaje aceptado
}




function resolverEjercicio(ejercicio) {
	modal = $(".resolver")

		mod= document.createElement("div")
			$(mod).addClass('modal fade')
			$(mod).attr({
				"id": 'myModal',
				"role": 'dialog'
			});

			moDial=document.createElement("div")
				$(moDial).addClass('modal-dialog')
				cont=document.createElement("div")
					$(cont).addClass('modal-content')
					head=document.createElement("div")
						$(head).addClass('modal-header')
						but = document.createElement("button")
							$(but).addClass('close')
							$(but).attr({
								"type": 'button',
								"datadismiss": 'modal'
							});
							$(but).html("&times;")
						tit = document.createElement("h4")
							$(tit).addClass('modal-title')
							$(tit).html(ejercicio.titulo)
						$(head).append(but)
						$(head).append(tit)
					body=document.createElement("div")
						$(body).addClass('modal-body')
						res=document.createElement("div")
							$(res).attr('id', 'resolucion');
							$(res).css({
								"width": 'auto',
								"height": '85vh'
							});

							panelDesc= document.createElement("div")
								$(panelDesc).addClass('panel panel-info')
								heDesc=document.createElement("div")
									$(heDesc).addClass('panel-heading')
									titDesc=document.createElement("h3")
										$(titDesc).html("Descripcion")
										$(titDesc).addClass('panel-title')
									$(heDesc).append(titDesc)

								boDesc= document.createElement("div")
									$(boDesc).addClass("panel-body")
									$(boDesc).html(ejercicio.descripcion)	
								$(panelDesc).append(heDesc)
								$(panelDesc).append(boDesc)

							panelIN= document.createElement("div")
								$(panelIN).addClass('panel panel-info')
								heIN=document.createElement("div")
									$(heIN).addClass('panel-heading')
									titIN=document.createElement("h3")
										$(titIN).html("Entradas")
										$(titIN).addClass('panel-title')
									$(heIN).append(titIN)

								boIN= document.createElement("div")
									$(boIN).addClass("panel-body")
									$(boIN).html(ejercicio.entradas)	
								$(panelIN).append(heIN)
								$(panelIN).append(boIN)

							panelOUT= document.createElement("div")
								$(panelOUT).addClass('panel panel-info')
								heOUT=document.createElement("div")
									$(heOUT).addClass('panel-heading')
									titOUT=document.createElement("h3")
										$(titOUT).html("Salidas")
										$(titOUT).addClass('panel-title')
									$(heOUT).append(titOUT)

								boOUT= document.createElement("div")
									$(boOUT).addClass("panel-body")
									$(boOUT).html(ejercicio.salidas)	
								$(panelOUT).append(heOUT)
								$(panelOUT).append(boOUT)

							panelFILE= document.createElement("div")
								$(panelFILE).addClass('panel panel-info')
								heFILE=document.createElement("div")
									$(heFILE).addClass('panel-heading')
									titFILE=document.createElement("h3")
										$(titFILE).addClass('panel-title')
										$(titFILE).html("Subir archivo")
									$(heFILE).append(titFILE)

								boFILE= document.createElement("div")
									$(boFILE).addClass("panel-body")
									formu=document.createElement("form")
										url= document.location.href;
										$(formu).attr({'action': "#","method":"get"});
										lab=document.createElement("label")
											$(lab).addClass('custom-file')
											inp=document.createElement("input")
												$(inp).addClass('custom-file-input')
												$(inp).attr({
													"lang": 'es',
													"type": 'file',
													"id": 'file'
												});
												spa=document.createElement("span")
													$(spa).addClass('custom-file-control')
												$(inp).append(spa)
											$(lab).append(inp)
										bot = document.createElement("a")
											$(bot).addClass('btn btn-primary')
											$(bot).html("Enviar")
											$(bot).click(function(event) {
												archivovalido(event)
											});
										$(formu).append(lab)
										$(formu).append(bot)
										$(formu).append(document.createElement("div"))
									$(boFILE).append(formu)


								$(panelFILE).append(heFILE)
								$(panelFILE).append(boFILE)
							$(res).append(panelDesc)
							$(res).append(panelIN)
							$(res).append(panelOUT)
							$(res).append(panelFILE)
						$(body).append(res)
					$(cont).append(head)
					$(cont).append(body)
				$(moDial).append(cont)
			$(mod).append(moDial)
		$(modal).append(mod)
}


function archivovalido(evento) {
	boton = evento.target
	formula=$(boton).parent("form")
	input = $(formula).find("input")[0]
	mensaje=""
	if($(input).val()==""){
		mensaje = "COMPLETE Y SUBA EL ARCHIVO"

	}
	else {
		mensaje = "ENVIO EXITOSO"
	}
	$($(formula).find("div")[0]).html(mensaje)
}














































function mostrarEjercicios(ejercicios) {
	contenido = $(".content")
	$(contenido).empty()
	$(contenido).append($(document.createElement("h1")).html("Ejercicios"))
	for (var i = 0; i < ejercicios.length; i++) {
		ejercicio = ejercicios[i];
		if(i%2==0){
			row = document.createElement("div");
			$(row).addClass('row');
		}
		col=document.createElement("div");
			$(col).addClass('col-lg-6');
		
			padre= document.createElement("div");
				idPadre="t"+i.toString()+"_parent";
				$(padre).addClass('panel-group');
				$(padre).attr('id', idPadre);
					panelPrin=document.createElement("div");
						$(panelPrin).addClass('panel panel-info');
							panelHeading=document.createElement("div");
								idTarget="#tab_t"+i.toString();
								$(panelHeading).addClass('panel-heading')
								$(panelHeading).attr({
									"data-toggle": 'collapse',
									"data-target": idTarget
								});
								$(panelHeading).css('cursor', 'pointer');
									panelTitulo=document.createElement("h4");
										$(panelTitulo).addClass('panel-title');
											lista=document.createElement("ul")
												titulo=document.createElement("li")
													tit=document.createElement("h4")
														$(tit).html(ejercicio.titulo)
													$(titulo).append(tit)
												autor=document.createElement("li")
													au=document.createElement("span")
														$(au).html(ejercicio.autor)
													$(autor).append(au)
												dificultad=document.createElement("li")
													cont=document.createElement("span")
														dif=document.createElement("a")
															if(ejercicio.dificultad=="FACIL"){
																tipodif='btn btn-lg btn-success'
															}
															if(ejercicio.dificultad=="MEDIO"){
																tipodif='btn btn-lg btn-primary'
															}
															if(ejercicio.dificultad=="DIFICIL"){
																tipodif='btn btn-lg btn-danger'
															}
															$(dif).addClass(tipodif)


															$(dif).html(ejercicio.dificultad)
														$(cont).append(dif)
													$(dificultad).append(cont)

												ir=document.createElement("li")
													derecha=document.createElement("span")
														$(derecha).addClass('pull-right clickable')
														bt=document.createElement("a")
															$(bt).addClass('btn btn-sm btn-primary')
															$(bt).attr({
																"data-toggle": 'modal',
																"data-target": '#myModal'
															});
															$(bt).html("ABRIR")
															icono=document.createElement("span")
																$(icono).addClass('glyphicon glyphicon-arrow-right')
															$(bt).append(icono)
														$(derecha).append(bt)
													$(ir).append(derecha)
												$(lista).append(titulo)
												$(lista).append(autor)
												$(lista).append(dificultad)
												$(lista).append(ir)
											$(panelTitulo).append(lista)
								$(panelHeading).append(panelTitulo)

							panelCuerpo=document.createElement("div")
								idCuerpo="tab_t"+i.toString()
								$(panelCuerpo).attr('id', idCuerpo);
								$(panelCuerpo).addClass('panel-collapse collapse')
								$(panelCuerpo).html(ejercicio.breve)

							panelPie=document.createElement("div")
								$(panelPie).addClass('panel-footer')
								etiquetas=ejercicio.etiquetas
								et=document.createElement("ul")
								for (var j = 0; j < etiquetas.length; j++) {
									eti=document.createElement("li")
										as=document.createElement("a")
											$(as).addClass('btn btn-sm btn-default')
												sp=document.createElement("span")
													$(sp).addClass('glyphicon glyphicon-tag')
													$(sp).html(etiquetas[j])
												$(as).append(sp)
										$(eti).append(as)
									$(et).append(eti)
								}
								$(panelPie).append(et)

								progress=document.createElement("div")
									$(progress).addClass('progress')
									barra=document.createElement("div")
										$(barra).addClass("progress-bar progress-bar-info")
										mensaje=ejercicio.hecho+"% Exitos"
										$(barra).html(mensaje)
										$(barra).attr({
											role: 'progressbar',
											"aria-valuenow": ejercicio.hecho,
											"aria-valuemin": '0',
											"aria-valuemax": '100',
										});
										ancho=ejercicio.hecho+"%"
										$(barra).css('width', ancho);
									$(progress).append(barra)
								$(panelPie).append(progress)
							$(panelPrin).append(panelHeading)
							$(panelPrin).append(panelCuerpo)
							$(panelPrin).append(panelPie)
					$(padre).append(panelPrin)
			$(col).append(padre)
		$(row).append(col)
		if(i%2==1 || i== (ejercicios.length-1)){
			$(contenido).append(row)
		}
	}	
}