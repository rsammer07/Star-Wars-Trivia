//--------cached elements--------//
let question = document.querySelector(`#question`)
let buttonContainer = document.querySelector(`#buttonContainer`)
let scoreValue = document.querySelector(`#scoreValue`)
let optionOne = document.querySelector(`#buttonOne`)
let optionTwo = document.querySelector(`#buttonTwo`)
let optionThree = document.querySelector(`#buttonThree`)
let optionFour = document.querySelector(`#buttonFour`)
let nextButton = document.querySelector(`#nextButton`)
let starImage = document.querySelector(`#starImage`)

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
        correctAnswer: `Aniken Skywalker`,
    },
    {
        questionText: `After Luke Skywalker is born, Where does Obi-Wan take him?`,
        choices: [`Tatooine`, `Hoth`, `Mustafar`, `Dagobah`],
        correctAnswer: `Tatooine`,
    },
    {
        questionText: `Who had the highest midi-chlorian count the Jedi council has ever seen?`,
        choices: [`Ahsoka Tano`, `Shmi Skywalker`, `Anakin Skywalker`, `Jar Jar Binks`],
        correctAnswer: `Aniken Skywalker`,
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
        correctAnswer: `Old Ben Kanobi`, 
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



//--------event listeners-------//




//----------functions----------//
//establish a wrongAnswer function
wrongAnswer = function() {
        //I want to change what is displayed on the screen after question is answered.
        main.style.backgroundImage = `url("./Photos/Darth-Vader.png")`;
        nextButton.style.visibility = `visible`;
        hideElements();
};


correctAnswer = function() {
        scoreValue = score + 1;
        main.style.backgroundImage = `url("./Photos/Yoda.jpeg)`;
        hideElements();
};


hideElements = function() {
    question.style.visibility = `hidden`;
    buttonContainer.style.visibility = `hidden`;
    starImage.style.visibility = `hidden`;
};

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

// wrongAnswer();
displayQuestion();