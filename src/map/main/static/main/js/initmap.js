/**
* This JS file contains functionality to initialize the
* map from Google Maps.
*/

var map;
var markers = [];

// Initialize map
function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 50.93808546753617, lng: 6.948782921289074},
		zoom: 13,
		mapTypeId: 'terrain',
		streetViewControl: false,
	});
	
}