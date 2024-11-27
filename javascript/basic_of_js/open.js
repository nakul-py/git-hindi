// type conversion = change the datatupe of a value to another
//                   (strings, numbers, booleans)

/*let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age); */

/*let x = "apple";
let y = "45";
let z = "";

x = String(x);
y = Number(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

//------------------------------------------------------------------

// const = a vvariable that can't be changed

/*const PI = 3.14285;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of circle");

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference +"cm";
} */
//---------------------------------------------------------------

// Math = built-in object function that provides 
//        a collection of properties and methods.

//let x = 1;
//let y = 2;
//let z = 4;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(y, x);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);

//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);
//console.log(max);

//-----------------------------------------------------------------

// RANDOM NUMBER GENERATOR


/*const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * ((max + 1) - min)) + min ;
 
//console.log(randomNum)*/

/*const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}
*/
//---------------------------------------------------------

// IF statements = ia a condition is true, execute some code
//                 if not, do something else

/*let time = 12;

if(time <= 12){
    console.log("Good morning..");
}
else{
    console.log("Good evening..");
}*/

/*let isStudent = true;

if(isStudent){
    console.log("you are a student!");
}
else{
    console.log("you are NOT a student..");
}*/



/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultA = document.getElementById("resultA");

let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    let hasPassport = false;

if(age >= 100){
    resultA.textContent = `you are too old so you cannot enroll for site`;
}
else if(age == " "){
    resultA.textContent = `please enter your age`;
}
else if(age >= 20){
    resultA.textContent = `you are old enough to enroll for this site`;
}
else if(age <= 0){
    resultA.textContent = `You cannot enter as you type unspecified age`;
}
else{
    resultA.textContent = `you must be 20+ to enroll for this site`;
}
}
 */

//-----------------------------------------------------------------

// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code. 

/*function happyBirthday(username, age) {
    console.log("Happy birthday to you 1!")
    console.log("Happy birthday to you 2!")
    console.log(`Happy birthday to you ${username}`)
    console.log("Happy birthday to you 4!")
    console.log(`Happy are now ${age} yerars old`)
}
happyBirthday("Nakul", 20);*/

/*function add(x ,y){

    let result = x + y;
    console.log(result);
}

add(343545,1);*/

/*function subtract(x, s){
    let result = x - s;
    console.log(result);
}

subtract(323, 1);*/

/*function multiply(a, b){
    let apple = a * b;
    console.log(apple);
}

multiply(12,5);*/

/*function divide(c ,d) {
    let fruit = Math.floor (c / d);
    console.log(fruit);
}

divide(312, 2)*/

/*function isEven(number){

    if(number % 2 === 0){
        console.log(`${number} is even number`)
    }
    else{
        console.log(`${number} is odd number`)
    }
}

isEven(235)*/

/*function isValidEmail(email){
    if(email.includes("@")){
        console.log(`${email} is a valid email`);
    }
    else{
        console.log(`${email} is not valid email`);
    }
}

isValidEmail("apple.com");*/

// --------------------------------------

// Array = a variable like structure that can hold more than 1 value

let fruit = ["apple","banana","mango", "orange"];

//fruit.push("watermelon")
//fruit.pop();
//fruit.unshift("orange");
//fruit.shift();

//console.log(fruit[2]);

let fruitNum = fruit.length;
let fruitIdx = fruit.indexOf("orange");
//console.log(fruitIdx);

//-----------------------------------------

// spread operator =   ... allows an iterable such as an
//                     array or string to be explained
//                     into seperate elements 
//                     (upacks the elements)

/*let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

let username = "Nakul Verma";
let apple = [...username].join(".")

let vegs = ["carrot", "potato", "Tomato"];
let animals = ["dog","cat", "loin", "tiger"]

let zoo = [...vegs, ...animals, "apple", "mango"];

console.log(zoo);*/

// ----------------------------------------------

// rest parameters = (...rest) allow a function work with  a variable
//                   number of arguments by building them into an array

//          spread = expands an array into seperate elements
//            rest = bundels seperate elements into an array

/*function openBag(...foods) {
    console.log(...foods);
}
function getfood(...foods) {
    return foods;
}
const food1 = "Apple" ;
const food2 = "potato" ;
const food3 = "tomato";
const food4 = "mango";

//openBag(food1, food2, food3, food4);

const foods = getfood(food1, food2, food3, food4);

//console.log(foods);

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

//const total = sum(1,5);

//console.log(`Total is ${total}`);

function getAverage(...numbers) {
    let result = 0; 
    for(let number of numbers){
        result += number; 
    }
    return result / numbers.length;
}

//const total = getAverage(20, 10, 5 ,25, );

//console.log(`Average answer is ${total}`);

function combineString(...string){
    return string.join(" ");
}

const fullname = combineString("Nakul", "verma");

//console.log(fullname);*/

// -------------------------------------------------------

// callback = a function that is passed as an argument
//            to another function.

/*hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function wait(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}*/

/*sum(displayConsole, 23, 27)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}*/

// ---------------------------------------------

// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)

/*let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);

function display(element){
    console.log(element);
}*/

/*let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element , 3);
}

function display(element){
    console.log(element);
}*/

/*let fruits = ["APPLE", "banana" , "coconut", "ORANGE"];

fruits.forEach(capitalize);
fruits.forEach(display);

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element , index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
}

function display(element){
    console.log(element);
}*/

//----------------------------------------------------------

// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

/*const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(cubes)

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}*/

//-----------------------------------------------------------

// .filter() = creates a new array by filtering out elements

/*let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 === 1;
}*/

/*const ages = [10,12,14, 15,18, 19, 20, 21, 22, 40];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChild);

console.log(childs);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}*/

/*const words = ["apple", "banana", "pineapple", "kiwi",
               "orange", "watermelon", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}*/

//_________________________________________________________

// .reduce() = reduce the elements of an array
//             to a single value

/*const prices = [100, 10, 34, 49, 82, 20];

const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, element){
    return accumulator + element;
}*/

/*const grades = [23 ,34, 54, 20, 11, 94, 50, 30];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
} 
 
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}*/

// ---------------------------------------------------

// arrow functions = a concise way to write funnction expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

/*
const hello = (name , age) => {console.log(`Hello ${name}`)
                              console.log(`you are ${age} year's old`)}

hello("Nakul", 20);*/

//setTimeout( () => console.log("Hello"), 3000);

/*const numbers = [1,2,3,4,5,6,7,8,9,10];

const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0)
const oddNums  = numbers.filter((element) => element % 2 !== 0)
const total = numbers.reduce((accumulator, element) => accumulator + element)

console.log(total);*/

// -----------------------------------------------------------

// object = A collection of related properties and/or methods
//          Can represent real world objects(people, products, places)
//          objects = {key:value,
//                      function()}

/*const person1 = {
    firstName: "Chota",
    lastName: "Bheem",
    age: 22,
    isEmployed: true,
    sayHello: function(){console.log("Hello i am Chota Bheem")}
}

const person2 = {
    firstName: "Jaggu",
    lastName: "Bander",
    age: 42,
    isEmployed: false,
    sayHello: function() {console.log("Hello i am Jaggu...")}
}

person1.sayHello();

person2.sayHello();*/

//---------------------------

// this = reference to the object where THIS is used 
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Babli",
    favFood: "Roti",
    sayHello: function(){console.log(`hi i am ${this.name}`)}
}

person1.sayHello();