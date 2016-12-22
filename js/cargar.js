function inicio(){
	var location = document.location.href;
	var data = location.split("?")
	var param = data[1]
	if (data.length > 2){
		param = data[2]
	}
	window.location = "index.html?" + param;
}