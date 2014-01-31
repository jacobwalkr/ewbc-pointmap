$(function () {
	// Google Maps
	var mapOptions = {
		center: new google.maps.LatLng(-8.485417, 126.87195),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
	
	// Load reports as markers
	markers = [];
	locations = [];
	
	$.ajax({
		type: "GET",
		url: "/locations.json",
		dataType: "json"
	}).done(function (allLocations) {
		console.log(allLocations);
		
		// thisLocation because location was taken
		for (var i = 0; i < allLocations.length; i++) {
			var thisLocation = allLocations[i];
			console.log(thisLocation);
			
			locations[parseInt(thisLocation.id)] = {
				latitude: thisLocation.latitude,
				longitude: thisLocation.longitude
			};
		}
		
		// Daisy chain!
		$.ajax({
			type: "GET",
			url: "/reports.json",
			dataType: "json"
		}).done(function (allReports) {
			for (var i = 0; i < allReports.length; i++) {
				var report = allReports[i];
				console.log(report);
				
				var reportLocation = locations[parseInt(report.location_id)];
				markers.push(new google.maps.Marker({
					position: new google.maps.LatLng(reportLocation.latitude, reportLocation.longitude),
					map: map,
					title: report.body
				}));
			}
		});
	});
});