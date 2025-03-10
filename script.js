const questions = [
    {
        question: "What does HTML stand for?",
        options: ["A) Hyper Text Markup Language", "B) High Tech Modern Language", "C) Home Tool Markup Language", "D) Hyperlink Text Management Language"],
        answer: "A"
    },
    {
        question: "Which programming language is known as the 'backbone' of web development?",
        options: ["A) Python", "B) JavaScript", "C) C++", "D) Java"],
        answer: "B"
    },
    {
        question: "What does CSS stand for?",
        options: ["A) Creative Style Sheets", "B) Computer Style Sheets", "C) Cascading Style Sheets", "D) Colorful Style Sheets"],
        answer: "C"
    }
];

let currentQuestion = 0;
let score = 0;
let startTime, endTime;  // Variables to track time

function loadQuestion() {
    if (currentQuestion === 0) {
        startTime = new Date();  // Start timer when the first question loads
    }
    
    document.getElementById("question").innerText = questions[currentQuestion].question;
    let optionsHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        optionsHTML += `<button class="option" onclick="checkAnswer('${option.charAt(0)}', this)">${option}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHTML;
    document.getElementById("nextBtn").disabled = true;
}

function checkAnswer(userAnswer, btn) {
    let correctAnswer = questions[currentQuestion].answer;
    let buttons = document.querySelectorAll(".option");

    buttons.forEach(b => b.disabled = true);  // Disable all buttons after selection

    if (userAnswer === correctAnswer) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }

    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endTime = new Date();  // Stop timer when quiz ends
        let timeTaken = ((endTime - startTime) / 1000).toFixed(2);  // Calculate time in seconds

        document.getElementById("question").innerText = "🎉 Quiz Over!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = `Your Score: ${score} / ${questions.length}`;
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("timeTaken").innerText = `⏳ Time Taken: ${timeTaken} seconds`;
    }
}

window.onload = loadQuestion;
