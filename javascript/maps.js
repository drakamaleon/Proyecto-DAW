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
  $('#myModal').on('shown.bs.modal', function () {
        initializeMap();
    });
	/*$(".btn.btn-link").click(function(e){
		edificio={}
		edificio.nombre= $(e.target).html();
		edificio.lat=-2.1481404;
		edificio.long=-79.9666825;
		initMap(edificio.lat,edificio.long);
		$("#map").css({ height: "50vh"});*/

	});
//}	

//)
;


function initializeMap() {
        var mapOptions = {
            center: new google.maps.LatLng(51.219987, 4.396237),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
          mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.219987, 4.396237)
        });
        marker.setMap(map);
    }

    //show map on modal
    