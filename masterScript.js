let question = document.querySelector(`#question`);
let buttonContainer = document.querySelector(`#buttonContainer`);
let scoreDisplay = document.querySelector(`#scoreValue`);
let optionOne = document.querySelector(`#buttonOne`);
let optionTwo = document.querySelector(`#buttonTwo`);
let optionThree = document.querySelector(`#buttonThree`);
let optionFour = document.querySelector(`#buttonFour`);
let nextButton = document.querySelector(`#nextButton`);
let starImage = document.querySelector(`#starImage`);
let startButton = document.querySelector(`#startButton`);

buttonContainer.style.visibility = `hidden`;
const choices = [optionOne, optionTwo, optionThree, optionFour];

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
];

let scoreValue = 0;
scoreDisplay.innerHTML = scoreValue;

startButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    displayQuestion();
    
});
for (const choice of choices) {
    choice.addEventListener(`click`, (e) => {
        e.preventDefault();
        checkAnswer(choice.textContent)
    });
};
nextButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    nextQuestion();
});

wrongAnswer = function() {
        main.style.backgroundImage = `url("./Photos/Darth-Vader.png")`;
        nextButton.style.visibility = `visible`;
        hideElements();
};


correctAnswer = function() {
        scoreValue = scoreValue + 1;
        scoreDisplay.innerHTML = scoreValue;
        main.style.backgroundImage = `url("./Photos/Yoda.jpg")`;
        nextButton.style.visibility = `visible`;
        hideElements();
};
hideElements = function() {
    question.style.visibility = `hidden`;
    buttonContainer.style.visibility = `hidden`;
    starImage.style.visibility = `hidden`;
};
showElements = function() {
    question.style.visibility = `visible`;
    buttonContainer.style.visibility = `visible`;
    starImage.style.visibility = `visible`;
    main.style.backgroundImage = `url("./Photos/Star\ Wars.jpg")`;
};
let currentQuestionIndex = 0;
displayQuestion = function() {
    startButton.style.visibility = `hidden`;
    buttonContainer.style.visibility = `visible`;
  const currentQuestion = questions[currentQuestionIndex];
  question.textContent = currentQuestion.questionText;
  for (let i = 0; i < choices.length; i++) {
    choices[i].textContent = currentQuestion.choices[i];
  };
};
checkAnswer = function(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      correctAnswer();
    } else {
      wrongAnswer();
    };
  };
nextQuestion = function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showElements();
        displayQuestion();
    } if (currentQuestionIndex >= questions.length) {
        checkScore();
    };
};
checkScore = function() {
        nextButton.style.visibility = `hidden`;
        if (scoreValue <= 4) {
            hideElements();
            main.style.backgroundImage = `url("./Photos/Luke.jpeg")`
        } if (scoreValue >= 5 && scoreValue <= 9) {
            hideElements();
            main.style.backgroundImage = `url("./Photos/Anakin.jpeg")`
        } else if (scoreValue === 10) {
            hideElements();
            main.style.backgroundImage = `url("./Photos/Jedi-Council.png")`
        };
    };