#! /usr/bin/env node

import inquirer from "inquirer";
import  chalk from "chalk";

console.log(chalk.italic.yellowBright(" \n \t \t Welcome to the Oop \n"))

// Create class
class Person {
    private _personality: string;

    constructor() {
        this._personality = 'Mystery';
    }

    // User input
    userInput(input: string) {
        // If else statement
        if (input.includes('talk to others about myself.')) {
            this._personality = "happy";
        } else if (input.includes('keep quiet and don\'t ask questions')) {
            this._personality = "rude";
        }
    }

    // Return function
    get personality() {
        return this._personality;
    }
}

// Create objects
class Main {
    public async main() {
        // Await called out
        const ans = await inquirer.prompt({
            // Object create
            type: "list",
            name: "choice",
            message:  chalk.yellow('tell your behaviour ?'),
            choices: [
                '1: talk to others about myself.',
                '2: keep quiet and don\'t ask questions'
            ]
        });

        // Create a personal class
        let myPerson = new Person();

        myPerson.userInput(ans.choice);
        // Output response
        console.log(`You are ${myPerson.personality}`);
    }
}

const myObject = new Main();
myObject.main();
