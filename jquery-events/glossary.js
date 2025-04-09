$(document).ready(function () {
// Hide botanic names on load
    $('.botanic').hide();
  
// Hide image divs on load
    $('.imgdiv').hide();
  
// Mouseover and Mouseout Events for h1 and h2 headings
    $('h1, h2').hover(
      function () {
        $(this).css('color', 'red');
      },
      function () {
        $(this).css('color', 'darkgreen');
      }
    );
  
// Click Events to show botanic name
    $('.flower').click(function () {
      $('.botanic').hide();
      $(this).children('.botanic').show();
    });
  
// Hover events to display an image of the .pic class
$('.pic').hover(
    function(evt) {
      // Get the title attribute and create the id for the imgdiv
      var imgDivId = '#' + $(this).attr('title');
      
      // Get the X and Y coordinates of the mouse
      var xPos = evt.pageX + 150; // Adding 150 to x to avoid overlap
      var yPos = evt.pageY;
      
      // Position the image div and show it
      $(imgDivId).css({top: yPos, left: xPos}).show();
    },
    function() {
      // Hide the image div when the mouse leaves
      var imgDivId = '#' + $(this).attr('title');
      $(imgDivId).hide();
    }
  );

// Keypress event 
  $(document).keypress(function(event) {
    // Get the key pressed and convert to lowercase
    var keyPressed = String.fromCharCode(event.which).toLowerCase();
    
    // Check if the key pressed is a valid letter (a-z)
    if (keyPressed >= 'a' && keyPressed <= 'z') {
      // Jump to the corresponding flower starting with that letter
      window.location = "#" + keyPressed;
    }
  });

});
   
 

  