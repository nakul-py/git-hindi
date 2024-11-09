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

//document.getElementById("mySubmit").onclick = function(){
 //   username = document.getElementById("myText").value;
   // document.getElementById("myname").textContent = `Hello ${username}`
//}

//--------------------------------------------------------

// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

//let age = 34;
//let message = age >= 18 ?"You are an adult" : "you are a child";
//console.log(message);

//let time = 12;
//let greeting = time <= 12 ?  "Good morning" : "Good evening";
//console.log(greeting);

//let isFruit = true;
//let message = isFruit ? "This is a fruit" : "This is not a fruit";
//console.log(message);

//let amount = 14;
//let discount = amount >= 100 ? 10 : 0;
//console.log(`your total is ${amount - amount * (discount/100)}`)

//__________________________________________________________________

// SWITCH = can be an efficient replacement to many else if statements

/*let day = 4;

switch(day){
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thrusday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(`${day} is not a day`)
    break;
}*/

let testScore = 94;
let Grade;

switch(true){
  case testScore >= 95:
    Grade = "GRADE = TOPPER A+";
    break;
  case testScore >= 90:
    Grade = "GEADE = A";
    break;
    case testScore >= 80:
      Grade = "GRADE = B";
      break;
      case testScore >= 70:
        Grade = "GRADE = C";
        break;
        case testScore >= 60:
          Grade = "GRADE = D";
          break;
          case testScore >= 50:
            Grade = " GRADE = E";
            break;
            case testScore >= 40:
              Grade = "GRADE = F";
              break;
              case testScore >= 30:
                Grade = "GRADE = G";
                break;
              default:
                Grade = "Fail"
}

console.log(Grade);