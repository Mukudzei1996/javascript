$(document).ready(function() {
  // Reveal/hide extra info on button click
  $("#revealBtn").click(function() {
    $("#extraInfo").slideToggle("slow");
  });

  // Fade effect on nav links when hovered
  $("nav a").hover(function() {
    $(this).fadeOut(100).fadeIn(100);
  });

  // Change <h1> color on hover
  $("h1").hover(
    function () {
      $(this).css('color', '#2c3e50');
    },
    function () {
      $(this).css('color', 'darkgreen');
    }
  );
});