var Bike = require('./../js/bike.js').bikeModule;

var displayManufacturer = function(id, manufacturerData) {
  $('.showManufacturer').text("The manufacturer for bike " + id + " is " + manufacturerData + ".");
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#manufacturer-name').click(function() {
    var id = parseInt($('#bike-id').val());
    // console.log(id);
    $('#bike-id').val("");
    currentBikeObject.getManufacturer(id);
    // console.log("Stop clicking me");
  });

});

exports.displayManufacturerFunction = displayManufacturer;
///////bike-interface////////////////

var SearchBike = require('./../js/searchBike.js').searchBikeModule;

var displayStolenCount = function(city, proximity, cityProximityData) {
  $('.showStolenBikeCount').text("There are " + cityProximityData + " lost bikes within " + proximity + " of "+ city + ".");
};

$(document).ready(function() {
  var currentSearchBikeObject = new SearchBike();
  $('#prox-search').click(function() {
     event.preventDefault();
    console.log("You clicker you");
    var city = $('#city-state').val();
    var proximity = parseInt($('#proximity').val());
    $('#city-state').val("");
    $('#proximity').val("");
    currentSearchBikeObject.getStolenCount(city, proximity);
  });

});

exports.displayStolenCountFunction = displayStolenCount;
/////////////searchBike-Interface//////////////////////

var SearchBike = require('./../js/searchBike.js').searchBikeModule;

var displayBikesByCity = function(city, cityData) {
  cityData.forEach(function(bike) {
    $('.showBikesInCity').append('<li>' + bike.title + '</li>');
  });
};

$(document).ready(function() {
  var currentSearchBikeObject = new SearchBike();
  $('#bikes-by-city-search').click(function() {
    event.preventDefault();
    var city = $('#city-state').val();
    $('#city-state').val("");
    currentSearchBikeObject.getBikesByCity(city);
  });

});

exports.displayBikesByCityFunction = displayBikesByCity;
/////////////searchBikesByCity-interface//////////////////////
