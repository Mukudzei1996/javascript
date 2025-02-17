var quotes = ["The best way to predict the future is to invent it.", 
        "Life is 10% what happens to us and 90% how we react to it.",
        "Do what you can, with what you have, where you are.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
         "Happiness depends upon ourselves."];

var number = prompt("Please enter your number: ");

var index = number % 5;

var remainder = quotes[index];

document.write(remainder);