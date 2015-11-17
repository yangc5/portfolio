// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on('page:load', function(){
  $(".owl-carousel").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });
  console.log("hey!");
});
