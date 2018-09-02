/**
* This JS file contains functions to update the rendered
* map from Google Maps
*/

// Remove all set markers on the map
function removeMarkers(){

	// Loop through markers and remove each
	for(i=0; i<markers.length; i++){
		markers[i].setMap(null);
	}

}

// Update the markers on the map
function updateMap(json) {

	// Remove current existing markers
	removeMarkers();

	// Define layout of markers
	var bluecircle = {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor: '#00113d',
		fillOpacity: 1,
		strokeWeight: 0,
		scale: 15,
		strokeColor: '#ffffff',
		strokeWeight: 4
	};

	// Loop through all chosen locations
	for (var i = 0; i < json.length; i++) {
		// Get all data from current location
		var data = json[i];
		// Set position of the marker
		var latLng = new google.maps.LatLng(data.lat,data.lng);
		// Create new marker
		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			title: data.name,
			icon: bluecircle,
			url: data.id
		});
		// Add click listener for animation and to open a modal
		marker.addListener('click', function() {
			// Start and stop animation
			this.setAnimation(google.maps.Animation.BOUNCE);
			this.setAnimation(null);
			// Set content for modal
			LocationDetail(this.url);
			// Open modal
			$('#ContentModal').modal();
		});
		// Add new marker to the list of markers
		markers.push(marker);
	}

};

// Trigger the listener of a marker on button click
$(document).on('click', '.btn-detail', function() {

	// Get id of clicked item
	var id = $(this).data('id')
	// Get index of item in the 'markers' list
	id = markers.findIndex(x => x.url === id);
	// Trigger a click to the selected marker
	google.maps.event.trigger(markers[id], 'click');
	
});
