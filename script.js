//-----------constants-----------//
const optionOne = document.querySelector(`#buttonOne`)
const optionTwo = document.querySelector(`#buttonTwo`)
const optionThree = document.querySelector(`#buttonThree`)
const optionFour = document.querySelector(`#buttonFour`)
const nextButton = document.querySelector(`#nextButton`)

const choices = [optionOne, optionTwo, optionThree, optionFour]

const questions = [
    {
        questionText: `Who shot first`,
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
        questionText: ``,
        choices: [],
        correctAnswer: ``,
    },
    {
        questionText: ``,
        choices: [],
        correctAnswer: ``,
    },
]

//-----------variables-----------//
let question = document.querySelector(`#question`)
let buttonContainer = document.querySelector(`#buttonContainer`)
let scoreValue = document.querySelector(`#scoreValue`)


//--------cached elements--------//



//--------event listeners-------//




//----------functions----------//
wrongAnswer = function() {
    main.style.backgroundImage = `url("./Darth-Vader.png")`
}
