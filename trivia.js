// Function to get and display the current date and time in a user-friendly format
function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("date-time").textContent = `Current Date and Time: ${formattedDate}`;
}

// Function to create a personalized greeting based on the time of day
function createGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    // Use a switch statement to determine the appropriate greeting
    switch (true) {
        case hour < 12:
            greeting = "Good Morning";
            break;
        case hour < 18:
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
    }

    // Prompt the user for their name
    let userName = prompt("Please enter your name:");
    if (userName) {
        // Capitalize the first letter of the name
        userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
        // Display the personalized greeting
        document.getElementById("greeting").textContent = `${greeting}, ${userName}!`;
    } else {
        document.getElementById("greeting").textContent = `${greeting}!`;
    }
}

// Function to validate and process the user's email address
function validateEmail() {
    let email;
    const emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/; // Basic email validation regex

    do {
        email = prompt("Please enter your email address:");
        if (!emailRegex.test(email)) {
            alert("Invalid email address. Please try again.");
        }
    } while (!emailRegex.test(email));

    // Split the email into username and domain
    const [username, domain] = email.split('@');
    // Convert the username to uppercase
    const formattedUsername = username.toUpperCase();

    // Display the username and domain
    document.getElementById("email-info").innerHTML = `
        Username: ${formattedUsername}<br>
        Domain: ${domain}
    `;
}

// Main function to call all the required functions
function main() {
    displayDateTime();
    validateEmail();
    createGreeting();
}

// Call the main function to start the program
main();

//Quote of the Day
var quotes = [
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Money and success do not change people; they merely amplify what is already there.",
    "Many of life failures are people who did not realize how close they were to success when they gave up.",
    "Not how long, but how well you have lived is the main thing.",
    "In order to write about life first you must live it."
];
 // Generate a random number between 0 and 4
 const randomIndex = Math.floor(Math.random() * 4)+1;

 // Display the quote
 document.getElementById("quotes").innerText = quotes[randomIndex];


//QUIZ FUNCTION
function quiz() {
    // Array of questions
    var questions = ["banana", "orange", "strawberry"];
    // Array of answers
    var answers = ["yellow", "orange", "red"];
    // Initialize the score to 0
    score = 0;

    // Loop through each question
    for (i = 0; i < questions.length; i++) {
        // Initialize the number of guesses allowed for each question
        guesses = 3;
        // While the user has guesses remaining
        while (guesses > 0) {
            // Prompt the user for an answer
             userAnswer = prompt(`Question ${i + 1}: What colour is a ${questions[i]}?`);
            // Check if the user's answer matches the correct answer
            if (userAnswer && userAnswer.toLowerCase() === answers[i]) {
                // If the answer is correct, add the remaining guesses to the score
                score += guesses;
                // Set guesses to 0 to exit the while loop
                guesses = 0;
            } else {
                // If the answer is incorrect, subtract the number of guesses
                guesses--;
                // If there are remaining guesses, display an alert
                if (guesses > 0) {
                    alert(`Incorrect. You have ${guesses} attempts remaining.`);
                }
            }
        }
    }

// Return the total score
return score;
}

// Call the quiz function and store the returned score
const finalScore = quiz();
// Display the final score on the page
document.getElementById("score").textContent = `Your final score is: ${finalScore}`;
 
// Calculate the percentage score
 const percentageScore = ((finalScore / 9) * 100).toFixed(2);

 // Display the final percentage on the page
 document.getElementById("percentage").textContent = `
     Percentage: ${percentageScore}%
 `;



