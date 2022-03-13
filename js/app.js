/** 
 * Toggle between description and icon when service icon is clicked in what we do section 
*/
// Design service icon
$("div#design-service").click(function(){
  $("div#design-service-icon").toggle();
  $("div#design-service-description").toggle();
});

// Development service icon 
$("div#dev-service").click(function(){
  $("div#dev-service-icon").toggle();
  $("div#dev-service-description").toggle();
});

// Product management icon
$("div#product-mgmt-service").click(function(){
  $("div#product-mgmt-service-icon").toggle();
  $("div#product-mgmt-service-description").toggle();
});

/** 
 * Display white box with project name when portfolio project image is in hover state 
*/
// Project 1
$("div#project-dark-theme").hover(function(){
  $("div#project-name-1").toggle(300);
},
function(){
  $("div#project-name-1").toggle(300);
});

// Project 2
$("div#project-crime-analytics").hover(function(){
  $("div#project-name-2").toggle(300);
},
function(){
  $("div#project-name-2").toggle(300);
});

// Project 3
$("div#project-orange-theme").hover(function(){
  $("div#project-name-3").toggle(300);
},
function(){
  $("div#project-name-3").toggle(300);
});

// Project 4
$("div#project-movie-feed").hover(function(){
  $("div#project-name-4").toggle(300);
},
function(){
  $("div#project-name-4").toggle(300);
});

// Project 5
$("div#project-resort-website").hover(function(){
  $("div#project-name-5").toggle(300);
},
function(){
  $("div#project-name-5").toggle(300);
});

// Project 6
$("div#project-button-design").hover(function(){
  $("div#project-name-6").toggle(300);
},
function(){
  $("div#project-name-6").toggle(300);
});

// Project 7
$("div#project-logo-design").hover(function(){
  $("div#project-name-7").toggle(300);
},
function(){
  $("div#project-name-7").toggle(300);
});

// Project 8
$("div#project-restaurant-website").hover(function(){
  $("div#project-name-8").toggle(300);
},
function(){
  $("div#project-name-8").toggle(300);
});


// Initialize tooltip according to Bootstrap documentation
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

