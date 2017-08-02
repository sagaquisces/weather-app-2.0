var SearchBike = require('./../js/searchBike.js').searchBikeModule;

var displayBikesByCity = function(city, cityData) {
  console.log("city is: " + city);
  $('.showBikesInCity').append('<li>foo</li>');
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
