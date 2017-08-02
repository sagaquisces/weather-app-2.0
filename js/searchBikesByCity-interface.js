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
