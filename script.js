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
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: 1
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Tiger", "Peacock"],
    correct: 2
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correct: 2
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3
  },
  {
    question: "Who invented the light bulb?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
    correct: 0
  },
  {
    question: "Which is the largest continent by land area?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correct: 1
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correct: 2
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Charles Dickens"],
    correct: 1
  },
  {
    question: "Which gas do plants absorb for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correct: 0
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Won", "Rupee"],
    correct: 0
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const timerBar = document.getElementById("timer-bar");
const timerText = document.getElementById("timer-text");
const timerContainer = document.getElementById("timer-container");

const questionSound = new Audio('assets/kbc-question.mp3');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsElement.innerHTML = "";
  timerContainer.classList.remove("hide");

  // Play KBC question sound
  questionSound.currentTime = 0;
  questionSound.play();

  q.options.forEach((option, index) => {
    const button = document.createElement("div");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(button);
  });

  resetTimer();
  startTimer();
}

function startTimer() {
  timeLeft = 15;
  timerText.textContent = `${timeLeft}s`;
  timerBar.style.width = "100%";

  timer = setInterval(() => {
    timeLeft--;
    timerText.textContent = `${timeLeft}s`;
    timerBar.style.width = `${(timeLeft / 15) * 100}%`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeUp();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timerBar.style.width = "100%";
}

function handleTimeUp() {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => (opt.style.pointerEvents = "none"));
  nextBtn.classList.remove("hide");
  timerContainer.classList.add("hide");
}

function selectAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correct;
  const allOptions = document.querySelectorAll(".option");

  clearInterval(timer);

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
  timerContainer.classList.add("hide");
  resultElement.innerHTML = `<h2>🏆 You won ₹${score.toLocaleString()}!</h2>`;
}

loadQuestion();
