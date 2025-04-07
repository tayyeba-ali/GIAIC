#! /usr/bin/env node 
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
console.log(chalk.italic.magentaBright(" \n \t Welcom to the Countdown Timer \n"));
//step 1 : function for count down second
function* countdownTimer(second) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step 2: counter initilization
let timerIterator = countdownTimer(10);
//step 3:function to create a count down timer
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();
    ////step 4 : if else condition apply
    if (!result.done) {
        //current date and time calls
        const now = new Date();
        //calculate minutes in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        //calculate remaining seconds in time
        const remainingSecond = differenceInSeconds(countdownTime, now);
        console.log(`Remaining Seconds : ${remainingSecond}`);
        setTimeout(displayCountdown, 1000); // 1 second id equal to 1000 ms
    }
    else {
        //display result count down complete
        console.log(chalk.yellowBright.bold(" \t Countdown Complete "));
    }
}
//invoke 
displayCountdown();
