$(document).ready(function() {
    $('#name').focus(); // Set focus to the name field on page load

    //Validation Functions 
    
    // Function to check if a value is non-blank
    function isNonBlank(value) {
        return value.trim() !== "";
    }
    // Function to check if a value is a valid email address
    function isValidEmail(value) {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(value);
    }

    // Function to check if a value is numeric and has a specific length
    function isNumericAndLength(value, length) {
        var numericRegex = /^\d+$/;
        return numericRegex.test(value) && value.length === length;
    }

    //Event Listeners for Personal Information

    $('#name').blur(function() {
        var nameValue = $(this).val();
        var nameValid = isNonBlank(nameValue);
        $('#nameErr').text(nameValid ? "" : "Please enter your name");
        $(this).toggleClass('error', !nameValid); // Add/remove error class for styling
    });

    $('#email').blur(function() {
        var emailValue = $(this).val();
        var emailValid = isValidEmail(emailValue);
        $('#emailErr').text(emailValid ? "" : "Please enter a valid email address");
        $(this).toggleClass('error', !emailValid);
    });

    $('#email2').blur(function() {
        var emailValue = $(this).val();
        var email2Value = $('#email').val(); //get the first email
        var email2Valid = (emailValue === email2Value) && isValidEmail(emailValue); //check they match and a valid email.
        $('#email2Err').text(email2Valid ? "" : "Emails do not match");
        $(this).toggleClass('error', !email2Valid);
    });

    $('#address').blur(function() {
        var addressValue = $(this).val();
        var addressValid = isNonBlank(addressValue);
        $('#addressErr').text(addressValid ? "" : "Please enter your address");
        $(this).toggleClass('error', !addressValid);
    });

    $('#city').blur(function() {
        var cityValue = $(this).val();
        var cityValid = isNonBlank(cityValue);
        $('#cityErr').text(cityValid ? "" : "Please enter your city");
        $(this).toggleClass('error', !cityValid);
    });

    $('#zip').blur(function() {
        var zipValue = $(this).val();
        var zipValid = isNumericAndLength(zipValue, 5);
        $('#zipErr').text(zipValid ? "" : "Please enter a 5-digit zip code");
        $(this).toggleClass('error', !zipValid);
    });

    //Event Listener for Copy Address Checkbox 
    $('#copy').change(function() {
        if (this.checked) {
            var billingAddress = $('#address').val();
            var billingCity = $('#city').val();
            var billingZip = $('#zip').val();
            var billingState = $('#state').val();

            $('#shipaddr').val(billingAddress);
            $('#shipcity').val(billingCity);
            $('#shipzip').val(billingZip);
            $('#shipstate').val(billingState); // copy the state
            $('#shipping').hide(); //hide the shipping fields
        } else {
            $('#shipaddr').val("");
            $('#shipcity').val("");
            $('#shipzip').val("");
            $('#shipstate').val("");
            $('#shipping').show(); //show the shipping fields
        }
    });

    //Event Listeners for Quantity Inputs
    $('.qty').blur(function() {
        calculateOrderTotal();
    });

    //Function to Calculate Order Total
    function calculateOrderTotal() {
        var orderTotal = 0;

        $('.qty').each(function() {
            var quantity = parseInt($(this).val()) || 0; // Get quantity, default to 0 if NaN
            var itemId = $(this).attr('id'); // Get the id of the quantity input 
            var price = parseFloat($('#price' + itemId).text()); // Get the price for the item
            var total = quantity * price; // Calculate the total for the item

            $('#total' + itemId).text(total.toFixed(2)); // Display the total, formatted to 2 decimals
            orderTotal += total; // Add to the order total
        });

        $('#subt').text(orderTotal.toFixed(2)); // Display the subtotal

        var shipState = $('#shipstate').val();
        var taxRate = shipState === 'TX' ? 0.08 : 0; // 8% tax for Texas, 0% for others
        var tax = orderTotal * taxRate;
        $('#tax').text(tax.toFixed(2));

        orderTotal += tax; // Add tax to the order total

        var shippingCost = 10;  // Default shipping
        if (shipState === 'TX') {
            shippingCost = 5;
        } else if (shipState === 'CA' || shipState === 'NY') {
            shippingCost = 20;
        }
        $('#ship').text(shippingCost.toFixed(2));

        orderTotal += shippingCost; // Add shipping to the order total
        $('#gTotal').text(orderTotal.toFixed(2)); // Display the grand total
    }

    //Form Submission Validation 
    $('#order').submit(function(event) {
        var isNameValid = isNonBlank($('#name').val());
        var isEmailValid = isValidEmail($('#email').val());
        var isEmail2Valid = ($('#email').val() === $('#email2').val()) && isValidEmail($('#email').val());
        var isAddressValid = isNonBlank($('#address').val());
        var isCityValid = isNonBlank($('#city').val());
        var isZipValid = isNumericAndLength($('#zip').val(), 5);
        var isShipAddressValid = isNonBlank($('#shipaddr').val());
        var isShipCityValid = isNonBlank($('#shipcity').val());
        var isShipZipValid = isNumericAndLength($('#shipzip').val(), 5);


        if (!isNameValid || !isEmailValid || !isEmail2Valid || !isAddressValid || !isCityValid || !isZipValid || !isShipAddressValid || !isShipCityValid || !isShipZipValid) {
            event.preventDefault(); // Prevent form submission if any field is invalid
            alert("Please correct the errors in the form."); //basic alert.
        }
    });



});