// Parallax efect 
$(function() {
  
	$.stellar({
	  horizontalOffset: 0,
	  verticalOffset: 0
	});

});


// Features
$(function() {
  
  $(document).ready(function() {
    
    // Portfolio
    $(".portfolio-link").click(function() {
      // Get the target element and the display
      var dataTarget = $(this).attr('data-target');
      var targetElement = "#" + dataTarget;
      var display = $(targetElement).attr('style');
      
      // If the display is already block on the clicked element just close it, otherwise apply the normal behavior
      if(display == "display: block;") {
        // Remove the class active from the clicked element
        $('.portfolio-item').removeClass('active');
        $('.portfolio-description').hide(500);
      }
      else {
        // Add the class active to the clicked element and remove it from the active one
        $('.portfolio-item').removeClass('active');
        $(this).parent().addClass('active');
        
        // Hide the open element and show the clicked one
        $('.portfolio-description').hide(500);
        $(targetElement).show(500);
      }
      
    });
    
    $(".close-link").click(function() {
      
      // Remove the class active and close the element
      $('.portfolio-item').removeClass('active');
      $('.portfolio-description').hide(500);
      
    });
    
  });
  
});