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
  console.log("city in displayStolenCount is: " + city);
  $('.showStolenBikeCount').text("There are " + cityProximityData + " lost bikes within " + proximity + "miles of "+ city + ".");
};

$(document).ready(function() {
  var currentSearchBikeObject = new SearchBike();
  $('form#bikes-stolen').submit(function() {
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
  console.log("city in displayBikesByCity is: " + city);
  $('.showBikesInCity').append('<li>' + city + '</li>');
  cityData.forEach(function(bike) {
    $('.showBikesInCity').append('<li>' + bike.title + '</li>');
  });
};

$(document).ready(function() {
  var currentSearchBikeObject = new SearchBike();
  $('form#bikes-by-city').submit(function() {
    event.preventDefault();
    var city = $('#city').val();

    $('#city').val("");
    currentSearchBikeObject.getBikesByCity(city);
  });

});

exports.displayBikesByCityFunction = displayBikesByCity;
/////////////searchBikesByCity-interface//////////////////////
