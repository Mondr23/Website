// Selecting the toggle button for sidebar
const sidebar = document.querySelector(".toggle-btn");

// Adding click event listener to toggle the sidebar
sidebar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const questions = [
  {
    question: "What is the purpose of the 'defer' attribute in a script tag?",
    answers: [
      { text: "To specify the source of the script", correct: false },
      { text: "To indicate the type of script", correct: false },
      { text: "To defer the execution of the script until after the document has been parsed", correct: true },
      { text: "To prevent the script from executing", correct: false },
    ],
  },
  {
    question: "Explain the difference between the 'cookie' and 'sessionStorage' in web browsers.",
    answers: [
      { text: "Cookies are more secure than sessionStorage.", correct: false },
      { text: "Cookies are stored on the client's computer and sent with every request, while sessionStorage stores data for the duration of the page session only.", correct: true },
      { text: "sessionStorage is accessible across different browser tabs, while cookies are not.", correct: false },
      { text: "Cookies have higher storage capacity than sessionStorage.", correct: false },
    ],
  },
  {
    question: "What is the 'meta' tag used for in HTML?",
    answers: [
      { text: "To create a link to an external stylesheet", correct: false },
      { text: "To define the structure of the document", correct: false },
      { text: "To insert comments in the HTML code", correct: false },
      { text: "To provide metadata about the HTML document, such as character encoding, viewport settings, etc.", correct: true },
    ],
  },
  {
    question: "Explain the concept of CSS grid layout.",
    answers: [
      { text: "CSS grid layout is a two-dimensional layout system for designing complex web layouts with rows and columns.", correct: true },
      { text: "CSS grid layout is a method for aligning elements along a single axis.", correct: false },
      { text: "CSS grid layout is a technique for creating animations in CSS.", correct: false },
      { text: "CSS grid layout is a way to style text content within a grid structure.", correct: false },
    ],
  },
  {
    question: "What is the purpose of CSS vendor prefixes like '-webkit-', '-moz-', and '-ms-'?",
    answers: [
      { text: "To improve the performance of CSS animations", correct: false },
      { text: "To enforce CSS rules across all browsers uniformly", correct: false },
      { text: "To enable experimental or proprietary CSS features in specific browsers", correct: true },
      { text: "To specify the order of CSS properties", correct: false },
    ],
  },
  {
    question: "Explain the concept of CSS specificity in relation to pseudo-elements and pseudo-classes.",
    answers: [
      { text: "CSS specificity does not apply to pseudo-elements and pseudo-classes.", correct: false },
      { text: "CSS specificity determines the order of precedence when applying styles to elements with pseudo-elements and pseudo-classes.", correct: true },
      { text: "Pseudo-elements have higher specificity than pseudo-classes.", correct: false },
      { text: "Pseudo-classes have higher specificity than pseudo-elements.", correct: false },
    ],
  },
  // More advanced Python questions
  {
    question: "What is the purpose of the 'yield' keyword in Python?",
    answers: [
      { text: "To halt the execution of a function and return a value", correct: false },
      { text: "To create a generator function that can yield multiple values over time", correct: true },
      { text: "To raise an exception and stop the execution of a program", correct: false },
      { text: "To define a default value for a function parameter", correct: false },
    ],
  },
  {
    question: "Explain the concept of 'duck typing' in Python.",
    answers: [
      { text: "Duck typing is a style of dynamic typing in which an object's methods and properties determine its type, rather than its class or inheritance hierarchy.", correct: true },
      { text: "Duck typing is a method for explicit type conversion in Python.", correct: false },
      { text: "Duck typing is a technique for optimizing code execution in Python.", correct: false },
      { text: "Duck typing is a way to enforce strict type checking in Python.", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'pickle' module in Python?",
    answers: [
      { text: "To perform advanced string manipulation operations", correct: false },
      { text: "To generate random numbers", correct: false },
      { text: "To handle errors and exceptions in Python programs", correct: false },
      { text: "To serialize and deserialize Python objects, allowing them to be saved to and loaded from files", correct: true },
    ],
  },
  {
      question: "What are semantic elements in HTML?",
      answers: [
        { text: "Elements with a specific style applied to them", correct: false },
        { text: "Elements that are visible on the page", correct: false },
        { text: "Elements that carry meaning, describing the content they contain", correct: true },
        { text: "Elements with a large font size", correct: false },
      ],
    },
    {
      question: "Explain the difference between the 'GET' and 'POST' methods in HTML forms.",
      answers: [
        { text: "GET method is more secure than POST method", correct: false },
        { text: "POST method is suitable for retrieving data from the server", correct: false },
        { text: "GET method can only be used for submitting forms", correct: false },
        { text: "GET method sends data via URL parameters, while POST method sends data in the request body", correct: true },
      ],
    },
    // Advanced CSS questions
    {
      question: "What is a CSS preprocessor? Provide an example.",
      answers: [
        { text: "A tool that extends CSS with variables, mixins, and functions, allowing for more maintainable and scalable stylesheets. Example: Sass (Syntactically Awesome Stylesheets)", correct: true },
        { text: "A tool for optimizing CSS performance", correct: false },
        { text: "A tool for converting CSS into JavaScript", correct: false },
        { text: "A tool for analyzing CSS code quality", correct: false },
      ],
    },
    {
      question: "Explain the concept of CSS specificity.",
      answers: [
        { text: "CSS specificity refers to the speed at which styles are applied to the page", correct: false },
        { text: "CSS specificity determines which style declarations are applied to an element based on the specificity of selectors", correct: true },
        { text: "CSS specificity defines the order in which stylesheets are loaded by the browser", correct: false },
        { text: "CSS specificity is the measure of how many styles are applied to a single element", correct: false },
      ],
    },
    {
      question: "What is the 'box-sizing' property in CSS used for?",
      answers: [
        { text: "To set the initial position of an element within its container", correct: false },
        { text: "To define the maximum width and height of an element", correct: false },
        { text: "To control how the width and height of an element are calculated, including padding and border", correct: true },
        { text: "To specify the layout model used for positioning elements", correct: false },
      ],
    },
    // More advanced Python questions
    {
      question: "What is a decorator in Python?",
      answers: [
        { text: "A data structure for storing key-value pairs", correct: false },
        { text: "A type of loop used for iterating over collections", correct: false },
        { text: "A method for adding new attributes to an object", correct: false },
        { text: "A function that modifies the behavior of another function", correct: true },
      ],
    },
    {
      question: "Explain the concept of list comprehension in Python.",
      answers: [
        { text: "List comprehension is a concise way to create lists in Python by iterating over an iterable object and applying an expression to each item.", correct: true },
        { text: "List comprehension is a method for sorting lists in Python.", correct: false },
        { text: "List comprehension is a technique for removing duplicates from a list in Python.", correct: false },
        { text: "List comprehension is a method for converting lists into tuples in Python.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'lambda' keyword in Python?",
      answers: [
        { text: "To define the type of a variable", correct: false },
        { text: "To declare a constant value", correct: false },
        { text: "To create anonymous functions", correct: true },
        { text: "To specify a default value for a function parameter", correct: false },
      ],
    },
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