var displayStolenCount = require('./../js/searchBike-interface.js').displayStolenCountFunction;
var displayBikesByCity = require('./../js/searchBikesByCity-interface.js').displayBikesByCityFunction;


function SearchBike() {

}

SearchBike.prototype.getStolenCount = function(city, proximity) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location=' + city + '&distance=' + proximity + '&stolenness=stolen').then(function(response) {
    displayStolenCount(city, proximity, response.proximity);
  }).fail(function(error) {
    $('.showStolenBikeCount').text(error.responseJSON.message);
  });
};

SearchBike.prototype.getBikesByCity = function(city) {
  $.get('https://bikeindex.org:443/api/v3/search?location=' + city).then(function(response) {
    console.log("What is city value here: ");
    displayBikesByCity(city, response.bikes);
  }).fail(function(error) {
    $('.showBikesByCity').text(error.responseJSON.message);
  });
};

exports.searchBikeModule = SearchBike;
///////////////searchBike/////////////////
