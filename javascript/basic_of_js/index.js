/*
console.log(`Wassup`);
console.log(`how r u`);

window.alert("Hello");
window.alert(`what happen!`);


document.getElementById("abc1").textContent = 'Hello';
document.getElementById("p1").textContent = "Hi.";
*/


// Variable = A container that stores a value.
//            behaves as if it were it value contains.

// 1. decleration   let x;
// 2. assignment    x = 10;

//let x;
//x = 10;
//let age = 20;
//let firstname = "nakul";
//let price = 10.50;

//console.log(x);
//console.log(typeof age);
//console.log(`you are ${age} years old`);
//console.log(`your name is: ${firstname}`);
//console.log(`the price is: ${price}`);

//let online = false;

//console.log(`Bro is online: ${online}`);

// arithmatic operators = operands (values, variables, etc)
//                        operators (+ - * /)
//                        ex. 11 = x + 5

let numbers = 30;

//numbers = numbers + 2;
//numbers = numbers - 5;
//numbers = numbers * 2;
//numbers = numbers / 2;
//numbers = numbers ** 3;
//numbers = numbers % 4;

//numbers += 2;
//numbers -= 5;
//numbers *= 3;
//numbers /= 2;
//numbers **= 2;
//numbers %= 3;

//numbers++;
//numbers--;

//console.log(numbers);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication and division and modulo
    4. addiditon and subctraction
*/

//let result = 2 + 15 + 49;

//console.log(result);

// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

///// EASY WAY
//let username; 

//username = window.prompt("what is your name?");

//console.log(username);

//// PROFESSIONAAL WAY

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myname").textContent = `Hello ${username}`
}