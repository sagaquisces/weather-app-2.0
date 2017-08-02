(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/bike.js":2}],2:[function(require,module,exports){
var displayManufacturer = require('./../js/bike-interface.js').displayManufacturerFunction;

function Bike() {

}

Bike.prototype.getManufacturer = function(id) {
  $.get('https://bikeindex.org:443/api/v3/bikes/' + id).then(function(response) {
    displayManufacturer(id, response.bike.manufacturer_name);
  }).fail(function(error) {
    $('.showManufacturer').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;

},{"./../js/bike-interface.js":1}],3:[function(require,module,exports){
var SearchBike = require('./../js/searchBike.js').searchBikeModule;

var displayStolenCount = function(city, proximity, cityProximityData) {
  $('.showStolenBikeCount').text("There are " + cityProximityData + " lost bikes within " + proximity + " of "+ city + ".");
};

$(document).ready(function() {
  // var currentSearchBikeObject = new SearchBike();
  $('#prox-search').click(function() {
     event.preventDefault();
    console.log("You clicker you");
    // var city = $('#city-state').val();
    // var proximity = parseInt($('#proximity').val());
    // $('#city-state').val("");
    // $('#proximity').val("");
    // currentSearchBikeObject.getStolenCount(city, proximity);
  });

});

exports.displayStolenCountFunction = displayStolenCount;

},{"./../js/searchBike.js":4}],4:[function(require,module,exports){
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

},{"./../js/searchBike-interface.js":3}],5:[function(require,module,exports){
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

var SearchBike = require('./../js/searchBike.js').searchBikeModule;

var displayStolenCount = function(city, proximity, cityProximityData) {
  $('.showStolenBikeCount').text("There are " + cityProximityData + " lost bikes within " + proximity + " of "+ city + ".");
};

$(document).ready(function() {
  // var currentSearchBikeObject = new SearchBike();
  $('#prox-search').click(function() {
     event.preventDefault();
    console.log("You clicker you");
    // var city = $('#city-state').val();
    // var proximity = parseInt($('#proximity').val());
    // $('#city-state').val("");
    // $('#proximity').val("");
    // currentSearchBikeObject.getStolenCount(city, proximity);
  });

});

exports.displayStolenCountFunction = displayStolenCount;

},{"./../js/bike.js":2,"./../js/searchBike.js":4}]},{},[5]);
