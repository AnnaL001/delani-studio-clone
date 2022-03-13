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


