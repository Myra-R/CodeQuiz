var startQuizBtn = document.getElementById("start");
var questions = document.getElementById("questions");
var scores = document.getElementById("scores");
var timer = document.getElementById("timer");
var answers = document.getElementById("answers");
var mainDisplay = document.getElementById("mainDisplay")

var quizIndex = 0;
var timeLeft = 75;

var quiz = [
   question1 = {
       questions: "here is my first question?",
       answers: "answer 1",
       answers: "answer 2",
       answers: "answer 3",
       answers: "ansdwer 4",       
   }
]

function displayQuestion(index) {
    mainDisplay.textContent = quiz[index].questions.toString();
};
