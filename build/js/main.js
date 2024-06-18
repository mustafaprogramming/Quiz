#! ./usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright(`\n\n\t   _-^+-^+      ------     === o o 0 o o ===     ------      +^-+^-_`));
console.log(chalk.greenBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(` Welcome To Mustafa's - Quiz Game`)} <})o -+-:*+ ~~!==>`));
console.log(chalk.greenBright(`\t   ‾-∨+-∨+      ------     === o o 0 o o ===     ------      +∨-+∨-‾\n\n\n`));
//different type of answers depending upon choice
let answerQuizTypescript = ["Static Typing", "Dynamic", "Readonly", "Function myFunc(): void", "Both 1 and 2", "To describe the shape of an object", "A type that can be one of several types", "Type guard", "--strict", "function  foo(param?: string)", "tsc example.ts", "let variable: string | null;", "To indicate a function always throws an exception or never returns.", "{ [key: string]: any; }", "npm install -g typescript"];
let answerQuizIQTest = ["13", "NO", "Hand", "Even", "15", "1.45", "6", "1", "sea", "36", "Some Pets are playful", "4", "Barcelona", "9", "Peru"];
let answerQuizGeneralKnowleadge = ["Red", "Peregrine Falcon", "Angel Falls, Venezuela", "Mars", "Carbon", "Honey", "The Sumerians", "Around 50,000", "Ottawa", "To house the tombs of pharaohs", "Brown", "13", "5", "He", "Pack"];
let questions;
let questionNumber = 15;
// score variable
let score;
// Type of Quizes
let choices = [chalk.rgb(0, 0, 255)("TypeScript"), chalk.rgb(255, 255, 255)(`${chalk.rgb(255, 0, 0)('Iq')} Test`), chalk.rgb(255, 255, 255)(`${chalk.rgb(0, 255, 0)('General')} Knowleadge`)];
// Functions
function checkAnswer(quizAnswer, userAnswer) {
    let Score = 0;
    if (questionNumber === userAnswer.length) {
        for (let i = 0; i < questionNumber; i++) {
            if (quizAnswer[i] === userAnswer[i]) {
                Score++;
            }
        }
    }
    return Score;
}
;
async function askingQuestions(questions, answerArray) {
    let userAnswer = [];
    for (let i = 0; i < questionNumber; i++) {
        let Questions = await inquirer.prompt([
            {
                type: "rawlist",
                name: `answer`,
                choices: questions[i].options,
                message: chalk.rgb(255, 145, 0)(`${i + 1}) ${questions[i].question}`),
            },
        ]);
        userAnswer.push(Questions.answer);
    }
    return checkAnswer(answerArray, userAnswer);
}
;
async function Quiz_typescript() {
    score = await askingQuestions(questions, answerQuizTypescript);
    return score;
}
;
async function Quiz_IQTest() {
    score = await askingQuestions(questions, answerQuizIQTest);
    return score;
}
;
async function Quiz_GeneralKnowleadge() {
    score = await askingQuestions(questions, answerQuizGeneralKnowleadge);
    return score;
}
;
async function printResult(score, questionAmount, answerSheet, QuizType) {
    let percentage = ((score / questionAmount) * 100);
    console.log(chalk.rgb(255, 145, 0)(`\n\t\t\tYou Scored ${chalk.rgb(0, 255, 0)(`${percentage.toFixed(2)}`)} Percent.\n`));
    if (QuizType === choices[1]) {
        if (percentage >= 90 && percentage <= 100) {
            console.log(chalk.rgb(0, 245, 0)(`\n\t\t\t  Your IQ is ${(120)}!!!.\n`));
        }
        else if (percentage >= 80 && percentage <= 89) {
            console.log(chalk.rgb(0, 245, 0)(`\n\t\t\t  Your IQ is ${(100)}!!!.\n`));
        }
        else if (percentage >= 60 && percentage <= 79) {
            console.log(chalk.rgb(0, 245, 0)(`\n\t\t\t  Your IQ is ${(90)}!!!.\n`));
        }
        else if (percentage >= 40 && percentage <= 59) {
            console.log(chalk.rgb(0, 245, 0)(`\n\t\t\t  Your IQ is ${(80)}!!!.\n`));
        }
        else if (percentage >= 0 && percentage <= 39) {
            console.log(chalk.rgb(0, 245, 0)(`\n\t\t\tYour IQ is ${chalk.rgb(255, 0, 0)(`Too Low`)}!!!.\n`));
        }
    }
    else {
        if (percentage >= 30 && percentage <= 100) {
            console.log(chalk.rgb(0, 245, 0)(`\n\t\t\t     You Passed!!!.\n`));
        }
        else if (percentage >= 0 && percentage <= 30) {
            console.log(chalk.rgb(255, 0, 0)(`\n\t\t\t     You Failed!!!.\n`));
        }
    }
    let viewAnswerSheet = await inquirer.prompt([
        {
            type: "list",
            name: 'answer',
            choices: [chalk.rgb(0, 255, 0)('Yes'), chalk.rgb(255, 0, 0)('No')],
            message: chalk.rgb(255, 145, 0)(`Wanna See the Correct Answers?`),
        }
    ]);
    if (viewAnswerSheet.answer === chalk.rgb(0, 255, 0)('Yes')) {
        for (let i = 0; i < questionNumber; i++) {
            console.log(chalk.rgb(255, 255, 255)(`${i + 1}) ${answerSheet[i]}.`));
        }
    }
}
;
async function Continuation() {
    let Continuation = await inquirer.prompt([
        {
            type: "list",
            name: 'answer',
            choices: [chalk.rgb(0, 255, 0)('Yes'), chalk.rgb(255, 0, 0)('No')],
            message: chalk.rgb(255, 145, 0)(`Wanna Try The Quiz Again:`),
        }
    ]);
    if (Continuation.answer === chalk.rgb(0, 255, 0)('Yes')) {
        main();
    }
    else {
        console.log(chalk.greenBright(`\n\n\t   _-^+-^+        ------       === o o 0 o o ===       ------        +^-+^-_`));
        console.log(chalk.greenBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(` Thanks For Playing Mustafa's - Quiz Game`)} <})o -+-:*+ ~~!==>`));
        console.log(chalk.greenBright(`\t   ‾-∨+-∨+        ------       === o o 0 o o ===       ------        +∨-+∨-‾\n\n\n`));
    }
}
;
async function main() {
    let answerSheet = [];
    let Quiz = await inquirer.prompt([
        {
            type: "list",
            name: 'type',
            choices: choices,
            message: chalk.rgb(255, 145, 0)(`Select Type Of Quiz:`),
        }
    ]);
    if (Quiz.type !== choices[1]) {
        let NoOfQuestion = await inquirer.prompt([
            {
                type: "list",
                name: 'Number',
                choices: [5, 10, 15],
                message: chalk.rgb(255, 145, 0)(`Select Number Of Questions:`),
            }
        ]);
        questionNumber = NoOfQuestion.Number;
    }
    let answer = 0;
    ;
    if (Quiz.type === choices[0]) {
        questions = [
            { question: "What is TypeScript primarily used for?", options: ["Memory Management", "Dynamic Typing", answerQuizTypescript[0], "Asychronous operations"] },
            { question: "Which of the following is NOT a valid TypeScript data type?", options: ["Void", "Any", answerQuizTypescript[1], "Tuple"] },
            { question: "How do you denote a variable as readonly in TypeScript?", options: ["Const", "Static", "Fixed", answerQuizTypescript[2]] },
            { question: "How do you specify that a function does not return anything in TypeScript?", options: ["Function myFunc(): undefined", answerQuizTypescript[3], "Function myFunc(): null", "Function myFunc(): None"] },
            { question: "How do you define a custom type in TypeScript?", options: ["Interface", "Type", "Typedef", answerQuizTypescript[4]] },
            { question: "What is the primary purpose of TypeScript interfaces?", options: ["To create new classes", "To generate HTML templates", answerQuizTypescript[5], "To manage asynchronous code"] },
            { question: "What is a union type in TypeScript?", options: ["A type that can be any value", answerQuizTypescript[6], "A type that can be both a string and a number simultaneously", "A type that can be an object"] },
            { question: "Which TypeScript feature allows for checking the type of a variable at runtime", options: [answerQuizTypescript[7], "Runtime type", "Dynamic Type", "Typeof"] },
            { question: "What TypeScript compiler option ensures strict type checking?", options: ["--strictTypes", "--typeCheck", answerQuizTypescript[8], "--enforceTypes"] },
            { question: "How do you define an optional parameter in the TypeScript function?", options: ["function  foo(param: string?)", answerQuizTypescript[9], "function  foo(param: string=)", "function  foo(param string?)"] },
            { question: "Which of the following will transpile a TypeScript file (example.ts) to JavaScript?", options: ["typescript example.ts", "ts-compile example.ts", "ts example.ts", answerQuizTypescript[10]] },
            { question: "How do you declare a variable that can be either a string or null in TypeScript?", options: [answerQuizTypescript[11], "let variabble: string || null;", "let variabble: string & null;", "let variabble: string && null;"] },
            { question: "What is the purpose of the never type in TypeScript?", options: ["To indicate that a variable can be any type.", "To represent the absence of values.", "To represent the absence of a type.", answerQuizTypescript[12]] },
            { question: "How can you allow an object to have any number of properties of a given type in TypeScript?", options: ["{[key: any]}: string; }", "{[property: string]}: string; }", answerQuizTypescript[13], "{[value: string]}: string; }"] },
            { question: "Which command would you use to install TypeScript globally using npm?", options: ["npm install typescript", answerQuizTypescript[14], "npm global install typescript", "npm typescript install global"] },
        ];
        answerSheet = answerQuizTypescript;
        answer = await Quiz_typescript();
    }
    else if (Quiz.type === choices[1]) {
        questions = [
            { question: "What is the Missing Number? 7,10,?,16", options: ["5", "9", answerQuizIQTest[0], "17"] },
            { question: "If Ken is taller than Mike and Mike is taller than Dave,is Dave taller than Ken?", options: ["YES", answerQuizIQTest[1]] },
            { question: "A Leaf is to a branch as a Finger is to a?", options: ["Arm", "Nail", "Elbow", answerQuizIQTest[2]] },
            { question: "Is the sum of all the Odd number | 3 8 7 10 11 13 56 | Even or Odd?", options: ["Odd", answerQuizIQTest[3]] },
            { question: "Value of x in equation 3x = 15y - 10x", options: ["13", answerQuizIQTest[4], "17", "19"] },
            { question: "Annas age is 6 times the age of Arthur which is 1,in ten years Annas age will be __________ times Arthurs age?", options: [answerQuizIQTest[5], "1.59", "1.89", "2.04"] },
            { question: "If you were six years old what would be your age now?", options: ["0", answerQuizIQTest[6], "12", "Idk"] },
            { question: "What is the Factorial of 0?", options: [answerQuizIQTest[7], "0", "-1", "-2"] },
            { question: "Desert is to oasis as ocean is to:", options: ["water", "sand", answerQuizIQTest[8], "land"] },
            { question: "Which number follows? 1, 4, 9, 16, 25", options: ["27", "34", answerQuizIQTest[9], "45"] },
            { question: "Choose the conclusion that validly follows from the argument:All kittens are playful.Some pets are kittens.Therefore:", options: ["All kittens are Pets", "All Pets are playful", "All kittens are pets", answerQuizIQTest[10]] },
            { question: "You are building an open-ended (straight) fence by stringing wire between posts 25 meters apart. If the fence is 100 meters long how many posts should you use?", options: [answerQuizIQTest[11], "5", "6", "8"] },
            { question: "Real Madrid is first in the league, and Real Betis is fifth while Osasuna is right between them. If Barcelona has more points than Celta Vigo and Celta Vigo is exactly below Osasuna, who is second?", options: ["Osasuna", "Celta Vigo", "Real Betis", answerQuizIQTest[12]] },
            { question: "Zeta Leonis is both the fifth smallest and fifth largest star in a constellation.How many stars are there?", options: ["8", answerQuizIQTest[13], "10", "11"] },
            { question: "Aztecs is to Mexico as Incas is to:", options: ["Cuba", answerQuizIQTest[14], "Chile", "Brazil"] },
        ];
        answerSheet = answerQuizIQTest;
        answer = await Quiz_IQTest();
    }
    else if (Quiz.type === choices[2]) {
        questions = [
            { question: "What is the color of blood when it's inside your body?", options: ["Yellow", "White", answerQuizGeneralKnowleadge[0], "Green"] },
            { question: "Which is the fastest bird in the world?", options: ["Bald Eagle", "Hummingbird", answerQuizGeneralKnowleadge[1], "Raven"] },
            { question: "What is the tallest waterfall in the world?", options: ["Niagara Falls, New York", "Wailua Falls, Hawaii", "Sutherland Falls, New Zealand", answerQuizGeneralKnowleadge[2]] },
            { question: "Which planet is known as the \"Red Planet\"?", options: ["Venus", answerQuizGeneralKnowleadge[3], "Mercury", "Saturn"] },
            { question: "Which element is known as the building block of life?", options: ["Oxygen", answerQuizGeneralKnowleadge[4], "Hydrogen", "Nitrogen"] },
            { question: "Which food item never spoils?", options: ["Beef Jerky", "Cereal", answerQuizGeneralKnowleadge[5], "Beans"] },
            { question: "Which ancient civilization is credited with the invention of the wheel?", options: ["The Romans", answerQuizGeneralKnowleadge[6], "The Egyptians", "The Greeks"] },
            { question: "About how many scents can a human nose remember?", options: [answerQuizGeneralKnowleadge[7], "Around 100,000", "Around 500,000", "Around 1 Million"] },
            { question: "What is the capital city of Canada?", options: ["Toronto", "Vancouver", answerQuizGeneralKnowleadge[8], "Montreal"] },
            { question: "What was the main purpose of the pyramids built by the ancient Egyptians?", options: ["To serve as royal palaces", answerQuizGeneralKnowleadge[9], "To function as public meeting spaces", "To act as defensive fortresses"] },
            { question: "Which color is not there in the rainbow?", options: ["Red", "Green", "Indigo", answerQuizGeneralKnowleadge[10]] },
            { question: "How many stripes are there on the US flag?", options: ["10", "11", "12", answerQuizGeneralKnowleadge[11]] },
            { question: "How many rings appear on the Olympic flag?", options: ["1", "3", answerQuizGeneralKnowleadge[12], "7"] },
            { question: "What is the atomic sign for Helium on the periodic table?", options: ["H", "HI", answerQuizGeneralKnowleadge[13], "HU"] },
            { question: "What is the general name for a group of wolves?", options: ["School", answerQuizGeneralKnowleadge[14], "Flock", "Herd"] },
        ];
        answerSheet = answerQuizGeneralKnowleadge;
        answer = await Quiz_GeneralKnowleadge();
    }
    ;
    await printResult(answer, questionNumber, answerSheet, Quiz.type);
    setTimeout(Continuation, 500);
}
setTimeout(() => { console.log(chalk.greenBright(`\t\t\t\tHope You Enjoy The Quizes!\n\n`)); }, 1500);
setTimeout(main, 3000);
