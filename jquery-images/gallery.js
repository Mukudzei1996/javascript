$(document).ready(function() {
  // Hover effect for thumbnails
  $('#thumbs img').hover(
    function() {
      $(this).css({
        'border': '2px solid darkgreen',
        'box-shadow': '3px 3px 5px #888888'
      });
    },
    function() {
      $(this).css({
        'border': 'none',
        'box-shadow': 'none'
      });
    }
  );

  // Click event for thumbnails to update the large image
  $('#thumbs img').click(function() {
    var newSrc = $(this).attr('src');
    var newAlt = $(this).attr('alt');
    $('#lgPic').attr('src', newSrc);
    $('#lgPic').attr('alt', newAlt);
    $('#lgTitle').text(newAlt);
  });

  // Click event for the large image to open in a new window
  $('#lgPic').click(function() {
    var largeImageSrc = $(this).attr('src');
    window.open(largeImageSrc, '_blank');
  });
});