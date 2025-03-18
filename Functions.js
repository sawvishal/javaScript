// console.log("H");
// console.log("I");
// console.log("J");
// console.log("K");
// console.log("L");
// console.log("M");


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
    console.log("M");

}

//sayMyName() // This is how we call a function

function addTwoNumbers(num1, num2){

    // let result = num1 + num2;
    // console.log("Visahl");
    // return result;
    // console.log("Visahl");

     return num1 + num2;
}
const result = addTwoNumbers(2, 7);

//addTwoNumbers(2, 7);
//console.log("result:", result);

function loginUserMessage(username = "ujjwal"){

    if(username === undefined){
        console.log( "Please provide a username");
    return
    }
      return `${username} just logged in`
    }

 //console.log(loginUserMessage("Vishal"))
 //console.log(loginUserMessage("vishal"))

 function calculateCartPrice(val1, val2,...num1){
       return num1
 }

 //console.log(calculateCartPrice(200, 300, 400, 2545));

 const user = {
    username : "Vishal",
    price: 100,
 }
 
 function handleObject(anyObject){
     console.log(`Userbane is ${anyObject.username} and price is
         ${anyObject.price}`);
     
 }

 //handleObject(user);
 handleObject({
    username : "Vishal",
    price: 399
 })

 const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function returnSecondValue(getArray){
    return getArray[1]
 }

 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,300]));
 
 