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
    correct: 1
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
const resultElement = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsElement.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(index, button));
    optionsElement.appendChild(button);
  });
}

function selectAnswer(selectedIndex, selectedButton) {
  const correctIndex = questions[currentQuestion].correct;
  const allOptions = document.querySelectorAll(".option");

  // Disable all options
  allOptions.forEach((btn) => (btn.style.pointerEvents = "none"));

  // Apply colors
  allOptions.forEach((btn, index) => {
    if (index === correctIndex) {
      btn.style.backgroundColor = "#28a745"; // green
      btn.style.boxShadow = "0 0 10px #28a745";
    } else if (index === selectedIndex && selectedIndex !== correctIndex) {
      btn.style.backgroundColor = "#dc3545"; // red
      btn.style.boxShadow = "0 0 10px #dc3545";
    } else {
      btn.style.opacity = "0.6";
    }
  });

  // Add points if correct
  if (selectedIndex === correctIndex) score += 10000;

  // Wait before showing next question
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1500); // show feedback for 1.5 sec
}

function showResult() {
  document.getElementById("question-container").classList.add("hide");
  resultElement.classList.remove("hide");
  resultElement.innerHTML = `
    <h2>🏆 You won ₹${score.toLocaleString()}!</h2>
    <p>Thanks for playing, Vansh!</p>
  `;
}

loadQuestion();
