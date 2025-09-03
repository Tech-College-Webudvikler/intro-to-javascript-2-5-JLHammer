// 2.5.1

let myFirstNum = 5;
let mySecondNum = 12;
let factor = 7;

let result = myFirstNum + mySecondNum;
console.log(`The result of ${myFirstNum} + ${mySecondNum} is ${result}.`);

//result *= factor;
console.log(`The result of ${result} * ${factor} is ${result * factor}.`);

// 2.5.1 Bonus task
/*
Error output:
script.js:10 Uncaught TypeError: Assignment to constant variable.
    at script.js:10:8
(anonymous) @ script.js:10

I get this error because I can't reassign a value to a variable declared with const.
It is not possible to assign a new value to it after its initial declaration.
*/

// 2.5.2
let favoriteCity = "Aalborg";
let cityWordLength = favoriteCity.length;
console.log(`${favoriteCity} has ${cityWordLength} letters.`);

let myName = "Jens Lindberg Hammer";

// Substring method
let firstName = myName.substring(0, 4);
let lastName = myName.substring(5);

console.log("");
console.log("Using the substring method:");
console.log(firstName);
console.log(lastName);

firstName = myName.slice(0, 4);
lastName = myName.slice(5);

// 2.5.1 Bonus task
// Slice method
firstName = myName.slice(0, 4);
lastName = myName.slice(5);

console.log("");
console.log("Using the slice method:");
console.log(firstName);
console.log(lastName);

// Split method
firstName = myName.split(" ")[0];
lastName = myName.split(" ").slice(1).join(" ");

console.log("");
console.log("Using the split method:");
console.log(firstName);
console.log(lastName);

// RegEx method
let match = myName.match(/^(\w+)\s(.+)$/);
firstName = match[1];
lastName = match[2];

console.log("");
console.log("Using the regex method:");
console.log(firstName);
console.log(lastName);

// 3.3
let mainSection = document.getElementById("mainSection");
let pizza = "pizza";
let lasagna = "lasagna";
let spaghettiBolognese = "spaghetti bolognese";

const heading = document.createElement("h2");
heading.textContent = "My favorite dishes are:";

const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
const paragraph3 = document.createElement("p");

paragraph1.textContent = pizza;
paragraph2.textContent = lasagna;
paragraph3.textContent = spaghettiBolognese;

heading.classList.add("myHeader2");
paragraph1.classList.add("dishes");
paragraph2.classList.add("dishes");
paragraph3.classList.add("dishes");

mainSection.appendChild(heading);
mainSection.appendChild(paragraph1);
mainSection.appendChild(paragraph2);
mainSection.appendChild(paragraph3);

// 3.3 Bonus task
// https://www.w3schools.com/js/js_looping.asp
// For loop - Iterates over values and expressions
// While loop  - 	Iterates over a condition
// Do While loop
// For In loop
// For Of loop
// ForEach loop

// ForEach loop example:
let dishes = ["pizza", "lasagna", "spaghettiBolognese"];

dishes.forEach((dish) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  p.textContent = dish;
  p.classList.add("dishes-again");
  mainSection.appendChild(p);
});
