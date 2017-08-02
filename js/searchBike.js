var displayStolenCount = require('./../js/searchBike-interface.js').displayStolenCountFunction;

function SearchBike() {

}

SearchBike.prototype.getStolenCount = function(city, proximity) {
  $.get('https://bikeindex.org:443/api/v3/search/count?location=' + city + '&distance=' + proximity + '&stolenness=stolen').then(function(response) {
    displayStolenCount(city, proximity, response.stolen);
  }).fail(function(error) {
    $('.showStolenBikeCount').text(error.responseJSON.message);
  });
};

exports.searchBikeModule = SearchBike;
