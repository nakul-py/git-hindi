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


// const = a vvariable that can't be changed

const PI = 3.14285;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of circle");

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference +"cm";
}