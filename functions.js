//functions
/*const sayHi = () => {
    console.log("Howdy!")
}

sayHi ()

const cashWithdrawal = (amount, accNum) => {
    console.log(`Withdrawing ${amount} from account number ${accNum}`)
}
cashWithdrawal (30,898394849);

const coffeeOrder = (drinkType, drinkSize, name) => {
    console.log(`We have a ${drinkSize} ${drinkType} for ${name}`)
}
coffeeOrder("latte","small", "Zee")*/

/*const addUp =(num1 + num2) => {
    return num1 + num2
}

let answer = addUp(4,5)*/


/*const factorial = (n) => { 
    if ((n === 0) || (n === 1)) { return 1;
    } else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33));

function factorial (n) {
    if ((n === 0) || (n === 1)) { return 1;
    } else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33));*/
    

/*const noughtsAndCrosses = (space1, space2, space3, space4, space5, space6, space7, space8, space9) => {
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
    }

noughtsAndCrosses("o", "x", "o", "x", " ","x", "o", "x","x")*/

/*let correctPin = 1224
let balance = 250

const pinValidation = (correctPin, enterPin) => {
    if (correctPin == enterPin) {
        return true;
    }
        else {
        console.log("Incorrect PIN, please try again.")
        return false;
    }
}
const balanceCheck = (balance, withdrawal) => {
    if(pinValidation(correctPin, enterPin) && balanceCheck(balance, withdrawal)) {
        console.log(`Your balance is ${balance} and you are withdrawing £${withdrawal}`)  
    }
    else {
        console.log (`Insufficient funds. Current balance is £${balance}`)
    }
}
const ATM = (enterPin, withdrawal) => {
    pinValidation()
    balanceCheck ()
}
ATM (1224,30)*/

/*var actualPin = 1234;
var balance = 200;

const pinValidation = (actualPin, enterPin) => {
    if(actualPin == enterPin) {
        return true;
    }
    else {
        console.log("Please check PIN and try again.")
        return false;
    }
}

const balanceChecker = (balance, withdrawalAmount) => {
    if(balance >= withdrawalAmount) {
        return true;
    }
    else {
        console.log("Amount requested exceeds available balance, please try again.")
        return false;
    }
}

const myATM = (enterPin, withdrawalAmount) => {
    if(pinValidation(actualPin, enterPin) && balanceChecker(balance, withdrawalAmount)) {
        console.log(`Amount dispensed £${withdrawalAmount}`)       
    }
    else {
        console.log("Amount requested exceeds available balance, please try again.")
    }
}

myATM(1234,100);*/

/*const fortuneTeller = (job, location, partner, numberOfKids) => {
    console.log(`You will be a ${job} in ${location}, married to ${partner} with ${numberOfKids} children.`)
}

fortuneTeller("chef", "Manchester", "Beyonce", "7");
fortuneTeller("cyber security analyst", "Dubai", "Keira Knightley", "4");
fortuneTeller("website penetration tester", "Tokyo", "nobody","0");
fortuneTeller("bestselling author", "New York City", "nobody", "0");*/

/*const calculateDogAge = (humanAge) => {
    let dogAge = humanAge*7
    console.log(`Your doggo is ${dogAge} in dog years!`)
}

calculateDogAge(2)*/

/*const doAMultiplication = (num1, num2) => {
    return sum = num1 * num2
}
let answer1 = doAMultiplication(4,5)
console.log(doAMultiplication(answer1, 5))*/

/*const multiply = (num1, num2) => {
    return num1*num2; }
    console.log(multiply(2, 3));*/

/*const numberToString = (number) => {
    if (number == 1) {
        console.log("one")
    }
    else if (number == 2){
        console.log("two")
    }
    else if (number == 3){
        console.log("three")
    }
    else if (number == 4){
        console.log("four")
    }
    else if (number == 5){
        console.log("five")
    }
    else {
        console.log("Please input a number from 1-5.")
    }
}

numberToString(3);*/

/*const increase = (number) => {
    let increasedNumber = ++ number
    console.log(increasedNumber)
}
increase(6)

const decrease = (number2) => {
    let decreasedNumber = -- number2
    console.log(decreasedNumber)
}
decrease(8)*/

