"use strict";
// Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//Answer21
Object.defineProperty(exports, "__esModule", { value: true });
// interface personalData{
//     name:string,
//     age : number,
//     education: String
// }
// let personalData ={
//     name: "Tayyeba",
//     age : "20",
//     education:"Associate Degree of Commerce"
// }
// console.log(personalData);
//Q22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Answer 22
// let languages : string[] = ["Urdu", "English" , "Persian" , "Arabic", "Chiness" , "Korean", "Thai"];
// console.log(languages[7]);
// console.log(languages[0]);
//Q23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Answer 23
//   let car = 'subaru';
//  console.log("Is car == 'subaru'? I predict True.")
//  console.log(car == 'subaru')
//  console.log("Is car !== 'subaru'? I predict false")
//  console.log(car !== 'subaru')
//  console.log("Is car !== 'toyota'? I predict True.");
// console.log(car !== 'toyota');
// console.log("Is car == 'toyota'? I predict False.");
// console.log(car == 'toyota');
// console.log("Is car !== 'BMW'? I predict True.");
// console.log(car !== 'BMW');
// console.log("Is car == 'BMW'? I predict False.");
// console.log(car == 'BMW');
// console.log("Is car !== 'BMW'? I predict True.");
// console.log(car !== 'BMW');
// console.log("Is car == 'BMW'? I predict False.");
// console.log(car == 'BMW');
// console.log("Is car !== 'Fang'? I predict True.");
// console.log(car !== 'Fang');
// console.log("Is car == 'Fang'? I predict False.");
// console.log(car == 'Fang');
// console.log("Is car !== ''bugatti? I predict True.");
// console.log(car !== 'bugatti');
// console.log("Is car == 'bugatti'? I predict False.");
// console.log(car == 'bugatti');
// Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array 
//Answer 24
// • Tests for equality and inequality with strings
// console.log("Equality test:",("Tayyeba Ali" as string) === "Tayyeba Ali" );
// console.log("Inequality test:", ("Tayyeba Ali" as string) !== "Muhammad Raza" );
// // • Tests using the lower case function
// console.log("Lower case:" ,"Tayyeba ALi".toLowerCase() === "tayyeba ali" );
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// console.log( "Equality test:", 1000 === 1000); //equality
// console.log ("Inequality test:", (123 as number) !== 111); // Inequality
// console.log ("Greater than test:", 1000 > 10 );//greater then
// console.log("Less than test:" , 10 < 100); // less then
// console.log ("Greater than and equals to test:", 10 >= 10);
// console.log("less than and equal to test:", 5 <= 10);
//• Tests using "and" and "or" operators
// console.log ("And operator test:", true && true);
// console.log("OR operator test:", true || false);
// • Test whether an item is not in a array 
// const car1 = [1 , 2 , 3];
// console.log("test number:", car1.includes(1));
// // • Test whether an item is not in a array 
// const car = [1 , 2 , 3];
// console.log("test number:", !car.includes(5));
// Q25 lien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Answer25
// let alien_color = "green";
// if(alien_color == "green"){
// console.log("the player just earned 5 points.");
// }//pass
// alien_color = "yellow"
// if(alien_color == "green"){
//        console.log("the player just earned 5 points.")
// }//fail
// //Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//ANSWER26
// let alien_color = "green" 
// if(alien_color =="green"){
//        console.log("the player just earned 5 points.")
// }else{
//        console.log("the player just earned 10 points.")
// }
// alien_color = "red" 
// if(alien_color =="green"){
//        console.log("the player just earned 5 points.")
// }else{
//        console.log("the player just earned 10 points.")
// }
//Q27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//ANSWER27
//green: the player just earned 5 points.
// let  alien_color = "green" 
// if(alien_color ==="green"){
//        console.log("the player just earned 5 points.")
// }else if (alien_color === "yellow") {
//        console.log("the player earned 10 points.")
// } else if (alien_color === "red"){
//        console.log("the player earned 15 points.")
// }else{
//        console.log("Unknown Color")
// }
//  // yellow : the player earned 10 points.
// alien_color = "yellow" 
// if(alien_color ==="green"){
//        console.log("the player just earned 5 points.")
// }else if (alien_color === "yellow") {
//        console.log("the player earned 10 points.")
// } else if (alien_color === "red"){
//        console.log("the player earned 15 points.")
// }else{
//        console.log("Unknown Color")
// }
//   //red : the player earned 15 points.
// alien_color = "red" 
// if(alien_color ==="green"){
//        console.log("the player just earned 5 points.")
// }else if (alien_color === "yellow") {
//        console.log("the player earned 10 points.")
// } else if (alien_color === "red"){
//        console.log("the player earned 15 points.")
// }else{
//        console.log("Unknown Color")
// }
// //Q28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // • If the person is age 65 or older, print a message that the person is an elder.
//    //ANSWER 28
//    let age = 60;
// // • If the person is less than 2 years old, print a message that the person is a baby.
// if(age < 2){
//        console.log("the person is a baby.");
// }
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// else if ( age >= 2 && age <4){
// console.log("the person is a toddler.");
// }
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if ( age >= 4 && age <13){
//        console.log("the person is a kid.");
// }
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if ( age >= 13 && age <20){
//        console.log("the person is a teenager.");
// }
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if ( age >= 20 && age < 65){
//        console.log("the person is an adult.");
// }
// //// • If the person is age 65 or older, print a message that the person is an elder.
// else if ( age >= 65 && age < 65){
//        console.log("the person is an elder.");
// }
//Q29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits = ["apple" , "banana" , "mango"];
// if (favorite_fruits.includes("apple")){
// console.log(" You really like apple!")
// }
// if (favorite_fruits.includes("banana")){
//        console.log(" You really like banana!")
// }
// if (favorite_fruits.includes("mango")){
//               console.log(" You really like mango!")
// }
// if (favorite_fruits.includes("kiwi")){
//        console.log(" You really like kiwi!")
//  }
//Q30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//ANSWER# 30
let username = ["Ali", "Hamza", "Raza", "Admin", "Ibrahim", "Aliyan"];
//Using for_each loop on Array
username.forEach(oneuser => {
    if (oneuser === "Admin") {
        console.log(`Hello ${oneuser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneuser},thank you for logging in again.`);
    }
});
