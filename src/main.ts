#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright(`\n\n\t   _-^+-^+      ------     === o o 0 o o ===     ------      +^-+^-_`));
console.log(chalk.greenBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(` Welcome To Mustafa's - Quiz Game`)} <})o -+-:*+ ~~!==>`));
console.log(chalk.greenBright(`\t   ‾-∨+-∨+      ------     === o o 0 o o ===     ------      +∨-+∨-‾\n\n\n`));
//type of question
type questionObject={
    question:string;
    answer:string;
    options:string[];
}
let questions:questionObject[];
let questionNumber:number;
//AnswerSheet
let answerSheet:string[]=[];
// score variable
let score:number;
// Type of Quizes
let choices:string[]=[chalk.rgb(0,0,255)("TypeScript"),chalk.rgb(255,255,255)(`${chalk.rgb(255,0,0)('Iq')} Test`),chalk.rgb(255,255,255)(`${chalk.rgb(0,255,0)('General')} Knowleadge`)]

// Functions
async function askingQuestions(questions:questionObject[]): Promise<number>{
    let Score=0;
    for(let i=0;i<questionNumber;i++){
        let Questions = await inquirer.prompt([
            {
                type:"rawlist",
                name:`answer`,
                choices:questions[i].options,
                message:chalk.rgb(255,145,0)(`${i+1}) ${questions[i].question}`),
            },
        ]);
        answerSheet.push(questions[i].answer);
        if(Questions.answer === questions[i].answer){
            Score++;
        }
    }
    return Score;
};
async function Quiz_typescript(): Promise<number>{
    score = await askingQuestions(questions);
    return score;
};
async function Quiz_IQTest(): Promise<number>{
    score = await askingQuestions(questions);
    return score;
};
async function Quiz_GeneralKnowleadge(): Promise<number>{
    score = await askingQuestions(questions);
    return score;
};
async function printResult(score:number,questionAmount:number,answerSheet:string[],QuizType:string){
    let percentage:number=((score/questionAmount)*100);
    console.log(chalk.rgb(255,145,0)(`\n\t\t\tYou Scored ${chalk.rgb(0,255,0)(`${percentage.toFixed(2)}`)} Percent.\n`))
    if(QuizType===choices[1]){
        if(percentage>=90&&percentage<=100){
            console.log(chalk.rgb(0,245,0)(`\n\t\t\t  Your IQ is ${(120)}!!!.\n`))
        }else if(percentage>=80&&percentage<=89){
            console.log(chalk.rgb(0,245,0)(`\n\t\t\t  Your IQ is ${(100)}!!!.\n`))
        }else if(percentage>=60&&percentage<=79){
            console.log(chalk.rgb(0,245,0)(`\n\t\t\t  Your IQ is ${(90)}!!!.\n`))
        }else if(percentage>=40&&percentage<=59){
            console.log(chalk.rgb(0,245,0)(`\n\t\t\t  Your IQ is ${(80)}!!!.\n`))
        }else if(percentage>=0&&percentage<=39){
            console.log(chalk.rgb(0,245,0)(`\n\t\t\tYour IQ is ${chalk.rgb(255,0,0)(`Too Low`)}!!!.\n`))
        }
    }else{
        if(percentage>=30&&percentage<=100){
            console.log(chalk.rgb(0,245,0)(`\n\t\t\t     You Passed!!!.\n`))
        }else if(percentage>=0&&percentage<=30){
            console.log(chalk.rgb(255,0,0)(`\n\t\t\t     You Failed!!!.\n`))
        }
    }
    let viewAnswerSheet=await inquirer.prompt([
        {
            type:"list",
            name:'answer',
            choices:[chalk.rgb(0,255,0)('Yes'),chalk.rgb(255,0,0)('No')],
            message:chalk.rgb(255,145,0)(`Wanna See the Correct Answers?`),
        }
    ]);
    if(viewAnswerSheet.answer===chalk.rgb(0,255,0)('Yes')){
        for(let i=0;i<questionNumber;i++){
            console.log(chalk.rgb(255,255,255)(`${i+1}) ${answerSheet[i]}.`))
        }
    }
};
async function Continuation(){
    answerSheet=[];
    let Continuation = await inquirer.prompt([
        {
            type:"list",
            name:'answer',
            choices:[chalk.rgb(0,255,0)('Yes'),chalk.rgb(255,0,0)('No')],
            message:chalk.rgb(255,145,0)(`Wanna Try The Quiz Again:`),
        }
    ]);
    if(Continuation.answer===chalk.rgb(0,255,0)('Yes')){
        main();
    }else{
        setTimeout(()=>{
            console.log(chalk.greenBright(`\n\n\t   _-^+-^+        ------       === o o 0 o o ===       ------        +^-+^-_`));
            console.log(chalk.greenBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(` Thanks For Playing Mustafa's - Quiz Game`)} <})o -+-:*+ ~~!==>`));
            console.log(chalk.greenBright(`\t   ‾-∨+-∨+        ------       === o o 0 o o ===       ------        +∨-+∨-‾\n\n\n`))
        },500)
    }
};
async function main(){
    questionNumber=15;
    let Quiz = await inquirer.prompt([
        {
            type:"list",
            name:'type',
            choices:choices,
            message:chalk.rgb(255,145,0)(`Select Type Of Quiz:`),
        }
    ]);
    if(Quiz.type!==choices[1]){
        let NoOfQuestion = await inquirer.prompt([
            {
                type:"list",
                name:'Number',
                choices:[5,10,15],
                message:chalk.rgb(255,145,0)(`Select Number Of Questions:`),
            }
        ]);
        questionNumber=NoOfQuestion.Number;
    }
    let answer:number=0;;
    if(Quiz.type===choices[0]){
        questions=[
            {question:"What is TypeScript primarily used for?",options:["Memory Management","Dynamic Typing","Static Typing","Asychronous operations"],answer: "Static Typing"},
            {question:"Which of the following is NOT a valid TypeScript data type?",options:["Void","Any","Dynamic","Tuple"],answer: "Dynamic"},
            {question:"How do you denote a variable as readonly in TypeScript?",options:["Const","Static","Fixed","Readonly"],answer: "Readonly"},
            {question:"How do you specify that a function does not return anything in TypeScript?",options:["Function myFunc(): undefined","Function myFunc(): void","Function myFunc(): null","Function myFunc(): None"],answer: "Function myFunc(): void"},
            {question:"How do you define a custom type in TypeScript?",options:["Interface","Type","Typedef","Both 1 and 2"],answer: "Both 1 and 2"},
            {question:"What is the primary purpose of TypeScript interfaces?",options:["To create new classes","To generate HTML templates","To describe the shape of an object","To manage asynchronous code"],answer: "To describe the shape of an object"},
            {question:"What is a union type in TypeScript?",options:["A type that can be any value","A type that can be one of several types","A type that can be both a string and a number simultaneously","A type that can be an object"],answer: "A type that can be one of several types"},
            {question:"Which TypeScript feature allows for checking the type of a variable at runtime",options:["Type guard","Runtime type","Dynamic Type","Typeof"],answer: "Type guard"},
            {question:"What TypeScript compiler option ensures strict type checking?",options:["--strictTypes","--typeCheck","--strict","--enforceTypes"],answer: "--strict"},
            {question:"How do you define an optional parameter in the TypeScript function?",options:["function  foo(param: string?)","function  foo(param?: string)","function  foo(param: string=)","function  foo(param string?)"],answer: "function  foo(param?: string)"},
            {question:"Which of the following will transpile a TypeScript file (example.ts) to JavaScript?",options:["typescript example.ts","ts-compile example.ts","ts example.ts","tsc example.ts"],answer: "tsc example.ts"},
            {question:"How do you declare a variable that can be either a string or null in TypeScript?",options:["let variable: string | null;","let variabble: string || null;","let variabble: string & null;","let variabble: string && null;"],answer: "let variable: string | null;"},
            {question:"What is the purpose of the never type in TypeScript?",options:["To indicate that a variable can be any type.","To represent the absence of values.","To represent the absence of a type.","To indicate a function always throws an exception or never returns."],answer: "To indicate a function always throws an exception or never returns."},
            {question:"How can you allow an object to have any number of properties of a given type in TypeScript?",options:["{[key: any]}: string; }","{[property: string]}: string; }","{ [key: string]: any; }","{[value: string]}: string; }"],answer: "{ [key: string]: any; }"},
            {question:"Which command would you use to install TypeScript globally using npm?",options:["npm install typescript","npm install -g typescript","npm global install typescript","npm typescript install global"],answer: "npm install -g typescript"},
        ];
        answer=await Quiz_typescript();
    }else if(Quiz.type===choices[1]){
        questions=[
            {question:"What is the Missing Number? 7,10,?,16",options:["5","9","13","17"],answer: "13"},
            {question:"If Ken is taller than Mike and Mike is taller than Dave,is Dave taller than Ken?",options:["YES","NO"],answer: "NO"},
            {question:"A Leaf is to a branch as a Finger is to a?",options:["Arm","Nail","Elbow","Hand"],answer: "Hand"},
            {question:"Is the sum of all the Odd number | 3 8 7 10 11 13 56 | Even or Odd?",options:["Odd","Even"],answer: "Even"},
            {question:"Value of x in equation 3x = 15y - 10x",options:["13","15","17","19"],answer: "15"},
            {question:"Annas age is 6 times the age of Arthur which is 1,in ten years Annas age will be __________ times Arthurs age?",options:["1.45","1.59","1.89","2.04"],answer: "1.45"},
            {question:"If you were six years old what would be your age now?",options:["0","6","12","Idk"],answer: "6"},
            {question:"What is the Factorial of 0?",options:["1","0","-1","-2"],answer: "1"},
            {question:"Desert is to oasis as ocean is to:",options:["water","sand","sea","land"],answer: "sea"},
            {question:"Which number follows? 1, 4, 9, 16, 25",options:["27","34","36","45"],answer: "36"},
            {question:"Choose the conclusion that validly follows from the argument:All kittens are playful.Some pets are kittens.Therefore:",options:["All kittens are Pets","All Pets are playful","All kittens are pets","Some Pets are playful"],answer: "Some Pets are playful"},
            {question:"You are building an open-ended (straight) fence by stringing wire between posts 25 meters apart. If the fence is 100 meters long how many posts should you use?",options: ["4","5","6","8"],answer: "4"},
            {question:"Real Madrid is first in the league, and Real Betis is fifth while Osasuna is right between them. If Barcelona has more points than Celta Vigo and Celta Vigo is exactly below Osasuna, who is second?",options:["Osasuna","Celta Vigo","Real Betis","Barcelona"],answer: "Barcelona"},
            {question:"Zeta Leonis is both the fifth smallest and fifth largest star in a constellation.How many stars are there?",options:["8","9","10","11"],answer: "9"},
            {question:"Aztecs is to Mexico as Incas is to:",options:["Cuba","Peru","Chile","Brazil"],answer: "Peru"},
        ];
        answer=await Quiz_IQTest();
    }else if(Quiz.type===choices[2]){
        questions=[
            {question:"What is the color of blood when it's inside your body?",options:["Yellow","White","Red","Green"],answer:"Red"},
            {question:"Which is the fastest bird in the world?",options:["Bald Eagle","Hummingbird","Peregrine Falcon","Raven"],answer:"Peregrine Falcon"},
            {question:"What is the tallest waterfall in the world?",options:["Niagara Falls, New York","Wailua Falls, Hawaii","Sutherland Falls, New Zealand","Angel Falls, Venezuela"],answer:"Angel Falls, Venezuela"},
            {question:"Which planet is known as the \"Red Planet\"?",options:["Venus","Mars","Mercury","Saturn"],answer:"Mars"},
            {question:"Which element is known as the building block of life?",options:["Oxygen","Carbon","Hydrogen","Nitrogen"],answer:"Carbon"},
            {question:"Which food item never spoils?",options:["Beef Jerky","Cereal","Honey","Beans"],answer:"Honey"},
            {question:"Which ancient civilization is credited with the invention of the wheel?",options:["The Romans","The Sumerians","The Egyptians","The Greeks"],answer:"The Sumerians"},
            {question:"About how many scents can a human nose remember?",options:["Around 50,000","Around 100,000","Around 500,000","Around 1 Million"],answer:"Around 50,000"},
            {question:"What is the capital city of Canada?",options:["Toronto","Vancouver","Ottawa","Montreal"],answer:"Ottawa"},
            {question:"What was the main purpose of the pyramids built by the ancient Egyptians?",options:["To serve as royal palaces","To house the tombs of pharaohs","To function as public meeting spaces","To act as defensive fortresses"],answer:"To house the tombs of pharaohs"},
            {question:"Which color is not there in the rainbow?",options:["Red","Green","Indigo","Brown"],answer:"Brown"},
            {question:"How many stripes are there on the US flag?",options:["10","11","12","13"],answer:"13"},
            {question:"How many rings appear on the Olympic flag?",options:["1","3","5","7"],answer:"5"},
            {question:"What is the atomic sign for Helium on the periodic table?",options:["H","HI","He","HU"],answer:"He"},
            {question:"What is the general name for a group of wolves?",options:["School","Pack","Flock","Herd"],answer:"Pack"},
        ];;
        answer=await Quiz_GeneralKnowleadge();
    };
    await printResult(answer,questionNumber,answerSheet,Quiz.type);
    setTimeout(Continuation,500);
}
setTimeout(()=>{console.log(chalk.greenBright(`\t\t\t\tHope You Enjoy The Quizes!\n\n`))},1500);
setTimeout(main,3000);
