#! /usr/bin/env node


import inquirer from "inquirer";

let myBalance = 30000; //dollar
let myPin = 1818;
let isExit = false;

console.log("Welcome to the ATM  made by Tayyeba Ali");

let userNa = await inquirer.prompt([
  {
    name: "userId",
    message: "Enter your Name:",
    type: "string"
  },
]);

let pinAnswer = await inquirer.prompt([

  {
    name: "pin",
    message: "Enter your pin",
    type: "number"
  },
]);

if (userNa.userId + "") {
  console.log(`Welcome ${userNa.userId}`);
}
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code !!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash", "Exit"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount < myBalance) {
      (myBalance -= amountAns.amount),
        console.log(`Your remaining balance : ${myBalance}`);
    } else if (amountAns.amount > myBalance) {
      console.log("Insufficent Balance");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your balance is : ${myBalance}`);
  } else if (operationAns.operation === "fast cash") {
    let cashAmount = await inquirer.prompt([
      {
        name: "cash",
        message: "Select your Amount",
        type: "list",
        choices: ["1000", "2000", "10000", "20000"],
      },
    ]);
    myBalance -= cashAmount.cash;
    console.log(`Your new Balance is : ${myBalance}`);
  } else if (operationAns.operation === "Exit") {
    isExit = true;
  }
} else {
  console.log("Incorrect pin number");
}
