// Selecting the toggle button for sidebar
const sidebar = document.querySelector(".toggle-btn");

// Adding click event listener to toggle the sidebar
sidebar.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});
// Array of questions with answers
const questions = [
    // Very hard HTML questions
    {
      question: "Explain the purpose and usage of the 'contenteditable' attribute in HTML.",
      answers: [
        { text: "The 'contenteditable' attribute specifies whether an element's content should be visible or hidden.", correct: false },
        { text: "The 'contenteditable' attribute defines the content to be inserted into an element.", correct: false },
        { text: "The 'contenteditable' attribute determines the alignment of an element's content.", correct: false },
        { text: "The 'contenteditable' attribute makes the content of an element editable by the user, allowing them to modify it directly in the browser.", correct: true },
      ],
    },
    {
      question: "What are Web Components in HTML? Provide an example of how to create and use a Web Component.",
      answers: [
        { text: "Web Components are pre-built HTML templates provided by web browsers.", correct: false },
        { text: "Web Components are a set of web platform APIs that allow for the creation of custom, reusable HTML elements. Example: Define a custom element using the 'customElements.define()' method and use it in HTML.", correct: true },
        { text: "Web Components are JavaScript libraries for building dynamic web applications.", correct: false },
        { text: "Web Components are design patterns for structuring CSS code.", correct: false },
      ],
    },
    {
      question: "Explain the concept of Shadow DOM in HTML and its significance.",
      answers: [
        { text: "Shadow DOM is a method for optimizing DOM traversal and manipulation.", correct: false },
        { text: "Shadow DOM is a security feature to prevent cross-site scripting attacks.", correct: false },
        { text: "Shadow DOM is a way to encapsulate and hide the implementation details of a custom element, ensuring that styles and scripts inside the Shadow DOM do not affect the rest of the document and vice versa.", correct: true },
        { text: "Shadow DOM is a technique for creating translucent elements in HTML.", correct: false },
      ],
    },
    // Very hard CSS questions
    {
      question: "Explain the difference between CSS Grid Layout and CSS Flexbox.",
      answers: [
        { text: "CSS Grid Layout is supported in older web browsers, while CSS Flexbox is not.", correct: false },
        { text: "CSS Grid Layout is a two-dimensional layout system for designing complex web layouts with rows and columns, while CSS Flexbox is a one-dimensional layout system for aligning elements along a single axis.", correct: true },
        { text: "CSS Grid Layout is used for creating flexible layouts, while CSS Flexbox is used for defining fixed-size layouts.", correct: false },
        { text: "CSS Grid Layout is more performant than CSS Flexbox.", correct: false },
      ],
    },
    {
      question: "Explain the concept of CSS-in-JS and provide an example of a CSS-in-JS library.",
      answers: [
        { text: "CSS-in-JS is a method for optimizing CSS performance in web applications.", correct: false },
        { text: "CSS-in-JS is a way to compile CSS code into JavaScript for better browser compatibility.", correct: false },
        { text: "CSS-in-JS is a methodology for styling web applications where CSS is written directly within JavaScript files, allowing for dynamic styling based on component state. Example: Styled-components library in React.", correct: true },
        { text: "CSS-in-JS is a technique for including external CSS files in JavaScript code.", correct: false },
      ],
    },
    {
      question: "Explain the concept of CSS architecture and the benefits of using a modular CSS architecture.",
      answers: [
        { text: "CSS architecture is a method for optimizing CSS performance in web applications.", correct: false },
        { text: "CSS architecture is a technique for compressing CSS files to reduce load times.", correct: false },
        { text: "CSS architecture is a design pattern for creating responsive web layouts.", correct: false },
        { text: "CSS architecture refers to the organization and structure of CSS code within a project. A modular CSS architecture divides styles into independent modules, improving maintainability, scalability, and reusability.", correct: true },
      ],
    },
    // Very hard Python questions
    {
      question: "Explain the concept of metaclasses in Python and provide a practical example of their usage.",
      answers: [
        { text: "Metaclasses are a way to represent multiple inheritance in Python.", correct: false },
        { text: "Metaclasses are a type of decorator used to modify the behavior of functions.", correct: false },
        { text: "Metaclasses are the classes of classes. They allow you to define the behavior of classes themselves, such as customizing class creation or modifying class attributes. Example: Creating a metaclass to enforce certain constraints on class definitions.", correct: true },
        { text: "Metaclasses are a built-in data structure for storing metadata about classes.", correct: false },
      ],
    },
    {
      question: "Explain the Global Interpreter Lock (GIL) in Python and its implications for multi-threaded programs.",
      answers: [
        { text: "The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecode simultaneously. This can limit the performance of multi-threaded programs, especially on multi-core processors.", correct: true },
        { text: "The Global Interpreter Lock (GIL) is a mechanism for preventing race conditions in multi-threaded programs.", correct: false },
        { text: "The Global Interpreter Lock (GIL) is a feature that enables parallel execution of Python code across multiple CPU cores.", correct: false },
        { text: "The Global Interpreter Lock (GIL) is a security measure to prevent unauthorized access to Python objects.", correct: false },
      ],
    },
    {
      question: "Explain the purpose and usage of the 'asyncio' module in Python.",
      answers: [
        { text: "The 'asyncio' module is a utility for generating random numbers in Python.", correct: false },
        { text: "The 'asyncio' module in Python provides tools for asynchronous programming and event loop management, allowing you to write concurrent code that performs I/O-bound or CPU-bound tasks without blocking the execution of other code.", correct: true },
        { text: "The 'asyncio' module is used for performing synchronous I/O operations in Python.", correct: false },
        { text: "The 'asyncio' module is a library for creating graphical user interfaces in Python.", correct: false },
      ],
    },
    {
        question: "Explain the concept of web accessibility (a11y) in HTML and provide examples of techniques for improving accessibility.",
        answers: [
          { text: "Web accessibility refers to the inclusive practice of ensuring websites and web applications are usable by people of all abilities. Techniques include semantic HTML, proper use of ARIA roles and attributes, keyboard navigation support, and providing alternative text for images.", correct: true },
          { text: "Web accessibility focuses on optimizing website loading speed.", correct: false },
          { text: "Web accessibility is a design pattern for creating visually appealing websites.", correct: false },
          { text: "Web accessibility is a security measure to protect against cross-site scripting attacks.", correct: false },
        ],
      },
      {
        question: "Explain the difference between progressive web apps (PWAs) and traditional web apps.",
        answers: [
            { text: "Progressive web apps (PWAs) are optimized for legacy web browsers, while traditional web apps are not.", correct: false },
            { text: "Progressive web apps (PWAs) rely on server-side rendering, while traditional web apps use client-side rendering.", correct: false },
            { text: "Progressive web apps (PWAs) have limited scalability compared to traditional web apps.", correct: false },
            { text: "Progressive web apps (PWAs) are web applications that offer app-like experiences, including offline functionality, push notifications, and the ability to install on a user's device. Traditional web apps are accessed via a web browser and do not offer these features.", correct: true },
        ],
      },
      // Very hard CSS questions (continued)
      {
        question: "Explain the concept of Critical CSS and its importance for web performance optimization.",
        answers: [
          { text: "Critical CSS is a technique for compressing CSS files to reduce their size.", correct: false },
          { text: "Critical CSS is a method for optimizing CSS animations.", correct: false },
          { text: "Critical CSS is the minimal set of CSS required to render the above-the-fold content of a web page. It is important for web performance optimization as it helps reduce render-blocking resources and improve perceived page load speed.", correct: true },
          { text: "Critical CSS is a design pattern for creating responsive web layouts.", correct: false },
        ],
      },
      {
        question: "Explain the concept of CSS specificity and provide examples of how specificity is calculated.",
        answers: [
            { text: "CSS specificity refers to the order in which CSS properties are applied to elements.", correct: false },
            { text: "CSS specificity is the measure of how many styles are applied to a single element.", correct: false },
          { text: "CSS specificity determines which style rules are applied to an element by comparing the specificity values of selectors. Specificity is calculated based on the number of ID selectors, class selectors, and element selectors in a CSS rule.", correct: true },
          { text: "CSS specificity determines the order of precedence when applying styles to elements with pseudo-elements and pseudo-classes.", correct: false },
        ],
      },
      // Very hard Python questions (continued)
      {
        question: "Explain the concept of context managers in Python and provide examples of their usage.",
        answers: [
          { text: "Context managers in Python are objects that manage resources and provide cleanup actions. They are used with the 'with' statement to ensure proper resource management and exception handling. Example: Using 'open()' function as a context manager to manage file resources.", correct: true },
          { text: "Context managers in Python are used to create asynchronous code.", correct: false },
          { text: "Context managers in Python are a way to define decorator functions.", correct: false },
          { text: "Context managers in Python are a mechanism for managing global variables.", correct: false },
        ],
      },
      {
        question: "Explain the concept of function currying in Python and provide examples of its application.",
        answers: [
          { text: "Function currying is the process of transforming a function with multiple arguments into a sequence of nested functions, each taking a single argument. It allows for partial function application and function composition. Example: Using the 'functools.partial()' function to create a curried function.", correct: true },
          { text: "Function currying in Python is a way to define default argument values for functions.", correct: false },
          { text: "Function currying in Python is a method for converting functions into lambda expressions.", correct: false },
          { text: "Function currying in Python is a technique for optimizing recursive functions.", correct: false },
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