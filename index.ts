#! /usr/bin/env node

// Importing inquirer and chalk.
import inquirer from "inquirer";
import chalk from "chalk";

// Wellcome Note.
console.log(chalk.bold.bgMagenta("=".repeat(80)));
console.log(chalk.bold.blue("\n\t\tWellcome to Quiz Programme with Dr. Shahid\n"));
console.log(chalk.bold.bgMagenta("=".repeat(80)));

// Defining a variable for store the points.
let points = 0;

// Placing Question No.1.
let quiz1 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.bold.blue("Q1. What is TypeScript primarily used for?"),
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
    },
]);
if (quiz1.question === "Static Typing") {
    console.log(chalk.bold.green("Your Answer is correct, you got 1 point."));
    points++
}
else {
    console.log(chalk.bold.red("Incorrect Answer."));
};

// Placing Question No.2.
let quiz2 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.bold.blue("Q2. Which of the following is NOT a valid TypeScript data type?"),
        choices: ["void", "any", "dynamic", "tuple"]
    },
])
if (quiz2.question === "dynamic") {
    console.log(chalk.bold.green("Your Answer is correct, you got 1 point."));
    points++
}
else {
    console.log(chalk.bold.red("Incorrect Answer."));
};

// Placing Question No.3.
let quiz3 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message: chalk.bold.blue("Q3. How do you specify that a function does not return anything in TypeScript?"),
        choices: ["function myFunc(): undefined", "function myFunc(): void", "function myFunc(): null", "function myFunc(): None"]
    },
]);
if (quiz3.question === "function myFunc(): void") {
    console.log(chalk.bold.green("Your Answer is correct, you got 1 point."));
    points++
}
else {
    console.log(chalk.bold.red("Incorrect Answer."));
};

// Placing Question No.4.
let quiz4 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message:chalk.bold.blue("4. How do you define a custom type in TypeScript?"),
        choices: ["interface", "typedef", "type", "Both A and C"]
    },
]);
if(quiz4.question === "Both A and C"){
    console.log(chalk.bold.green("Your Answer is correct, you got 1 point."));
    points++
}
else{
    console.log(chalk.bold.red("Incorrect Answer."));
};

// Placing Question No.5.
let quiz5 = await inquirer.prompt([
    {
        name: "question",
        type: "list",
        message:chalk.bold.blue("5. How do you denote a variable as readonly in TypeScript?"),
        choices: ["const", "static", "readonly", "fixed"]
    }
]);
if(quiz5.question === "readonly"){
    console.log(chalk.bold.green("Your Answer is correct, you got 1 point."));
    points++
}
else{
    console.log(chalk.bold.red("Incorrect Answer."));
};

console.log(chalk.bold.green(`Your Total Points: ${chalk.bold.white(points)}`));
