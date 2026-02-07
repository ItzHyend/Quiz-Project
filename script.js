const questions = [
    {
        question: "Which programming language is best ?",

        answers: [
            { text: "python", correct: false },
            { text: "C++", correct: false },
            { text: "Java", correct: false },
            { text: "All the programming languages", correct: true },
        ]

    },
    {
        question: "Which is the world largest it company 2025?",

        answers: [
            { text: "Nvidia", correct: true },
            { text: "Amazon", correct: false },
            { text: "Apple", correct: false },
            { text: "Tesla", correct: false },
        ]
    },
    {
        question: "Whats The Full Form Of FANG Companies?",

        answers: [
            { text: "FedEx, Apotex Inc, NHPC LTD and GAIL (INDIA) LTD", correct: false },
            { text: "Facebook, Amazon, Netflix and Google", correct: true },
            { text: "Figma, Axis Bank, NEPHRO CARE and GALAGEX ", correct: false },
            { text: "Forbes, Akraya, NETWORK18 and GAJANAND", correct: false },
        ]
    },
    {
        question: "Who get the clients in a it company?",

        answers: [
            { text: "Sales Teams", correct: true },
            { text: "Business Development Managers", correct: true },
            { text: "Employee", correct: false },
            { text: "Team Leader", correct: false },
        ]
    },
    {
        question: "In a company who designs the website for the clients?",

        answers: [
            { text: "Web Designers", correct: true },
            { text: "Team Manager", correct: false },
            { text: "Developer", correct: false },
            { text: "Tester", correct: false },
        ]
    },
    {
        question: "What's the first programming language in the world?",

        answers: [
            { text: "Java", correct: false },
            { text: "Assembly", correct: false },
            { text: "C Language", correct: false },
            { text: "Plankalkül", correct: true },
        ]
    },

]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true"
    if (isCorrect) {
        selectBtn.classList.add("correct")
        score++;
    } else {
        selectBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = "true"
    })
    nextButton.style.display = "block"
}

function showScore() {
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})


startQuiz();

