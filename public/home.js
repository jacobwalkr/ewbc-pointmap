function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(-8.485417, 126.87195),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
