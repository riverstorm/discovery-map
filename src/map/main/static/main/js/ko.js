/**
* This JS file contains all custom defined Knockout.js functions.
*/

// Define location object
function Location(data) {

    // Create oversables for each data variable
    this.id = ko.observable(data.pk);
	this.name = ko.observable(data.fields.name);
	this.description = ko.observable(data.fields.description);
	this.category = ko.observable(data.fields.category);
    this.lat = ko.observable(data.fields.position_lat);
    this.lng = ko.observable(data.fields.position_lng);

}

// Define view model of locations
function LocationViewModel() {

    var self = this;

    // Create observables
    // Contains all locations, maybe filtered
    self.locations = ko.observableArray([]);
    // Contains all locations, never updated
    self.locations_search = ko.observableArray([]);
    // Contains the id of selected category
    self.valueCategory = ko.observable();
    // Handles category changes
    self.selectedCategory = ko.observable();

    // Filter locations based on selected category and update map
    self.selectedCategory = function() { ko.computed(function() {

        // Filter locations based on category ('0' is the default and shows all)
        var temp_array = ko.utils.arrayFilter(self.locations_search(), function(item) {
            if (self.valueCategory() != '0') {
                return item.category() == self.valueCategory();
            } else {
                return item;
            };
        });
        // Transform filtered locations data to JS format
        var jsonData = ko.toJS(temp_array);
        // Update the map with the new locations
        updateMap(jsonData);
        // Update the observable locations array with the new locations
        self.locations(temp_array)

    })};

    // Get all locations from the database over the local API
    $.getJSON("/locations", function() {
    })
    // API call completed
    .done(function(data) {
        // Create Location objects out of all data
        var mappedLocations = $.map(data, function(item) {
            return new Location(item);
        });
        // Update the observable locations array with the locations
        self.locations(mappedLocations);
        // Update the observable locations_search array with the locations
        self.locations_search(mappedLocations);
        // Transform filtered locations data to JS format
        var jsonData = ko.toJS(mappedLocations);
        // Update the map with the new locations
        updateMap(jsonData);
    })
    // API call failed
    .fail(function() {
        // Return error message to the user
        alert('Sorry! An error occured during your request.');
    });

}

// Define view model of location details for modal
function LocationDetailModel() {

    var self = this;

    // Set observable for the details
    self.locationDetail = ko.observable();

    // Define default content
    var LocationViewModel = {
        name: 'Loading',
        description: 'Loading',
        photo: ''
    };

    // Set default content
    self.locationDetail(LocationViewModel);

}

// Define content of a locations detail modal
function LocationDetail(id) {

    // Define default content
    var LocationViewModel = {
        name: 'Loading',
        description: 'Loading',
        photo: ''
    };

    // Set default content
    self.locationDetail(LocationViewModel);

    // Get all location details over the local API (origin Foursquare API)
    $.getJSON("/detail/" + id, function(data) {
    })
    // API call completed
    .done(function(data) {
        // Check if description is available
        if (!data.response.venue.description) {
            // If no description is available set a default
            filtered_description = 'No description available.';
        } else {
            // If description is available set as used description
            filtered_description = data.response.venue.description;
        }
        // Define the content
        var LocationViewModel = {
            name: data.response.venue.name,
            description: filtered_description,
            photo: data.response.venue.bestPhoto.prefix + 'original' + data.response.venue.bestPhoto.suffix
        };
        // Set content
        self.locationDetail(LocationViewModel);
    })
    // API call failed
    .fail(function() {
        // Return error message to the user
        alert('Sorry! An error occured during your request.');
    });

}

// Apply bindings of the knockout models
ko.applyBindings(LocationDetailModel(), LocationViewModel());
