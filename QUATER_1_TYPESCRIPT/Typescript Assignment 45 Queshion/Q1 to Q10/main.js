//Q1 and Q2
// Install Node.js, TypeScript and VS Code on your computer.
//  Q2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let personName: string = "Eric" ;
//console.log(`Hello  ${personName},would you like to learn some python today?`);
// Q3 # Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let Name: string = "Tayyeba";
//lower Case
// console.log(Name.toLowerCase());
//Uper Case
// console.log(Name.toUpperCase());
//title Case
// console.log(Name.charAt(0).toUpperCase()+Name.slice(1).toLowerCase());
//Q4 #Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//let Quote:string = "Bill Gates";
//console.log(`${Quote} once said,"Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself."`);
//Q5 # Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person:string = "Thomas A. Edison"
// let quote : string = "Many of life's failures are people who did not realize how close they were to success when they gave up." 
// console.log(`${famous_person} once said, ${quote}`);
//Q6 # Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//space
//let whitespace: string = "\n \tTayyeba Ali \t \n";
//console.log(whitespace);
//without space
//let withoutSpace = whitespace.trim();
//console.log(withoutSpace);
//Q7 # Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// console.log("Addition:", 4 + 4);
// console.log("Subtraction:", 10 - 2);
// console.log("Multiplication:", 2 * 4);
// console.log("Division:", 16 / 2);
//Q8 # You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5 + 3);
// console.log(11 - 3);
// console.log(8 * 1);
// console.log(64 / 8);
//Q9 # Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 8;
console.log("My Favorite Number is ".concat(favoriteNumber));
