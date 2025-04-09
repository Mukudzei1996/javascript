$(document).ready(function() {
//Sign Up Link
    // Hide the newsSignup form when the page loads
    $("#newsSignup").hide();
  
    // Add a click event to the signup link anchor tag
    $("#signuplink").click(function(event) {
      // Use the slideToggle function to show or hide the newsSignup form
      $("#newsSignup").slideToggle("slow", function() {
        // If the openclose span contains a +, change the + to a -
        if ($("#openclose").text() === "+") {
          $("#openclose").text("-");
        } else {
          $("#openclose").text("+");
        }
      });
  
      // Cancel the link default action
      event.preventDefault();
    });

// Slogan hover actions
  $("#slogan").on({
    mouseover: function() {
      $(this).fadeOut("normal", "linear", function() {
        $(this).text("Hand Picked Just for You").fadeIn("slow", "swing");
      });
    },
    mouseout: function() {
      $(this).fadeOut("fast", "swing", function() {
        $(this).text("The Power of Flowers").fadeIn("slow", "linear");
      });
    }
  });

// Animated Rose
  $("#rose").animate({
    right: "100px",
    opacity: 1
  }, "slow", "swing");

// Form Submission Event
   $("form[name='newsSignup']").submit(function(event) {
    // Display an alert message
    alert("Thank you for registering");

    // Hide the newsSignup form
    $("#newsSignup").slideUp("slow");

    // Fade the signuplink anchor tag to 30% opacity
    $("#signuplink").fadeTo("slow", 0.3);

    // Stop the default action to submit the form
    event.preventDefault();
  });

  });