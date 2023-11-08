
// STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
//          Any pushes to main will result in you having to restart from the beginning(from creating a repo).
// STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
//          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

//INTO TO JAVASCRIPT EXERCISE

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

let language = 'JavaScript';
let score = '10';
// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.​
let length = '10';
let width = '5';
let newArea = length.concat(width);

console.log(newArea)
function area(length, width){
    console.log(`The area of the rectangle is ${length * width} where`);
    
}
area(10, 5);

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.
let num1 = 10;
let num2 = 4;
console.log(num1 % num2);

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks

console.log(`${num1} / ${num2} = ${num1 / num2} remainder ${num1 % num2}`);




// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]

const array = [7, 7.6, 'Brandon'];

const person = {
    firstname: 'Brandon',
    lastname: 'Roulstone',
    age: 20,
    Carreer: 'Sofware developer'
};

let blah = undefined;

// 2. Once you’ve created the variables, display them to the console
console.log(array);
console.log(person);


// 3. Use the ‘typeof’ function to check each variable

console.log(typeof(array));

console.log(typeof(person));
// 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array

const newArray = [1, 2, 3, 4, 5, "Once i caught a fish", "not a shark", "with bait!"]
console.log(typeof(newArray[0]));
console.log(typeof(newArray[5]));

// 5. Create a null variable and an undefined variable
const noValue = null;
const undef = undefined;
console.log(noValue, undef);

// ***********C. Task 3. functions and contional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!
function euro(rand){
    const eur = 0.054;
    console.log(rand * eur);
}
// declare value of the rand
euro(1000);

function dollars(rand){
    const dol = 0.054;
    console.log(rand * dol);
}
// declare value of the rand
dollars(1000);

function pounds(rand){
    const pound = 0.054;
    console.log(rand * pound);
}
// declare value of the rand
pounds(1000);

//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
function inclVAT(amount){
    const vatCalc = 15 / 100;
    console.log('The amount after tax is' + ' R' + amount * vatCalc)   
}
inclVAT(400);


//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum 
// and assign values of 8, 20 and 14 respectfully. 
// Now write a function that compares “num1” and “num2” and 
// displays the larger value.
let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;
function compareValues(){
    if (firstNum > secondNum){
        console.log(`${firstNum} is legreater than ${secondNum}`);
    } else if (secondNum > firstNum){
        console.log(`${firstNum} is less than ${secondNum}`);
    }
}
compareValues();

//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)
function determine(num){
    if(firstNum % 2 === 0){
        console.log(firstNum  + ' is even');
    } else {
        console.log(firstNum + ' is odd');
    }
    
}
determine(num1);
//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.
if(firstNum < secondNum || secondNum > thirdNum ){
    console.log(secondNum, thirdNum, firstNum);
} else {
    console.log(firstNum,secondNum, thirdNum);
}