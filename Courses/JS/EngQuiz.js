const questions =[
    {
        question: "Which of the following letters is a vowel?",
        answers: [
            {text: "a. B", correct: false},
            {text: "b. T", correct: false},
            {text: "c. A", correct: true},
            {text: "d. L", correct: false},
        ]
    },
    {
        question: "What does the silent 'E' do to a word?",
        answers: [
            {text: "a. Adds an extra syllable", correct: false},
            {text: "b. Changes the word's meaning", correct: false},
            {text: "c. Makes the word sound louder", correct: false},
            {text: "d. Makes the preceding vowel say its name", correct: true},
        ]
    },
    {
        question: "Which of the following words is a noun?",
        answers: [
            {text: "a. Running", correct: false},
            {text: "b. Happy", correct: false},
            {text: "c. Dog", correct: true},
            {text: "d. Fast", correct: false},
        ]
    },
    {
        question: "How many consonants are there in the word 'elephant'?",
        answers: [
            {text: "a. 4", correct: false},
            {text: "b. 5", correct: true},
            {text: "c. 6", correct: false},
            {text: "d. 7", correct: false},
        ]
    },
    {
        question: "Which of the following words has a silent 'E'?",
        answers: [
            {text: "a. Cat", correct: false},
            {text: "b. Cake", correct: true},
            {text: "c. Dog", correct: false},
            {text: "d. Bed", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtos = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtos.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtos.firstChild){
        answerButtos.removeChild(answerButtos.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtos.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored "+score+" out of "+ questions.length +"!";
    nextButton.innerHTML = "Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

const questionsLevel2 =[
    {
        question: "Which of the following is an article?",
        answers: [
            {text: "a. She", correct: false},
            {text: "b. It", correct: false},
            {text: "c. The", correct: true},
            {text: "d. They", correct: false},
        ]
    },
    {
        question: "Which pronoun can be used to refer to a group of people?",
        answers: [
            {text: "a. I", correct: false},
            {text: "b. You", correct: false},
            {text: "c. We", correct: false},
            {text: "d. He", correct: true},
        ]
    },
    {
        question: "Which word is used to refer to something close to the speaker?",
        answers: [
            {text: "a. This", correct: false},
            {text: "b. That", correct: false},
            {text: "c. Those", correct: true},
            {text: "d. These", correct: false},
        ]
    },
    {
        question: "Which pronoun can be used to refer to a non-specific person or thing?",
        answers: [
            {text: "a. He", correct: false},
            {text: "b. She", correct: true},
            {text: "c. It", correct: false},
            {text: "d. They", correct: false},
        ]
    },
    {
        question: "Which word is used to refer to something farther away from the speaker?",
        answers: [
            {text: "a. This", correct: false},
            {text: "b. That", correct: true},
            {text: "c. These", correct: false},
            {text: "d. Those", correct: false},
        ]
    }
];
const questionElement2 = document.getElementById("question2");
const answerButtos2 = document.getElementById("answer-buttons2");
const nextButton2 = document.getElementById("next-btn2");

let currentQuestionIndex2 = 0;
let score2 = 0;

function startQuiz2(){
    currentQuestionIndex2 = 0;
    score2 = 0;
    nextButton2.innerHTML = "Next";
    showQuestion2();
}

function showQuestion2(){
    resetState2();
    let currentQuestion2 = questionsLevel2[currentQuestionIndex2];
    let questionNo2 = currentQuestionIndex2 + 1;
    questionElement2.innerHTML = questionNo2 + ". " + currentQuestion2.question;

    currentQuestion2.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtos2.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer2);
    });
}

function resetState2(){
    nextButton2.style.display="none";
    while(answerButtos2.firstChild){
        answerButtos2.removeChild(answerButtos2.firstChild);
    }
}

function selectAnswer2(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score2++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtos2.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton2.style.display = "block";
}

function showScore2(){
    resetState2();
    questionElement2.innerHTML = "You scored "+score2+" out of "+ questionsLevel2.length +"!";
    nextButton2.innerHTML = "Again";
    nextButton2.style.display = "block";
}

function handleNextButton2(){
    currentQuestionIndex2++;
    if(currentQuestionIndex2 < questionsLevel2.length){
        showQuestion2();
    }else{
        showScore2();
    }
}

nextButton2.addEventListener("click", () =>{
    if(currentQuestionIndex2 < questionsLevel2.length){
        handleNextButton2();
    }else{
        startQuiz2();
    }
});

startQuiz2();

const questionsLevel3 =[
    {
        question: "Which of the following is a proper noun?",
        answers: [
            {text: "a. Dog", correct: false},
            {text: "b. City", correct: false},
            {text: "c. Book", correct: true},
            {text: "d. Table", correct: false},
        ]
    },
    {
        question: "Which of the following is a linking verb?",
        answers: [
            {text: "a. Run", correct: false},
            {text: "b. Jump", correct: false},
            {text: "c. Is", correct: false},
            {text: "d. Swim", correct: true},
        ]
    },
    {
        question: "Which tense is used to talk about actions that have already happened?",
        answers: [
            {text: "a. Past", correct: false},
            {text: "b. Present", correct: false},
            {text: "c. Future", correct: true},
            {text: "d. None", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a common noun?",
        answers: [
            {text: "a. New York", correct: false},
            {text: "b. Apple", correct: true},
            {text: "c. Statue of Liberty", correct: false},
            {text: "d. Monday", correct: false},
        ]
    },
    {
        question: "Which tense is used to talk about actions that 'will' happen?",
        answers: [
            {text: "a. Past", correct: false},
            {text: "b. Present", correct: true},
            {text: "c. Future", correct: false},
            {text: "d. None", correct: false},
        ]
    }
];
const questionElement3 = document.getElementById("question3");
const answerButtos3 = document.getElementById("answer-buttons3");
const nextButton3 = document.getElementById("next-btn3");

let currentQuestionIndex3 = 0;
let score3 = 0;

function startQuiz3(){
    currentQuestionIndex3 = 0;
    score3 = 0;
    nextButton3.innerHTML = "Next";
    showQuestion3();
}

function showQuestion3(){
    resetState3();
    let currentQuestion3 = questionsLevel3[currentQuestionIndex3];
    let questionNo3 = currentQuestionIndex3 + 1;
    questionElement3.innerHTML = questionNo3 + ". " + currentQuestion3.question;

    currentQuestion3.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtos3.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer3);
    });
}

function resetState3(){
    nextButton3.style.display="none";
    while(answerButtos3.firstChild){
        answerButtos3.removeChild(answerButtos3.firstChild);
    }
}

function selectAnswer3(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score3++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtos3.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton3.style.display = "block";
}

function showScore3(){
    resetState3();
    questionElement3.innerHTML = "You scored "+score3+" out of "+ questionsLevel3.length +"!";
    nextButton3.innerHTML = "Again";
    nextButton3.style.display = "block";
}

function handleNextButton3(){
    currentQuestionIndex3++;
    if(currentQuestionIndex3 < questionsLevel3.length){
        showQuestion3();
    }else{
        showScore3();
    }
}

nextButton3.addEventListener("click", () =>{
    if(currentQuestionIndex3 < questionsLevel3.length){
        handleNextButton3();
    }else{
        startQuiz3();
    }
});

startQuiz3();