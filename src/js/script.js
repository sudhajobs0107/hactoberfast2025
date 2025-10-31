document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    /* ========== EASY (newly added) - 10 questions ========== */
    { question: "What is the capital of India?", difficulty: "easy", options: [{ text: "Delhi", correct: true }, { text: "Mumbai", correct: false }, { text: "Kolkata", correct: false }, { text: "Chennai", correct: false }] },
    { question: "Which color do you get when you mix red and white?", difficulty: "easy", options: [{ text: "Pink", correct: true }, { text: "Purple", correct: false }, { text: "Orange", correct: false }, { text: "Brown", correct: false }] },
    { question: "How many legs does a spider have?", difficulty: "easy", options: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }, { text: "12", correct: false }] },
    { question: "Which planet is known as the Red Planet?", difficulty: "easy", options: [{ text: "Earth", correct: false }, { text: "Mars", correct: true }, { text: "Venus", correct: false }, { text: "Jupiter", correct: false }] },
    { question: "Which language is primarily used for web development in the browser?", difficulty: "easy", options: [{ text: "C++", correct: false }, { text: "Python", correct: false }, { text: "JavaScript", correct: true }, { text: "Java", correct: false }] },
    { question: "What is 2 + 2?", difficulty: "easy", options: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }, { text: "22", correct: false }] },
    { question: "Which animal is known as the 'King of the Jungle'?", difficulty: "easy", options: [{ text: "Tiger", correct: false }, { text: "Elephant", correct: false }, { text: "Lion", correct: true }, { text: "Giraffe", correct: false }] },
    { question: "Which gas do plants primarily absorb for photosynthesis?", difficulty: "easy", options: [{ text: "Oxygen", correct: false }, { text: "Carbon Dioxide", correct: true }, { text: "Nitrogen", correct: false }, { text: "Hydrogen", correct: false }] },
    { question: "Which is the smallest prime number?", difficulty: "easy", options: [{ text: "0", correct: false }, { text: "1", correct: false }, { text: "2", correct: true }, { text: "3", correct: false }] },
    { question: "What is the national animal of India?", difficulty: "easy", options: [{ text: "Lion", correct: false }, { text: "Elephant", correct: false }, { text: "Tiger", correct: true }, { text: "Peacock", correct: false }] },

    /* ========== MEDIUM (newly added) - 10 questions ========== */
    { question: "What is the tallest mountain in the world?", difficulty: "medium", options: [{ text: "K2", correct: false }, { text: "Mount Everest", correct: true }, { text: "Kangchenjunga", correct: false }, { text: "Lhotse", correct: false }] },
    { question: "Which is the largest ocean on Earth?", difficulty: "medium", options: [{ text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Pacific Ocean", correct: true }, { text: "Arctic Ocean", correct: false }] },
    { question: "Who invented the light bulb (commonly credited)?", difficulty: "medium", options: [{ text: "Nikola Tesla", correct: false }, { text: "Thomas Edison", correct: true }, { text: "Alexander Graham Bell", correct: false }, { text: "Benjamin Franklin", correct: false }] },
    { question: "Which is the largest continent by land area?", difficulty: "medium", options: [{ text: "Africa", correct: false }, { text: "Asia", correct: true }, { text: "Europe", correct: false }, { text: "North America", correct: false }] },
    { question: "Who wrote the play 'Hamlet'?", difficulty: "medium", options: [{ text: "William Shakespeare", correct: true }, { text: "Christopher Marlowe", correct: false }, { text: "Ben Jonson", correct: false }, { text: "John Donne", correct: false }] },
    { question: "What is the chemical symbol for gold?", difficulty: "medium", options: [{ text: "Gd", correct: false }, { text: "Ag", correct: false }, { text: "Au", correct: true }, { text: "Ga", correct: false }] },
    { question: "Which city is known as the 'City of Light' and famous for the Eiffel Tower?", difficulty: "medium", options: [{ text: "Rome", correct: false }, { text: "Paris", correct: true }, { text: "London", correct: false }, { text: "Madrid", correct: false }] },
    { question: "What is the currency of Japan?", difficulty: "medium", options: [{ text: "Dollar", correct: false }, { text: "Euro", correct: false }, { text: "Yen", correct: true }, { text: "Rupee", correct: false }] },
    { question: "Which organ in the human body produces insulin?", difficulty: "medium", options: [{ text: "Liver", correct: false }, { text: "Pancreas", correct: true }, { text: "Kidney", correct: false }, { text: "Spleen", correct: false }] },
    { question: "Which river is traditionally considered the longest in the world?", difficulty: "medium", options: [{ text: "Amazon", correct: false }, { text: "Nile", correct: true }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },

    /* ========== HARD (newly added) - 10 questions ========== */
    { question: "Which planet is closest to the Sun?", difficulty: "hard", options: [{ text: "Venus", correct: false }, { text: "Mercury", correct: true }, { text: "Earth", correct: false }, { text: "Mars", correct: false }] },
    { question: "What is the SI unit of electric resistance?", difficulty: "hard", options: [{ text: "Ohm", correct: true }, { text: "Volt", correct: false }, { text: "Ampere", correct: false }, { text: "Watt", correct: false }] },
    { question: "Who proposed the theory of general relativity?", difficulty: "hard", options: [{ text: "Isaac Newton", correct: false }, { text: "Albert Einstein", correct: true }, { text: "Galileo Galilei", correct: false }, { text: "Niels Bohr", correct: false }] },
    { question: "Which element has atomic number 26?", difficulty: "hard", options: [{ text: "Iron", correct: true }, { text: "Copper", correct: false }, { text: "Zinc", correct: false }, { text: "Nickel", correct: false }] },
    { question: "What is the longest bone in the human body?", difficulty: "hard", options: [{ text: "Femur", correct: true }, { text: "Tibia", correct: false }, { text: "Humerus", correct: false }, { text: "Fibula", correct: false }] },
    { question: "Which mathematician is known for the work 'Principia Mathematica'?", difficulty: "hard", options: [{ text: "Euclid", correct: false }, { text: "Isaac Newton", correct: true }, { text: "Leonhard Euler", correct: false }, { text: "Bernard Russell", correct: false }] },
    { question: "Which country launched the first artificial satellite, Sputnik 1?", difficulty: "hard", options: [{ text: "United States", correct: false }, { text: "Soviet Union", correct: true }, { text: "China", correct: false }, { text: "United Kingdom", correct: false }] },
    { question: "Which process converts glucose into energy in cells (aerobic)?", difficulty: "hard", options: [{ text: "Photosynthesis", correct: false }, { text: "Cellular respiration", correct: true }, { text: "Fermentation", correct: false }, { text: "Glycolysis only", correct: false }] },
    { question: "What is the capital city of Mongolia?", difficulty: "hard", options: [{ text: "Ulaanbaatar", correct: true }, { text: "Astana", correct: false }, { text: "Bishkek", correct: false }, { text: "Tashkent", correct: false }] },
    { question: "Which branch of mathematics deals with the study of shapes and their properties?", difficulty: "hard", options: [{ text: "Algebra", correct: false }, { text: "Geometry", correct: true }, { text: "Calculus", correct: false }, { text: "Statistics", correct: false }] }
  ];

  const TIME_BY_DIFFICULTY = {
    easy: 30,   // seconds
    medium: 20, // less than easy
    hard: 12    // less than medium
  };

  const prizeLevels = [
    1000, 2000, 5000, 10000, 20000,
    40000, 80000, 160000, 320000, 640000,
    1250000, 2500000, 5000000, 7500000, 10000000
  ];

  // DOM elements
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const gameOverScreen = document.getElementById("game-over-screen");
  const prizePanelContainer = document.getElementById("prize-panel-container");

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const playAgainBtn = document.getElementById("play-again-btn");

  const questionNumberEl = document.getElementById("question-number");
  const totalQuestionsEl = document.getElementById("total-questions");
  const winningsEl = document.getElementById("winnings");
  const questionTextEl = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackContainer = document.getElementById("feedback-container");
  const finalScoreEl = document.getElementById("final-score");
  const prizeListEl = document.getElementById("prize-list");
  const timerEl = document.getElementById("timer");
  const pointsValue = document.getElementById("points-value");

  const difficultyGroup = document.getElementById("difficulty-group");
  const difficultyButtons = difficultyGroup ? difficultyGroup.querySelectorAll(".difficulty-btn") : [];
  let selectedDifficulty = "medium"; // default

  // attach click handlers to difficulty buttons
  difficultyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      difficultyButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedDifficulty = btn.dataset.difficulty;
    });
  });

  // Sound (optional)
  const questionSound = new Audio("assets/kbc-question.mp3");
  questionSound.preload = "auto";

  // Game state
  let currentQuestionIndex = 0;
  let score = 0;
  let shuffledQuestions = [];
  let timerInterval = null;
  let questionTime = TIME_BY_DIFFICULTY[selectedDifficulty];

  function updatePointsDisplay() {
    pointsValue.textContent = `₹${score.toLocaleString("en-IN")}`;
    pointsValue.classList.remove("points-updated");
    void pointsValue.offsetWidth;
    pointsValue.classList.add("points-updated");
  }

  function startGame() {
    questionTime = TIME_BY_DIFFICULTY[selectedDifficulty] || TIME_BY_DIFFICULTY.easy;

    const filtered = selectedDifficulty
      ? quizData.filter(q => q.difficulty === selectedDifficulty)
      : quizData.slice();

    const pool = filtered.length ? filtered : quizData.slice();

    startScreen.classList.add("hidden");
    gameOverScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    prizePanelContainer.classList.remove("hidden");

    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, prizeLevels.length);
    totalQuestionsEl.innerText = shuffledQuestions.length;
    winningsEl.innerText = `₹ ${score}`;
    updatePointsDisplay();
    renderPrizeList();
    showQuestion();
  }

  function renderPrizeList() {
    prizeListEl.innerHTML = "";
    for (let i = 0; i < shuffledQuestions.length; i++) {
      const li = document.createElement("li");
      li.className = "prize-item";
      li.dataset.index = i;
      li.innerHTML = `<span>${i + 1}.</span> <span>₹ ${prizeLevels[i].toLocaleString("en-IN")}</span>`;
      prizeListEl.appendChild(li);
    }
    updatePrizeHighlight();
  }

  function updatePrizeHighlight() {
    const items = prizeListEl.querySelectorAll("li");
    items.forEach((item, idx) => {
      item.classList.remove("current", "completed");
      if (idx < currentQuestionIndex) item.classList.add("completed");
      if (idx === currentQuestionIndex) item.classList.add("current");
    });
  }

  function showQuestion() {
    resetState();
    updatePrizeHighlight();

    const current = shuffledQuestions[currentQuestionIndex];
    questionNumberEl.innerText = currentQuestionIndex + 1;
    questionTextEl.innerText = current.question;

    current.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerText = opt.text;
      if (opt.correct) btn.dataset.correct = "true";
      btn.addEventListener("click", selectAnswer);
      optionsContainer.appendChild(btn);
    });

    try {
      questionSound.currentTime = 0;
      questionSound.play().catch(() => {});
    } catch (e) {}

    startTimer();
  }

  function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = questionTime;
    timerEl.innerText = timeLeft;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.innerText = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    showFeedback("Time's up! Game Over.", "wrong");
    Array.from(optionsContainer.children).forEach(btn => {
      if (btn.dataset.correct === "true") btn.classList.add("correct");
      btn.disabled = true;
    });
    setTimeout(endGame, 1500);
  }

  function resetState() {
    clearInterval(timerInterval);
    nextBtn.classList.add("hidden");
    feedbackContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
  }

  function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";

    Array.from(optionsContainer.children).forEach(btn => {
      btn.disabled = true;
      const correct = btn.dataset.correct === "true";
      setStatusClass(btn, correct);
    });

    if (isCorrect) {
      score = prizeLevels[currentQuestionIndex];
      winningsEl.innerText = `₹ ${score.toLocaleString("en-IN")}`;
      updatePointsDisplay();
      showFeedback("Correct Answer!", "correct");

      const item = prizeListEl.querySelector(`li[data-index="${currentQuestionIndex}"]`);
      if (item) item.classList.add("completed");

      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextBtn.classList.remove("hidden");
      } else {
        showFeedback("Congratulations! You've won it all!", "correct");
        setTimeout(endGame, 1200);
      }
    } else {
      showFeedback("Wrong Answer! Game Over.", "wrong");
      setTimeout(endGame, 1200);
    }
  }

  function setStatusClass(element, correct) {
    element.classList.remove("correct", "incorrect");
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("incorrect");
    }
  }

  function showFeedback(message, status) {
    feedbackContainer.innerHTML = "";
    const p = document.createElement("p");
    p.className = "feedback";
    p.innerText = message;
    if (status === "correct") p.classList.add("text-green");
    if (status === "wrong") p.classList.add("text-red");
    feedbackContainer.appendChild(p);
  }

  function handleNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
  }

  function endGame() {
    clearInterval(timerInterval);
    quizScreen.classList.add("hidden");
    gameOverScreen.classList.remove("hidden");
    prizePanelContainer.classList.add("hidden");
    finalScoreEl.innerText = `₹ ${score.toLocaleString("en-IN")}`;
  }

  // Event listeners
  startBtn.addEventListener("click", startGame);
  nextBtn.addEventListener("click", handleNextQuestion);
  playAgainBtn.addEventListener("click", startGame);

  // initialize display
  updatePointsDisplay();
});
