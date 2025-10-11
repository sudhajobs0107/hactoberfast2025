const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: 0
  },
  {
    question: "Who is known as the Father of the Nation (India)?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Chandra Bose"],
    correct: 1
  },
  {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      answer: "Blue Whale"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: 1
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Tiger", "Peacock"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsElement.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correct;
  const allOptions = document.querySelectorAll(".option");

  allOptions.forEach((option, index) => {
    option.style.pointerEvents = "none";
    if (index === correctIndex) {
      option.style.backgroundColor = "green";
    } else if (index === selectedIndex) {
      option.style.backgroundColor = "red";
    }
  });

  if (selectedIndex === correctIndex) score += 10000;

  nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    nextBtn.classList.add("hide");
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("question-container").classList.add("hide");
  nextBtn.classList.add("hide");
  resultElement.classList.remove("hide");
  resultElement.innerHTML = `<h2>🏆 You won ₹${score.toLocaleString()}!</h2>`;
}

loadQuestion();
