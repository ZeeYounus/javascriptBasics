//problem 1: Find the sum of all the multiples of 3 or 5 below 1000.
/*let ans = []
let k = 0

for (i=1; i<1000; i++){
    if(i % 5 == 0 || i % 3 == 0) {
        ans[k] = i; k++;
    }
}

let sum = 0;

for (let i = 0; i < ans.length; i++) {
    sum += ans[i];
}

console.log(sum);*/

//OR
/*let num = 1000;
let sum = 0;

for (let i = 0; i < num; i++)
 {
 if (i % 3 === 0 || i % 5 === 0)
   {
     sum += i;
   }
 }
console.log(sum);*/

//problem2 find the first and last hi
/*let jargon = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
console.log(jargon.indexOf("hi"))
console.log(jargon.lastIndexOf("hi"))

//problem3 print each letter individually
for (index = 0; index < jargon.length; index++){
    console.log(jargon[index])
}*/

//problem4 find out how many "hi"s there are
/*let jargon = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
let num = 0
for(index = 0; index < jargon.length; index++){
  if(jargon.substr(index,2) == "hi"){
  num++
  console.log(index)
  }
}
console.log(`The number of "hi"s is ${num}`)*/

//problem5 find the biggest palindrome under 90283743503594

/*const palindromeCheck = (number) => {

  let items = number.toString().split("")
  let isPalindrome = items.join ("") === items.reverse().join("")
  if (isPalindrome) {
    return true
  }
  else {
    return false
  }
}

for(i = 902837435035; i> 0; i--) {
  if (palindromeCheck(i)){
    console.log(i)
    break;
  }
}*/

//problem6 count the words in the string
/*let para = "Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises."
let array = para.split(" ")
console.log(array.length)*/

//problem7 
/*const fiftyDigits = (number) => {
   if (number.length == 50) {
     return true
   }
   else{
     return false
   }*/


//

//problem8
/*const isDivisibleByAll = (number) => {
  if (number % (for ()*/

//problem9
let digits = 371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331

const digitsSum= (digits) =>  {
	let sum = 0;
	let string = digits.toString();

	for (i = 0; i < string.length; i++){
		sum = sum + parseInt(string.substring(i, i+1));
	}

	return sum
}

console.log(digitsSum(digits))