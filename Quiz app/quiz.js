const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the capital city of Cambodia?",
        answers: [
            { text: "Siem Reap", correct: false },
            { text: "Battambang", correct: false },
            { text: "Phnom Penh", correct: true },
            { text: "Sihanoukville", correct: false }
        ]
    },
    {
        question: "Which language is used for web pages?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "HTML", correct: true },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false },
            { text: "Bear", correct: false }
        ]
    }
]

const questionElement = document.getElementById("question");
const answersBtn = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0 ;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answersBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",  selectAnswer);
        
    });

}

function resetState(){
    nextBtn.style.display ="none";
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const inCorrect = selectBtn.dataset.correct === "true";
    if(inCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answersBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display ="block";
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again" ;
    nextBtn.style.display="block";
}


nextBtn.addEventListener("click", () =>{
    if(currentQuestionIndex <questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});


startQuiz();