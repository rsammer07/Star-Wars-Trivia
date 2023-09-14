//--------cached elements--------//
let question = document.querySelector(`#question`)
let buttonContainer = document.querySelector(`#buttonContainer`)
let scoreDisplay = document.querySelector(`#scoreValue`)
let optionOne = document.querySelector(`#buttonOne`)
let optionTwo = document.querySelector(`#buttonTwo`)
let optionThree = document.querySelector(`#buttonThree`)
let optionFour = document.querySelector(`#buttonFour`)
let nextButton = document.querySelector(`#nextButton`)
let starImage = document.querySelector(`#starImage`)
let startButton = document.querySelector(`#startButton`)

buttonContainer.style.visibility = `hidden`;
//-----------constants-----------//
const choices = [optionOne, optionTwo, optionThree, optionFour]

const questions = [
    {
        questionText: `Who shot first?`,
        choices: [`Han Solo`, `Luke Skywalker`, `Greedo`, `R2-D2`],
        correctAnswer: `Han Solo`
    },
    {
        questionText: `In episode 3, who turns to the dark side and becomes "Darth Vader"?`,
        choices: [`Obi-Wan`, `C3PO`, `Anakin Skywalker`, `Mace Windu`],
        correctAnswer: `Anakin Skywalker`,
    },
    {
        questionText: `After Luke Skywalker is born, Where does Obi-Wan take him?`,
        choices: [`Tatooine`, `Hoth`, `Mustafar`, `Dagobah`],
        correctAnswer: `Tatooine`,
    },
    {
        questionText: `Who had the highest midi-chlorian count the Jedi council has ever seen?`,
        choices: [`Ahsoka Tano`, `Shmi Skywalker`, `Anakin Skywalker`, `Jar Jar Binks`],
        correctAnswer: `Anakin Skywalker`,
    },
    {
        questionText: `Who killed Qui-Gon Jinn in episode 1 "The Phantom Menace"?`, 
        choices: [`Senator Bail Organa`, `Commander Cody`, `Jango Fett`, `Darth Maul`],
        correctAnswer: `Darth Maul`, 
    },
    {
        questionText: `Who adopted Leia after she was born and Padme died?`,
        choices: [`Master Plo Koon`, `General Grievous`, `Emporer Palpatine`, `Senator Bail Organa`],
        correctAnswer: `Senator Bail Organa`,
    },
    {
        questionText: `Who used the Jedi mind trick to make a storm-trooper believe "these weren't the droids they were looking for"?`,
        choices: [`Yoda`, `Chewbacca`, `Darth Vader`, `Old Ben Kenobi`],
        correctAnswer: `Old Ben Kenobi`, 
    },
    {
        questionText: `Who's DNA did the Kaminoans use to create the clone army?`,
        choices: [`Jango Fett`, `Boba Fett`, `R2-D2`, `Jar Jar Binks`],
        correctAnswer: `Jango Fett`,
    },
    {
        questionText: `Who is the Senate?`,
        choices: [`Boba Fett`, `Senator Palpatine`, `Bail Organa`, `Queen Amidala`],
        correctAnswer: `Senator Palpatine`,
    },
    {
        questionText: `Who unleashed the Rancor to kill Luke Skywalker?`,
        choices: [`Jabba the Hutt`, `Emporer Palpatine`, `Old Ben Kanobi`, `Yoda`],
        correctAnswer: `Jabba the Hutt`,
    },
]

//-----------variables-----------//
let scoreValue = 0;
scoreDisplay.innerHTML = scoreValue;

//--------event listeners-------//
//I need to establish an event listener that will start the quiz from the startButton
startButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    displayQuestion();
    
});
//I want event listners on all the choice buttons so I can invoke the checkAnswer function.
for (const choice of choices) {
    choice.addEventListener(`click`, (e) => {
        e.preventDefault();
        checkAnswer(choice.textContent)
    });
}
//Now I need to establish an event listner to the nextButton
nextButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    nextQuestion();
});


//----------functions----------//
//establish a wrongAnswer function
wrongAnswer = function() {
        //I want to change what is displayed on the screen after question is answered.
        main.style.backgroundImage = `url("./Photos/Darth-Vader.png")`;
        nextButton.style.visibility = `visible`;
        hideElements();
};


correctAnswer = function() {
        scoreValue = scoreValue + 1;
        scoreDisplay.innerHTML = scoreValue;
        main.style.backgroundImage = `url("./Photos/master-yoda.jpg")`;
        nextButton.style.visibility = `visible`;
        hideElements();
};

//I want to hide all the elements on the page to make way for my correct and incorrect functions to change the background image.
hideElements = function() {
    //hiding the question
    question.style.visibility = `hidden`;
    //hiding the buttons
    buttonContainer.style.visibility = `hidden`;
    //hiding the star wars logo
    starImage.style.visibility = `hidden`;
};
//I want to do the opposite of all my hideElements functions so the screen goes back to the next question.
showElements = function() {
    question.style.visibility = `visible`;
    buttonContainer.style.visibility = `visible`;
    starImage.style.visibility = `visible`;
    main.style.backgroundImage = `url("./Photos/Star\ Wars.jpg")`;
}
// hideElements();
//set current index of question to 0 so it begins from the first question
let currentQuestionIndex = 0;

//create a displayQuestion function
displayQuestion = function() {
    //I want to hide the `startButton`
    startButton.style.visibility = `hidden`;
    //I want to bring my buttonContainer back in view
    buttonContainer.style.visibility = `visible`;
    //tell code what current index we are currently on
  const currentQuestion = questions[currentQuestionIndex];
    //change innerHTML of question to the new question
  question.textContent = currentQuestion.questionText;
    //change innerHTML of choices to the choices value I have in the array of questions
  for (let i = 0; i < choices.length; i++) {
    choices[i].textContent = currentQuestion.choices[i];
  };
};

//I need a function that will check if the users answer is correct or incorrect
checkAnswer = function(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        //If users answer is correct I will invoke the correctAnswer function
      correctAnswer();
    } else {
        //If users answer is incorrect I will invoke the wrongAnswer function
      wrongAnswer();
    };
  };
  // I need a function that will take me to the next question to invoke in my nextButton event listener.
nextQuestion = function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showElements();
        displayQuestion();
    } if (currentQuestionIndex >= questions.length) {
        checkScore();
    }
};
//After user has answered all 10 questions I want the program to check users score and give them their final score screen.
checkScore = function() {
        nextButton.style.visibility = `hidden`;
        //if score is 0-4 user is a padawan learner
        if (scoreValue <= 4) {
            hideElements();
            main.style.backgroundImage = `url("./Photos/padawan.jpeg")`
            //if score is 5-9 user are a jedi knight
        } if (scoreValue >= 5 && scoreValue <= 9) {
            hideElements();
            main.style.backgroundImage = `url("./Photos/jedi-knight.jpeg")`
            //if score is 10/10 user is a Jedi Master
        } else if (scoreValue === 10) {
            hideElements();
            main.style.backgroundImage = `url("./Photos/jedi-master.jpeg")`
        };
    };