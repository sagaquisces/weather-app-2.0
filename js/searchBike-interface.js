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
