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