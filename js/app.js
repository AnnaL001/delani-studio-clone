/**
 * Imports
 */
import { processFormInputs } from './script.js';

/** 
 * Toggle between description and icon when service icon is clicked in what we do section 
*/
// Design service icon
$("div#design-service").on("click", function(){
  $("div#design-service-icon").toggle();
  $("div#design-service-description").toggle();
});

// Development service icon 
$("div#dev-service").on("click",function(){
  $("div#dev-service-icon").toggle();
  $("div#dev-service-description").toggle();
});

// Product management icon
$("div#product-mgmt-service").on("click", function(){
  $("div#product-mgmt-service-icon").toggle();
  $("div#product-mgmt-service-description").toggle();
});

/** 
 * Display white box with project name when portfolio project image is in hover state 
*/
// Project 1
$("div#project-dark-theme").on({
  mouseenter: function(){
  $("div#project-name-1").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-1").toggle(300);
  }
});

// Project 2
$("div#project-crime-analytics").on({
  mouseenter: function(){
  $("div#project-name-2").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-2").toggle(300);
  }
});

// Project 3
$("div#project-orange-theme").on({
  mouseenter: function(){
  $("div#project-name-3").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-3").toggle(300);
  }
});

// Project 4
$("div#project-movie-feed").on({
  mouseenter: function(){
  $("div#project-name-4").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-4").toggle(300);
  }
});

// Project 5
$("div#project-resort-website").on({
  mouseenter: function(){
  $("div#project-name-5").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-5").toggle(300);
  }
});

// Project 6
$("div#project-button-design").on({
  mouseenter: function(){
  $("div#project-name-6").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-6").toggle(300);
  }
});

// Project 7
$("div#project-logo-design").on({
  mouseenter: function(){
  $("div#project-name-7").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-7").toggle(300);
  }
});

// Project 8
$("div#project-restaurant-website").on({
  mouseenter: function(){
  $("div#project-name-8").toggle(300);
  },
  mouseleave: function(){
    $("div#project-name-8").toggle(300);
  }
});


// Initialize tooltip according to Bootstrap documentation
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//Handling input from contact us form
$("form#contact-form").on("submit",function(event){
  //Prevent form submission
  event.preventDefault();

  // Capture input
  var name = $("input#name").val();
  var email = $("input#email").val();
  var message = $("textarea#message").val();
  console.log(name, email, message);

  processFormInputs(name, email, message);
})