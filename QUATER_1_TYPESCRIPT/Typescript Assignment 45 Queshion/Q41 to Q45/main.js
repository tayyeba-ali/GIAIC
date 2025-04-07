//Q41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//ANSWER41
// //Define a function to print of each magician in the array.
// function show_magicians(magician:string[]){
//     magician.forEach(name => console.log(name))
// }
// //Define an array containing magicians name
// let magicians_names = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"]
// show_magicians(magicians_names);
//Q42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//ANSWER42
//Define a function to print of each magician in the array.
// function show_magicians(magician:string[]){
//     magician.forEach(name => console.log(name))
// }
// //function to make magician great through .map() it will modify array
// function make_great(magician:string[]){
//     return magician.map( name => `THE Great ${name}`);
// }
// //Define an array of magicians name
// let magicians_names = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"]
// //CAll make_great function to modify magician names
// let great_magicians = make_great(magicians_names);
// //Call show_magicians that show modified list of magicians
// show_magicians(great_magicians);
//Q43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//     //ANSWER43
// function show_magicians(magician:string[]){
//     magician.forEach(name => console.log(name))
// }
// //function to make magician great through .map() it will modify array
// function make_great(magician:string[]){
//     return magician.map( name => `THE Great ${name}`);
// }
// //Define an array of magicians name
// let magicians_names = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"]
// //Making a copy or orginal array throught slice() function
// let copy_magician_names = magicians_names.slice();
// //making a copy array to include "The Great" with their names
// let copy_great_magicians = make_great(copy_magician_names);
// //orignal
// console.log("orignal Array \n");
// show_magicians(magicians_names);
// //Copied 
// console.log("\n Copied Array\n")
// show_magicians(copy_great_magicians);
//Q44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//    //ANSWER 44
// function makeSandwich(...items : string[]){
// console.log(`\n Making a sandwich with the following items`);
// items.forEach(singleItem => console.log("-" + singleItem));
// console.log("Now ENjoy Sandwich");
// }
// //call the fiunction 3 different items 
// makeSandwich("Bread" , "Mayo" , "Egg", "Black paper");
// makeSandwich("Bread", "Cheese" , "Chicken" , "Mayo" , "Cucmber");
// makeSandwich("Bread" , "Chicken" , "Mayo" , "Tomato" , "Olives" , "Lettus" , "Cucmber");
//Q45Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//ANSWER45
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add additional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to creat a car object
var my_car = create_car("Toyota", "Corrolla", "Color :Black", "Sunroof: True");
//print t
console.log(my_car);
// type Car = {
//     manufacturer: string;
//     model: string;
//     [key: string]: string; // Index signature to allow additional properties
// };
// function create_car(manufacturer: string, model: string, ...options: string[]): Car {
//     // Initialize a car object with manufacturer and model
//     let car: Car = {
//         manufacturer: manufacturer,
//         model: model
//     };
//     // Add additional options to the car object
//     options.forEach(option => {
//         let [key, value] = option.split(":");
//         car[key.trim()] = value.trim();
//     });
//     return car;
// }
// // Call the function to create a car object
// let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");
// // Print the car object to make sure all the information was stored correctly
// console.log(my_car);
