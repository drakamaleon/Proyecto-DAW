$(document).ready(function(){
	var url=identificador();
	switch(url) {
		case 'est':{
			$("li.nove").css("display","inline-block");
			$("li#soloprof").css("display","none");
			break;
		}
		case 'prof':{
			$("li.nove").css("display","inline-block");
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