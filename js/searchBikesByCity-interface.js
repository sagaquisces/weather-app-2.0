var SearchBike = require('./../js/searchBike.js').searchBikeModule;

var displayBikesByCity = function(city, cityData) {
  $('#showBikesHeader').empty();
  $('.showBikesInCity').empty();
  $('#showBikesHeader').append(city);
  cityData.forEach(function(bike) {
    $('.showBikesInCity').append('<li class="list-group-item">' + bike.title + '</li>');
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
