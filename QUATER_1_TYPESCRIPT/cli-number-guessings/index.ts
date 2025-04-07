#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessdNumber",
    type: "number",
    message: "please guess a number between 1-6:",
  },
]);

if(answers.userGuessdNumber === randomNumber ){
  console.log("Congratulations! you guessed right number.")
}else{
      console.log("You guessed wronge number. ")
}