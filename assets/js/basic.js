// Selecting the toggle button for sidebar
const sidebar = document.querySelector(".toggle-btn");

// Adding click event listener to toggle the sidebar
sidebar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


// JavaScript for question part
// Array of questions with answers
const questions = [
    // HTML questions
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyperlinks and Text Management Language", correct: false },
      ],
    },
    {
      question: "How do you start writing an if statement in Python?",
      answers: [
        { text: "if condition:", correct: true },
        { text: "if (condition):", correct: false },
        { text: "if [condition]:", correct: false },
        { text: "All of the above", correct: false },
      ],
    },
    {
      question: "Which data type is used to store a sequence of characters in Python?",
      answers: [
        { text: "int", correct: false },
        { text: "list", correct: false },
        { text: "str", correct: true },
        { text: "tuple", correct: false },
      ],
    },
    // CSS questions
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
      ],
    },
    {
      question: "Which property is used to change the background color of an element in CSS?",
      answers: [
        { text: "background-color", correct: true },
        { text: "color", correct: false },
        { text: "bg-color", correct: false },
        { text: "background", correct: false },
      ],
    },
    {
      question: "How do you select an element with id='demo' in CSS?",
      answers: [
        { text: ".demo", correct: false },
        { text: "#demo", correct: true },
        { text: "*demo", correct: false },
        { text: "demo{}", correct: false },
      ],
    },
    {
      question: "What does the HTML <em> element represent?",
      answers: [
        { text: "An emphasized text", correct: true },
        { text: "An important text", correct: false },
        { text: "An italicized text", correct: false },
        { text: "An underlined text", correct: false },
      ],
    },
    // More Python questions
    {
      question: "What is the result of 9 + 3 * 2 in Python?",
      answers: [
        { text: "18", correct: false },
        { text: "21", correct: true },
        { text: "15", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question: "What is the correct way to create a function in Python?",
      answers: [
        { text: "def my_function():", correct: true },
        { text: "function my_function():", correct: false },
        { text: "define my_function():", correct: false },
        { text: "func my_function():", correct: false },
      ],
    },
    {
      question: "Which built-in method can be used to remove whitespace from both ends of a string in Python?",
      answers: [
        { text: "trim()", correct: false },
        { text: "strip()", correct: true },
        { text: "removeWhitespace()", correct: false },
        { text: "clean()", correct: false },
      ],
    },
    // More CSS questions
    {
      question: "Which property is used to specify the size of an element's border in CSS?",
      answers: [
        { text: "border-width", correct: true },
        { text: "border-style", correct: false },
        { text: "border-color", correct: false },
        { text: "border-size", correct: false },
      ],
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      answers: [
        { text: "font-family", correct: true },
        { text: "font-style", correct: false },
        { text: "font-size", correct: false },
        { text: "font-weight", correct: false },
      ],
    },
    {
      question: "What does the CSS property 'display: none;' do?",
      answers: [
        { text: "Hides the element", correct: true },
        { text: "Displays the element as a block-level element", correct: false },
        { text: "Displays the element as an inline element", correct: false },
        { text: "Shows the element", correct: false },
      ],
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const tryAgainButton = document.getElementById("tryAgain-btn");
  
  // Variables
  let currentQuestionsIndex = 0;
  let score = 0;
  
  // Function to shuffle the questions array
  function shuffleQuestions(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }
  
  // Function to start the quiz
  function startQuiz() {
      shuffleQuestions(questions);
      currentQuestionsIndex = 0;
      score = 0;
      nextButton.style.display = "none";
      showQuestion();
  }
  
  // Function to display a question
  function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionsIndex];
      let questionNo = currentQuestionsIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
      // Adding answer buttons dynamically
      currentQuestion.answers.forEach((answer) => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButtons.appendChild(button);
          if (answer.correct) {
              button.dataset.correct = answer.correct;
          }
          button.addEventListener("click", selectAnswer);
      });
  }
  
  // Function to reset the quiz state
  function resetState() {
      nextButton.style.display = "none";
      tryAgainButton.style.display = "none"; // Hide Try Again button
      backButton.style.display = "none"; // Hide Back button
      while (answerButtons.firstChild) {
          answerButtons.removeChild(answerButtons.firstChild);
      }
  }
  

    // Disabling all buttons after selection
  function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.style.backgroundColor = "#9aeabc"; // Highlight correct answer
          score++;
      } else {
        selectedBtn.style.backgroundColor = "#ff9393"; // Highlight incorrect answer
      }

      Array.from(answerButtons.children).forEach(button => {
          if (button.dataset.correct === "true") {
            button.style.backgroundColor = "#9aeabc";
          }else {
            button.style.backgroundColor = "#ff9393"; // Highlight incorrect answers
        }
          button.disabled = true;
      });
      nextButton.style.display = "block";
  }
  
  // Function to handle next button click
  function handleNextButton() {
      currentQuestionsIndex++;
      if (currentQuestionsIndex < 5) { // Limit to 5 questions
          showQuestion();
      } else {
          showScore();
      }
  }
  
  // Function to display score
  function showScore() {
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${Math.min(5, questions.length)}!`; // Display the score out of 5
      const tryAgainButton = document.getElementById("tryAgain-btn");
      const backButton = document.getElementById("back-btn");
  
      tryAgainButton.innerHTML = "Try Again";
      tryAgainButton.style.display = "block";
  
      backButton.innerHTML = "Back";
      backButton.style.display = "block";
  }
  
  // Adding click event listener to next button
  nextButton.addEventListener("click", () => {
      if (currentQuestionsIndex < 5) {
          handleNextButton();
      } else {
          startQuiz();
      }
  });
  
  // Select the back button
  const backButton = document.getElementById("back-btn");
  
  // Add an event listener to the back button
  backButton.addEventListener("click", function () {
      // Redirect the user to the practice.html page
      window.location.href = "practice.html";
  });
  
  // Select the try again button
  const TryAgainButton = document.getElementById("tryAgain-btn");
  
  // Add an event listener to the try again button
  TryAgainButton.addEventListener("click", function () {
      startQuiz();
  });
  
  startQuiz(); // Start the quiz initially