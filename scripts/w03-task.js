/* LESSON 3 - Programming Tasks */
function add(number, number2) {return number + number2;}
/* FUNCTIONS */
/* Function Definition - Add Numbers */
function addNumbers() {
let number1 = parseFloat(document.getElementById("add1").value);
let number2 = parseFloat(document.getElementById("add2").value);
let sum = add(number1, number2);

document.getElementById("sum").value = sum;
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){ return number1 - number2;}
const subtractNumbers = function(){
const number1 = parseFloat(document.getElementById("subtract1").value);

const number2 = parseFloat(document.getElementById("subtract2").value)
const difference = subtract(number1, number2);
document.getElementById("difference").value = difference;};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);



/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
const number1 = parseFloat(document.getElementById("factor1").value);
const number2 = parseFloat(document.getElementById("factor2").value);
const product = multiply(number1, number2);
  document.getElementById("product").value = product;
};


document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);




/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}
  
function divideNumbers() {
const number1 = parseFloat(document.getElementById('dividend').value);
const number2 = parseFloat(document.getElementById('divisor').value);
const quotient = divide(number1, number2);
document.getElementById('quotient').value = quotient;
}
  
  
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
  


/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {

var subtotal = Number(document.getElementById("subtotal").value);
var isMember = document.getElementById("member").checked;


if (isMember) {
  subtotal *= 0.8; // Apply a 20% discount
}
document.getElementById("gettotaldue").addEventListener("click", gettotaldue);

document.getElementById('total').innerHTML = `Total Due: $${total.toFixed(2)}`;
});




    

  


/* ARRAY METHODS - Functional Programming */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var numbersArray = Array.from({length: 13}, (_, i) => i + 1);


document.getElementById("array").textContent = numbersArray;
    
var oddsArray = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddsArray;

var evensArray = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evensArray;

var sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

var multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray;

var sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;




/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */



/* Output Sum of Org. Array */


/* Output Multiplied by 2 Array */






/* Output Sum of Multiplied by 2 Array */
