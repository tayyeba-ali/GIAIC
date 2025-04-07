#! /usr/bin/env node

//Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n \t \t \t Welcome to words counter : Made by 'Tayyeba Ali'"));
console.log("=".repeat(100));

//Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name:"sentence",
        type: "input",
        message:"Enter a Sentence:"
    }
]);

//Trimming the sentence and splitting it int word based on "space"

let words = answers.sentence.trim().split(" ");

//Analaysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${ chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));