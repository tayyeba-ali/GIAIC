//Q31 # No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
  //Answer31

// let usernames = ["Ali", "Hamza" , "Raza" ,"Admin" , "Ibrahim" , "Aliyan"];
// usernames = []
// //if statment for checking length of our Array is empty? 
// if(usernames.length === 0){
//  console.log("Your Array is empty We need to find some users!")
// }else{
// // if array is not empty use forEAch loop
// usernames.forEach(oneuser=>{
// if(oneuser === "Admin"){
//   console.log(`Hello ${oneuser}, would you like to see a status report?`)
// }else{
//         console.log(`Hello ${oneuser},thank you for logging in again.`)
// }
// });
// }

//Q32 hecking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
  //Answer 32
  //current user
// let current_users = ["Zainab", "ali" ,"raza" , "Abiha" , "eric"];
// //new user
// let new_users =["zainab", "hamza", "Eric" , "Usman" , "shaddha", "Aman"];
// //loop through new_user to check for usernames avalible
// new_users.forEach( new_one_users =>{
// //Making a condition for username already exit and save in our conditional variable
// let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLowerCase())
// //print differnt msg using if else statment
// if(our_condition){
//     console.log(`Sorry ${new_one_users} is already taken!`)
// }else{
//     console.log(`This Username ${new_one_users} is available`)
// }
// });

// //Q33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//ANSWER33
//Creating a Array
// let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

// //using For of Loop
// for(let oneNumber of numbers){
//     let ordinalEnding : string;
// if (oneNumber === 1){
//     ordinalEnding = "st"
// }else if(oneNumber === 2){
//     ordinalEnding = "nd"
// }else if ( oneNumber === 3){
//     ordinalEnding = "rd"
// }else{
//     ordinalEnding = "th"
// }
// console.log(`${oneNumber}${ordinalEnding}`)
// }

// //Q34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional se
 // ANSWER Q34
//  let pizza =["Chicken Tika" , "Malai Cheese" , "Fajita"]; // Creating a Array
//  //usinf for of loop
//  for(let onepizza of pizza){
//     console.log(`I like ${onepizza} pizza`);
//  }
// //print a msg 
// console.log("Pizza is Love");
// console.log("I eat pizza")

//Q35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//ANSWER35
//CREATING A ARRAY
// let petAnimal = ["Cat", "Dog" , "Rabbit", "Parrot"]
// //using foot-loop
// for(let oneAnimal of petAnimal){
//   console.log(`A ${oneAnimal} would make a great pet . `);
// }
// //print message out of the loop
// console.log(" Any of these animals would make a great pet!")

//Q36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
                                          //Answer36
// function make_shirt (size : string, printMessage: string){
//   console.log(`You Selected ${size} size shirt with ${printMessage} print on shirt`)
// }
// make_shirt("large", "I like Programming")

//Q37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
                                          //Answer37
// //Make a function
// function make_shirt(size : string = "large",printMessage : string = "I love Typescript" ){
//   console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)

// }
// //calling a function
// make_shirt()
// //Calling a function now with medium size
// make_shirt("Medium")
// //Calling a function now with small size
// make_shirt("Small", "I love Javascript")

//Q38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
               //ANSWER38
//funtion
// function describe_city(city:string, country:string="Pakistan"){
//   console.log(`${city} is in ${country}.`)
// }
// //calling function
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Xiamen", "China")
// describe_city("Seoul", "South Korea")

//Q39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
  //ANSWER39
//calling a function with parameter which return a value in string
// function city_country(city:string, country:string):string{
//   return `${city}, ${country}`
// }

// //Calling a function and return a value
// console.log(city_country("Karachi" , "Pakistan"));
// console.log(city_country("Shanghai" , "China"));
// console.log(city_country("Tokyo" , "Japan"));

// //Q40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//    //ANSWER 40
// //Define the make_album function
// function make_album (artist_name:string, album_title:string , tracks? : number){
//   let album : {artist : string , title : string , tracks? : number} = {
//       artist : artist_name,
//       title : album_title
//   };
//   if (tracks !== undefined){
//     album.tracks = tracks;
//   }
//   return album;
// }
// //Calling three function and creating 3 variable with different values
// let album1= make_album("Tayyeba", "Album title 1 ");
// let album2 = make_album("Jennie", "Album title", 10);
// let album3 = make_album("Jesso", "Album title 3", 20)
// //print values of our object creating my function
// console.log(album1);
// console.log(album2);
// console.log(album3);

