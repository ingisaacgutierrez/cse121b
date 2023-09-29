/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);  //let num1 = parseInt(document.getElementById("#add1").value);   // Get the value of input field with id="num-one
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2;
}

const subtractNumbers = function (){
    let num1 = Number(document.querySelector('#subtract1').value);  //let num1 = parseInt(document.getElementById("#add1").value);   // Get the value of input field with id="num-one
    let num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(num1, num2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();

var CurrentYear;

CurrentYear = currentDate.getFullYear();

document.getElementById("year").innerHTML = CurrentYear;



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
let arrayOdds = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = arrayOdds

/* Output Evens Only Array */
let arrayEvens = numbersArray.filter(number => number %2 === 0);
document.querySelector('#evens').innerHTML = arrayEvens;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplyArray = numbersArray.map(number => number *2);
document.querySelector('#multiplied').innerHTML = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplyArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;