const name = "Vishal"
const repoCount = 50

//console.log(name  + repoCount);  //This is an older way to concotanate the strings

console.log(`Hello my name is ${name } and my repocount is ${repoCount}`);
//This is a new way to concotante the strings..

           // Declaration of a string in javascript

 const gamenName = new String("G T A F E R")

//  console.log(gamenName[0]);
// console.log(gamenName.__proto__);

// console.log(gamenName.length);

// console.log(gamenName.toUpperCase());

// console.log(gamenName.toLowerCase());

// console.log(gamenName.charAt(4));

// console.log(gamenName.indexOf("F"));


 const newString = gamenName.substring(0,4)
 console.log(newString);
 

 const anotherString = gamenName.slice(-6, 2)
 console.log(anotherString);
 
const newString1 ="     Vishal    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://vishal.com/vishal%20kumar"
 
 console.log (url.replace("%20","-"))

console.log(url.includes("Vishal"));

console.log(gamenName.split(" "));

console.log(gamenName.anchor("Vishu"));
 let newString2 = "World"
  let resultString = newString2.padStart('10' , 'Hello')
 console.log(resultString);
 