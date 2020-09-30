
var startQuizBtn = document.querySelector(".start-button")
var submitQuizBtn = document.querySelector(".submit");
var highScoreBtn = document.querySelector(".highScore");
var questions = document.querySelector(".questions");
var questionEl = document.querySelector(".question")
var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var answers = document.querySelector(".answers");
var answerPicked = "";
var questionCount = 0; 
var correctCount = 0;
var scoresArr=[];
var nameBox = document.getElementById("fname");

var btn_1 = document.createElement("button");
var btn_2 = document.createElement("button");
var btn_3 = document.createElement("button");
var btn_4 = document.createElement("button");

var quiz = [
    {
        question: "Which of the following will give a random number?",
        answers: {
            a: "math.random()",
            b: "Math.floor()",
            c: "math.floor()",
            d: "Math.random()",
        },
        correctAnswer: "answer 4"
    },

    {
        question: "To check a function is running use with of the following:",
        answers: {
            a: "conselor.log",
            b: "function.log",
            c: "console.log",
            d: "check.log",
        },
        correctAnswer: "answer 3"
    },

    {
        question: "How many stooges are there?",
        answers: {
            a: "One",
            b: "Three",
            c: "Dos",
            d: "Four",
        },
        correctAnswer: "answer 2"
    },

    {
        question: "The sign to define/access jQuery is?",
        answers: {
            a: "#",
            b: ".",
            c: "$",
            d: "=",
        },
        correctAnswer: "answer 3"
    },
 ]

var quizIndex = 0;
var timeLeft = 3;

function stopTime(){
    clearInterval(timeLeft);
    alert("Times Up!")
            document.querySelector("#fname").setAttribute("type", "text");

}
function count(){
    console.log(timeLeft)
    timeLeft--;

}

function timerLeft(){
    intervalId = setInterval(count, 1000);
    // var interval = setInterval(function(){
    //     timeLeft--;
    //     console.log(timeLeft);
    //     // if(timeLeft === 0 ){
    //     //   stopTime();
    //     //     // when timer reaches 0 quiz to end
            
    //     // }
    // },1000);
}

startQuizBtn.addEventListener("click", function() {
    document.querySelector("#fname").setAttribute("type", "hidden"); 

    var answer1 = document.createElement("li");
    questions.appendChild(answer1);
    btn_1.addEventListener("click", function (){
        answerPicked = "answer 1";
    })
    answer1.appendChild(btn_1)

    var answer2 = document.createElement("li");
    questions.appendChild(answer2);
    btn_2.addEventListener("click", function(){
    answerPicked = "answer 2";
    })
    answer2.appendChild(btn_2);

    var answer3 = document.createElement("li");
    questions.appendChild(answer3);
    btn_3.addEventListener("click", function(){
    answerPicked = "answer 3";
    })
    answer3.appendChild(btn_3);

    var answer4 = document.createElement("li");
    questions.appendChild(answer4);
    btn_4.addEventListener("click", function(){
    answerPicked = "answer 4";
    })
    answer4.appendChild(btn_4);

    });

    clearInterval(stopTime());
        
    // timerLeft();
    nextQuestion();



submitQuizBtn.addEventListener("click", function() {
    if(answerPicked === quiz[questionCount].correctAnswer){
        correctCount++;
    }
    else {
    timeLeft -= 5}
    answerPicked = ""
    questionCount++;
    if(questionCount < quiz.length){
        nextQuestion();
    }
    else{
        endQuiz();
    
    }
})

function endQuiz() {
    questionEl.textContent = correctCount
    questions.style.display = "none"
    stopTime();
}
function nextQuestion(){
    questionEl.textContent = quiz[questionCount].question 
    btn_1.textContent = quiz[questionCount].answers.a
    btn_2.textContent = quiz[questionCount].answers.b
    btn_3.textContent = quiz[questionCount].answers.c
    btn_4.textContent = quiz[questionCount].answers.d
}
highScoreBtn.addEventListener("click", function() {
    var nameBoxString = nameBox.value.trim()
    //get the data from ls (string =>JSON.parse) and set it to the score array
 scoresArr = JSON.parse(localStorage.getItem("scoresArr"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (!Array.isArray(scoresArr)) {
      scoresArr = [];
    }

    var usersdata={
        name:nameBox.value.trim(),
        score: correctCount
    }
    //create an obj tjat contains name and score
    // localStorage.setItem("Final Score", correctCount);
    // localStorage.setItem("Names", JSON.stringify(nameBoxString));

    //push the object into the score array
    scoresArr.push(usersdata)
    //then set the score array into local storage (array-> JSON.stringify())
    console.log(scoresArr)
localStorage.setItem("scoresArr", JSON.stringify(scoresArr));

//display scores uses the scoresArr (run forloop)

    scoresArr.sort(function(a, b){return a.score-b.score});
    console.log(scoresArr)

for(var i=0; i<scoresArr.length;i++){
    var p=document.createElement("p");
    p.textContent= "Name: "+scoresArr[i].name+ " Score: "+scoresArr[i].score;
    document.querySelector("#highscore").appendChild(p);

}



 
})

// function displayQuestion(index) {
//     mainDisplay.textContent = quiz[index].questions.toString();
// };
