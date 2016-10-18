$(function () {
	function initMap() {
		var location = new google.maps.LatLng(52.533115, 13.395903);
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: location,
			zoom: 10,
			panControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
		
		var styleArray = [
			{
				featureType: 'all',
				stylers: [
					{ saturation: -80 }
				]
		    },{
		    	featureType: 'road.arterial',
		    	elementType: 'geometry',
		    	stylers: [
		    		{ hue: '#00ffee' },
		    		{ saturation: 50 }
		    	]
		    },{
		    	featureType: 'poi.business',
		    	elementType: 'labels',
		    	stylers: [
		    		{ visibility: 'off' }
		    	]
		    }
		];
		map.set('styles', styleArray);
	
		
		var marker = new google.maps.Marker({position: location});
		marker.setMap(map);
	
		
		var contentString = '<div class="info-window">' +
        	'<h3>Concretetrans Location</h3>' +
        	'<div class="info-content">' +
        	'<p>Berlin<br>Germany</p>' +
        	'</div>' +
        	'</div>';

		var infowindow = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 400
		});
		
		marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
		
	};
	
	google.maps.event.addDomListener(window, 'load', initMap);
	
});