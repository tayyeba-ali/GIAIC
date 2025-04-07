// Q10 # Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Date : 14 MAY 2024
// let whitespace: string = "\n \tTayyeba Ali \t \n"; //\n is used for new line and \t is used for whitespace
// console.log(whitespace);
// let withoutSpace = whitespace.trim();
// console.log(withoutSpace);
//Q11 #Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let friendName = ["Sadia" , "Minnal",   "Romaisa", "Zhong Hui"];
// console.log(friendName[0]);
// console.log(friendName[1]);
// console.log(friendName[2]);
// console.log(friendName[3]);
// Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//  let friendName = ["Sadia" , "Minnal",   "Romaisa", "Zhong Hui"];
//  let message = " Thank you for helping me";
// console.log("Hello", friendName[0],message);
// console.log("Hello", friendName[1],message);
// console.log("Hello",friendName[2],message);
// console.log("Hello",friendName[3],message );
//Q13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list tha
// let  transportationMode = ["Toyota Corolla", "Land Cruiser Pradp", "SUV"];
// transportationMode.forEach((Mode) => 
//  console.log(`I would like to buy a ${Mode}`)
// );
// console.log(`But ${transportationMode[1]}is my Dream Car`);
//Q14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestList = ["Zhong hui" , "Laraib fatima" , "Minnal"];
// guestList.forEach((invitation) =>
// console.log(`Hey ${invitation}, I'd love to catch up over dinner!
//   How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
// );
//Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//ANSWER Q 15
// let NewguestList = ["Zhong hui" , "Laraib fatima" , "Minnal"];
// console.log(`${NewguestList[0] } is not coming `);
// NewguestList.splice(0,1,"Sadia");
// NewguestList.forEach((invitation) =>
// console.log(`Hey ${invitation}, I'd love to catch up over dinner!
//   How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
// );
// Q16  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//ANSWER Q16
// let NewguestList = ["Zhong hui" , "Laraib fatima" , "Minnal"];
// console.log(`${NewguestList[0] } is not coming `);
// NewguestList.splice(0,1,"Sadia");
// console.log("Hey everone! We found a bigger dinner tablee. Let's call some more guests");
// NewguestList.unshift("Vo Kim Chi")
// NewguestList.push("Emily")
// let middleGuest:number = Math.floor(NewguestList.length/2);
// NewguestList.splice(middleGuest,0,"Mariyam");
// NewguestList.forEach((moreinvitation) =>
//     console.log(`Hey ${moreinvitation}, I'd love to catch up over dinner!
//         How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
// );
// //Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//ANSWER 17
// let shrinkGuestList = ["Zhong hui" , "Laraib fatima" , "Minnal"];
// console.log(`${shrinkGuestList[0] } is not coming `);
// shrinkGuestList.splice(0,1,"Sadia");
// console.log("Hey everone! We found a bigger dinner tablee. Let's call some more guests");
// shrinkGuestList.unshift("Vo Kim Chi")
// shrinkGuestList.push("Emily")
// let middleGuest:number = Math.floor(shrinkGuestList.length/2);
// shrinkGuestList.splice(middleGuest,0,"Mariyam");
// shrinkGuestList.forEach((shrinkinvitation) =>
//     console.log(`Hey ${shrinkinvitation}, I'd love to catch up over dinner!
//         How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
// );
// console.log("Unfortunely, new dinner table wouldn't arrive in time for the dinner, so I have space only 2 guests for dinner. ")
// while(shrinkGuestList.length > 2){
//     let removeGuest = shrinkGuestList.pop();
//     console.log(`Sorry ${removeGuest}, I can't invite you to dinner`);
// }
// console.log("invitation to the last 2 guests");
// shrinkGuestList.forEach(guestinvitation => console.log(`Hey ${guestinvitation},you are still invited for dinner`));
// shrinkGuestList.pop();
// shrinkGuestList.pop();
// console.log(shrinkGuestList ,"Empty List");
//Q18  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//ANSWER#18
// let placeTOVisit : string[] = ["Uk","Japan", "Korea","China", "Thailand", "New york"];
// //print in orignal order
// console.log("Original Order:", placeTOVisit);
// // print array in alphabatical order without modifying the actual list.
// console.log("Alphabetical Order:", placeTOVisit.slice().sort());
// //array is still in its orignal order by printing it.
// console.log("Original Order:", placeTOVisit);
// //Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Reverse Order:", placeTOVisit.slice().sort().reverse());
// // array is still in its original order by printing it again.
// console.log("Original Order:", placeTOVisit);
// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log("reverse order changed");
// placeTOVisit.reverse();
// console.log(placeTOVisit);
// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log("original order:",placeTOVisit.sort());
// console.log(placeTOVisit);
// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log("original order:", placeTOVisit.sort());
// console.log(placeTOVisit);
// //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("reversr alphabatical order changed:",placeTOVisit.sort().reverse());
// console.log(placeTOVisit);
//Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//Answer 19:
// let shrinkGuestList = ["Zhong hui" , "Laraib fatima" , "Minnal"];
// console.log(`${shrinkGuestList[0] } is not coming `);
// shrinkGuestList.splice(0,1,"Sadia");
// console.log("Hey everone! We found a bigger dinner tablee. Let's call some more guests");
// shrinkGuestList.unshift("Vo Kim Chi")
// shrinkGuestList.push("Emily")
// let middleGuest:number = Math.floor(shrinkGuestList.length/2);
// shrinkGuestList.splice(middleGuest,0,"Mariyam");
// shrinkGuestList.forEach((shrinkinvitation) =>
//     console.log(`Hey ${shrinkinvitation}, I'd love to catch up over dinner!
//         How about joining me for a delicious meal this "Saturday" at "8 PM" at "Kababist". Let me know if you're free!`)
// );
// console.log("Unfortunely, new dinner table wouldn't arrive in time for the dinner, so I have space only 2 guests for dinner. ")
// while(shrinkGuestList.length > 2){
//     let removeGuest = shrinkGuestList.pop();
//     console.log(`Sorry ${removeGuest}, I can't invite you to dinner`);
// }
// console.log("invitation to the last 2 guests");
// shrinkGuestList.forEach(guestinvitation => console.log(`Hey ${guestinvitation},you are still invited for dinner`));
// shrinkGuestList.pop();
// shrinkGuestList.pop();
// console.log(shrinkGuestList ,"Empty List");
// Q20  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//ANSWER 20
var countries = ["Russia", "France", "Germony", "USA", "UAE", "Vietnam", "Philippines"];
//print list of countries
console.log("List of countries:");
countries.forEach(function (country) {
    console.log(country);
});
