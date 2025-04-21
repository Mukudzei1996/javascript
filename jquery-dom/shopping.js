$(document).ready(function() {
// Initialize the shopping cart item count
var itemCount = 0;
    
// HTML for the delete button
var deleteButtonHTML = "<span class='del'>Remove</span>";
    
// Click event for the "Add to Cart" buttons
$(".add").click(function() {
// Increment the item count
itemCount++;
    
// If the cart isn't empty, hide the empty message
if (itemCount > 0) {
$("#empty").hide();
    }
    
// Get the item name and ID from the clicked button's attributes
var itemName = $(this).attr("name");
var itemID = $(this).attr("id");
    
// Create the cart item list entry, including the delete button.
var cartIink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " " + deleteButtonHTML + "</li>";
    
// Add the item to the shopping cart
$("#cart").append(cartIink);
    
// Hide the "Add to Cart" button that was clicked.
$(this).hide();
 });
    
// Delegate the click event for the "Remove" buttons. 
$("#cart").on("click", ".del", function() {
// Remove the parent <li> element (the cart item)
$(this).parent().remove();
    
// Decrement the item count
itemCount--;
    
// If the cart is empty, show the empty message
if (itemCount === 0) {
$("#empty").show();
    }
    
// Show the "Add to Cart" button for the removed item.
var itemToRemove = $(this).parent().attr('name');
$("#" + itemToRemove).show();
 });
    
// Click event for the star ratings
 $(".rating img").click(function() {
// `this` is the clicked star image.
    
// Get all star images within the same rating span.
var stars = $(this).siblings('img');
    
// Reset all stars to "off" 
stars.attr('src', 'staroff.gif');
    
// Get all previous siblings, including the current clicked star.
var previousStars = $(this).prevAll('img').add($(this));
    
// Set the clicked star and all previous stars to "on".
previousStars.attr('src', 'staron.gif');

});
});
    