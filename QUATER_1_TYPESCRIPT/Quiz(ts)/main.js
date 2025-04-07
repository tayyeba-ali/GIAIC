#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.italic(" \n \t Welcome to my advanture quiz game \t \n"));
console.log(chalk.magentaBright.italic(" \n You are required to gain maximum 4 point for the window \n"));
let point = 0;
//Q1
let queshion1 = await inquirer.prompt([
    {
        name: "one",
        message: "Typescript is a superset off?",
        type: "list",
        choices: ["Python", "C++", "Java", "Javascript"]
    }
]);
if (queshion1.one == "Javascript") {
    console.log("Your answer is correct");
    point++;
}
else {
    console.log("Incorrect answer");
}
//Q2
let queshion2 = await inquirer.prompt([
    {
        name: "two",
        message: "Who is the founder of microsoft?",
        type: "list",
        choices: ["Bill Gates", "Elone Musk", "Jack Ma", "Jeff Bezos"]
    }
]);
if (queshion2.two == "Bill Gates") {
    console.log("Your answer is correct");
    point++;
}
else {
    console.log("Incorrect answer");
}
//Q3
let queshion3 = await inquirer.prompt([
    {
        name: "three",
        message: "Who invented TypeScript?",
        type: "list",
        choices: ["Bill Gates", "Anders Hejlsberg", "Guido van Rossum", "Brendan Eich"]
    }
]);
if (queshion3.three == "Anders Hejlsberg") {
    console.log("Your answer is correct");
    point++;
}
else {
    console.log("Incorrect answer");
}
//Q4
let queshion4 = await inquirer.prompt([
    {
        name: "four",
        message: "Who is the founder of meta?",
        type: "list",
        choices: ["Mark Zuckerberg", "Elone Musk", "Jack Ma", "Jeff Bezos"]
    }
]);
if (queshion4.four == "Mark Zuckerberg") {
    console.log("Your answer is correct");
    point++;
}
else {
    console.log("Incorrect answer");
}
//Q5
let queshion5 = await inquirer.prompt([
    {
        name: "five",
        message: "Who is the real founder of Amazon?",
        type: "list",
        choices: ["Bill Gates", "Elone Musk", "Jack Ma", "Jeff Bezos"]
    }
]);
if (queshion5.five == "Jeff Bezos") {
    console.log("Your answer is correct");
    point++;
}
else {
    console.log("Incorrect answer");
}
//Q6
let queshion6 = await inquirer.prompt([
    {
        name: "six",
        message: "Who is the founder of ChatGpt?",
        type: "list",
        choices: ["Elone Musk", "Sam Altman", "Jack Ma", "Jeff Bezos"]
    }
]);
if (queshion6.six == "Sam Altman") {
    console.log("Your answer is correct");
    point++;
}
else {
    console.log("Incorrect answer");
}
if (point >= 4) {
    console.log(chalk.yellowBright.bold(" \nCongratulation! \n"));
    console.log(chalk.yellowBright(`Your points: ${point}`));
}
else {
    console.log(chalk.yellowBright("You Loss! try next time."));
    console.log(chalk.yellowBright(`Your points: ${point}`));
}
