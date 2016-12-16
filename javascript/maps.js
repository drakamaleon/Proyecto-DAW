function initMap(lati,long) {
	
        var uluru = {lat: parseFloat(lati), lng: parseFloat(long)};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 25,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


$(document).ready(function(){
	$(".btn.btn-link").click(function(e){
		edificio={}
		edificio.nombre= $(e.target).html();
		edificio.lat=-2.1481404;
		edificio.long=-79.9666825;
		initMap(edificio.lat,edificio.long);
		$("#map").css({ height: "50vh"});

	});
}	

);
