document.addEventListener('DOMContentLoaded', () => {

    const quizData = [
        { question: "What is the capital of India?", options: [{ text: "Delhi", correct: true }, { text: "Mumbai", correct: false }, { text: "Kolkata", correct: false }, { text: "Chennai", correct: false }] },
        { question: "Which planet is known as the Red Planet?", options: [{ text: "Earth", correct: false }, { text: "Mars", correct: true }, { text: "Jupiter", correct: false }, { text: "Venus", correct: false }] },
        { question: "Who wrote the Indian National Anthem?", options: [{ text: "Bankim Chandra Chatterjee", correct: false }, { text: "Mahatma Gandhi", correct: false }, { text: "Rabindranath Tagore", correct: true }, { text: "Sarojini Naidu", correct: false }] },
        { question: "What is the largest mammal in the world?", options: [{ text: "Elephant", correct: false }, { text: "Giraffe", correct: false }, { text: "Blue Whale", correct: true }, { text: "Great White Shark", correct: false }] },
        { question: "In which year did India gain independence?", options: [{ text: "1945", correct: false }, { text: "1947", correct: true }, { text: "1950", correct: false }, { text: "1942", correct: false }] },
        { question: "Which gas is most abundant in the Earth's atmosphere?", options: [{ text: "Oxygen", correct: false }, { text: "Hydrogen", correct: false }, { text: "Carbon Dioxide", correct: false }, { text: "Nitrogen", correct: true }] },
        { question: "What is the currency of Japan?", options: [{ text: "Yuan", correct: false }, { text: "Won", correct: false }, { text: "Yen", correct: true }, { text: "Dollar", correct: false }] },
        { question: "Who painted the Mona Lisa?", options: [{ text: "Vincent van Gogh", correct: false }, { text: "Leonardo da Vinci", correct: true }, { text: "Pablo Picasso", correct: false }, { text: "Michelangelo", correct: false }] },
        { question: "What is the hardest natural substance on Earth?", options: [{ text: "Gold", correct: false }, { text: "Iron", correct: false }, { text: "Diamond", correct: true }, { text: "Platinum", correct: false }] },
        { question: "How many continents are there in the world?", options: [{ text: "5", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] }
    ];

    const prizeLevels = [
        1000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1000000
    ];

    // DOM Elements
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const prizePanelContainer = document.getElementById('prize-panel-container');

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const playAgainBtn = document.getElementById('play-again-btn');

    const questionNumberEl = document.getElementById('question-number');
    const totalQuestionsEl = document.getElementById('total-questions');
    const winningsEl = document.getElementById('winnings');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const finalScoreEl = document.getElementById('final-score');
    const prizeListEl = document.getElementById('prize-list');
    const timerEl = document.getElementById('timer');

    // Game State
    let currentQuestionIndex = 0;
    let score = 0;
    let shuffledQuestions = [];
    let timerInterval;

    function startGame() {
        startScreen.classList.add('hidden');
        gameOverScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        prizePanelContainer.classList.remove('hidden');
        
        score = 0;
        currentQuestionIndex = 0;
        shuffledQuestions = quizData.sort(() => Math.random() - 0.5);
        totalQuestionsEl.innerText = shuffledQuestions.length;
        winningsEl.innerText = `₹ ${score}`;
        
        renderPrizeList();
        showQuestion();
    }

    function renderPrizeList() {
        prizeListEl.innerHTML = '';
        prizeLevels.slice(0, quizData.length).forEach((prize, index) => {
            const li = document.createElement('li');
            li.classList.add('prize-item', 'p-2', 'rounded-md', 'font-semibold');
            li.innerHTML = `
                <span class="text-yellow-300 mr-2">${index + 1}.</span>
                <span>₹ ${prize.toLocaleString('en-IN')}</span>
            `;
            prizeListEl.appendChild(li);
        });
    }

    function updatePrizeHighlight() {
        const prizeItems = prizeListEl.querySelectorAll('li');
        prizeItems.forEach((item, index) => {
            item.classList.remove('current', 'completed');
            if (index < currentQuestionIndex) {
                item.classList.add('completed');
            }
            if (index === currentQuestionIndex) {
                item.classList.add('current');
            }
        });
    }
    
    function showQuestion() {
        resetState();
        updatePrizeHighlight();

        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionNumberEl.innerText = currentQuestionIndex + 1;
        questionTextEl.innerText = currentQuestion.question;

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('option-btn', 'w-full', 'text-left', 'p-4', 'rounded-lg', 'border-2', 'border-indigo-500', 'text-lg');
            if (option.correct) {
                button.dataset.correct = 'true';
            }
            button.addEventListener('click', selectAnswer);
            optionsContainer.appendChild(button);
        });
        startTimer();
    }
    
    function startTimer() {
        let timeLeft = 30;
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
        showFeedback("Time's up! Game Over.", "text-red-400");
        Array.from(optionsContainer.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct'); // Show correct answer
            }
            button.disabled = true;
        });
        setTimeout(endGame, 2000);
    }

    function resetState() {
        clearInterval(timerInterval);
        nextBtn.classList.add('hidden');
        feedbackContainer.innerHTML = '';
        while(optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
    }

    function selectAnswer(e) {
        clearInterval(timerInterval);
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        Array.from(optionsContainer.children).forEach(button => {
            setStatusClass(button, button.dataset.correct === 'true');
            button.disabled = true;
        });

        if (isCorrect) {
            score = prizeLevels[currentQuestionIndex];
            winningsEl.innerText = `₹ ${score.toLocaleString('en-IN')}`;
            showFeedback("Correct Answer!", "text-green-400");
            
            prizeListEl.children[currentQuestionIndex].classList.add('completed');
            prizeListEl.children[currentQuestionIndex].classList.remove('current');

            if (shuffledQuestions.length > currentQuestionIndex + 1) {
                 nextBtn.classList.remove('hidden');
            } else {
                 showFeedback("Congratulations! You've won it all!", "text-yellow-300");
                 setTimeout(endGame, 2000);
            }
        } else {
             showFeedback("Wrong Answer! Game Over.", "text-red-400");
             setTimeout(endGame, 2000);
        }
    }
    
    function setStatusClass(element, correct) {
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }
    }
    
    function showFeedback(message, colorClass) {
        feedbackContainer.innerHTML = ''; // Clear previous feedback
        const feedbackEl = document.createElement('p');
        feedbackEl.innerText = message;
        feedbackEl.classList.add('feedback', 'text-xl', 'font-bold', colorClass);
        feedbackContainer.appendChild(feedbackEl);
    }

    function handleNextQuestion() {
        currentQuestionIndex++;
        showQuestion();
    }

    function endGame() {
        quizScreen.classList.add('hidden');
        gameOverScreen.classList.remove('hidden');
        prizePanelContainer.classList.add('hidden');
        finalScoreEl.innerText = `₹ ${score.toLocaleString('en-IN')}`;
    }

    // Event Listeners
    startBtn.addEventListener('click', startGame);
    nextBtn.addEventListener('click', handleNextQuestion);
    playAgainBtn.addEventListener('click', startGame);
});