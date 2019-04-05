
/*let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";


console.log("    |   |   ");
console.log(` ${space1}  | ${space2} | ${space3}   `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space4}  | ${space5} | ${space6}   `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space7}  | ${space8} | ${space9}   `);
console.log("    |   |   ");

let name = "Zee"

if(name == "Zee") {
    console.log("Hi, Zee")
}
else if(name == "Asi") {
    console.log("Hi Asi")
}
else {
    console.log("what's your name?")
}

let myNumber = "5";

if (myNumber == 5) {
    console.log("what a cool number")
}
else {
    console.log("what a random number")
}

if(1 === `1`){
    console.log(true)
}
else{
console.log(false)
}*/

//serve over 18
/*const age = 30;
const country = "UK";

if(age > 17 && country == "UK") {
    console.log("I can serve you.")
}
else{
    console.log("You're too young.")
}*/

// set password length more than 8 char
/*let password = "pswd"
let passwordLength = password.length

if (passwordLength < 8) {
    console.log("This password is too short!")
}
else {
    console.log("Password set.")
}*/

//find divisble by 5 or 3
/*let num = 10 
if(num % 5 ==0 && num % 3 ==0) {
    console.log("This number is divisible by 5 and 3!")
}
else {
    console.log("This number is not divisible by 5 or 3!")
}*/

//find num divisible by 5 and 3 or 5 or 3
/*let num = 11 
if(num % 5 ==0 && num % 3 == 0) {
    console.log("Fizz-Buzz!")
}
else if(num % 3 ==0) {
    console.log("Fizz!")
}
else if(num % 5 ==0) {
    console.log("Buzz!")
}
else {
    console.log("Num.")
}*/

// check if at work
/*let time = (9)
placeOfWork = "I'm at work!"
commuting = "I'm commuting!"

if(time > 8 ){
    console.log(placeOfWork)
}
else if(time = 8) {
    console.log(commuting)
}
else {
    console.log("I'm at work!")
}*/

//find if first letter is last letter
/*let word = "hdhfgsefghjsd"
let wordLength = word.length

let firstLetter = word.substr(0,1)
let lastLetter = word.substr(wordLength - 1,1)

if(firstLetter == lastLetter) {
    console.log("True")
}
else {
    console.log("False")
}*/

//find if palindrome
/*
let number = "123321"
let items = number.split("")
let isPalindrome = items.join("") === items.reverse().join("")

if (isPalindrome) {
    console.log("Your number is a palindrome.")
}
else {
    console.log("Your number is not a Palindrome.")
}*/

//UNFINISHED find last vowel
/* let jargon = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

lastVowel = jargon.lastIndexof("a")*/

//find if even
/*let num1 = 2
let num2 = 5

if((num1 + num2) % 2 == 0) {
    console.log(num1+num2)
}
else if ((num1+ num2) % 2 != 0) {
    console.log(num1*num2)
}
else {
    console.log("error")
}*/

// tic tac to, find if top row is winner
/*let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";


console.log("    |   |   ");
console.log(` ${space1}  | ${space2} | ${space3}   `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space4}  | ${space5} | ${space6}   `);
console.log("    |   |   ");
console.log("-------------");
console.log("    |   |   ");
console.log(` ${space7}  | ${space8} | ${space9}   `);
console.log("    |   |   ");

let row1 = space1 + space2 + space3;

if(row1 == "xxx" || row1 == "ooo") {
    console.log("WINNER")
}*/
// addnumbers
/*const addNumbers = (num1, num2) => {
    let sum = num1 + num2
    console.log(sum)
}
addNumbers(3,3)

//subtract
const substractNumbers = (num3, num4) => {
    let answer = num3 - num4
    console.log(answer)
}
substractNumbers(4,2)*/

//multiply
/*const multiplyNumbers = (num1, num2) => {
    let sum = num1 * num2
    console.log(sum)
}
multiplyNumbers(3,3)

//divide
const divideNumbers = (num3, num4) => {
    let answer = num3 / num4
    console.log(answer)
}
divideNumbers(4,2)*/

//square
/*const squareNumber = (num) => {
    let result = num * num
    console.log(result)
}
squareNumber(4)*/

//calculate
/*const calculation = (operation,x,y) => {
    if(operation == "add") {
        let addition = x + y
        console.log(`${x} + ${y} = ${addition}`)
    }
    else if(operation == "subtract"){
        let subtraction = x - y
        console.log(`${x} - ${y} = ${subtraction}`)
    }
    else if(operation == "multiply"){
        let multiplication = x * y
        console.log(`${x} * ${y} = ${multiplication}`)
    }
    else if(operation == "divide"){
        let division = x / y
        console.log(`${x} / ${y} = ${division}`)
    }
    else {
        console.log("Error, please try again.")
    }
}

calculation("divide",5,2)*/

//is a > b
/*const isGreaterThan = (num1, num2) => {
    if (num1 > num2) {
        let result = true
        console.log(`${result} ${num1} is greater than ${num2}`)
    }
    else {
        let result = false
        console.log(`${result} ${num1} is not greater than ${num2}`)
    }
}
isGreaterThan(933,3798)

//is a < b
const isLessThan = (num3, num4) => {
    if (num3 < num4) {
        let result = true
        console.log(`${result} ${num3} is less than ${num4}`)
    }
    else {
        let result = false
        console.log(`${result} ${num3} is not less than ${num4}`)
    }
}
isLessThan(12,83)*/

//a = b
/*const isEqual = (a,b) => {
    if (a == b) {
        let result = true 
        console.log (`${result} ${a} is equal to ${b}`)
    }
    else {
        let result = false 
        console.log (`${result} ${a} is not equal to ${b}`)
    }
}
isEqual (2,2)*/

//give biggest num
/*const largestNumber = (num1,num2) => {
    if (num1 > num2) {
        console.log(num1)
    }
    else if (num2 > num1){
        console.log(num2)
    }
}
largestNumber(29030,4817894)*/

//smallest num
/*const smallestNumber = (num1,num2) => {
    if (num1 < num2) {
        console.log(num1)
    }
    else if (num2 > num1){
        console.log(num2)
    }
}
smallestNumber(29030,4817894)*/

//Find letter grade of percentage
const letterGrade = (percentage) => {
    if (percentage < 60) {
        return "F"
    }
    else if (percentage < 70 && percentage > 59){
        return "D"
    }
    else if (percentage < 80 && percentage > 69){
        return "C"
    }
    else if (percentage < 90 && percentage > 79){
        return "B"
    }
    else if (percentage < 101 && percentage > 89){
        return "A"
    }
}
console.log(letterGrade(90))

//combine two words with space

const combine = (word1, word2) => {
return word1 + " " + word2
}

console.log(combine("you", "suck"))