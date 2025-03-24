// Multi-dimensional array containing trivia questions
var questions = [
    ["What colour is a banana?", 0, "Yellow", "Green", "Red"],
    ["What colour is an orange?", 1, "White", "Orange", "Violet"],
    ["What colour is a strawberry?", 2, "Blue", "Pink", "Red"]
];

var count = 0; // Counter to track the current question

// Function to initialize the game
function playGame() {

    // Access the first question
    var currentQuestion = questions[0];
    var questionText = currentQuestion[0];
    var correctIndex = currentQuestion[1];

    // Display the question
    document.getElementById('question').innerText = questionText;

    // Create answer list
    var answerList = '';
    for (var i = 2; i < currentQuestion.length; i++) {
        answerList += `<li onclick="checkAnswer(${i - 2}, ${correctIndex})">${currentQuestion[i]}</li>`;
    }
    document.getElementById('answers').innerHTML = answerList;

    // Remove the question from the array
    questions.shift();
}

// Function to check the user's answer
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("Correct answer!");
    } else {
        alert("Incorrect answer. Try again!");
    }

    // Check if there are more questions
    if (questions.length === 0) {
        document.getElementById('prompt').innerHTML = "<button onclick='location.reload()'>Restart Game</button>";
    } else {
        document.getElementById('prompt').innerHTML = "<button onclick='playGame()'>Next Question</button>";
    }
}

// Create the Play Game button
document.getElementById('prompt').innerHTML = "<button onclick='playGame()'>Play Game</button>";