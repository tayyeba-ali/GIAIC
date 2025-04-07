#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \tWelcome to Currency Convertor : Made by 'Tayyeba Ali'\n"));
//Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European Currency (Euro)
    "JYP": 113, //Japenese Currency (Yen)
    "CAD": 1.3, //Canadian Currency
    "AUD": 1.65, //Australian Dollar
    "PKR": 280, // Pakistan Rupees
    "INR": 83.38 // India Rupees
};
//promt the user to select currencies to convert from to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: ("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "INR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "INR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formulaa to conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`Converted Amount= ${converted_amount}`);
