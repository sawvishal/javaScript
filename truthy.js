 //const userEmail = "hite@gmail.com"

 const userEmail = []

 if(userEmail){
    console.log("got user email");
    
 }else {
    console.log("don't have user email");
     
 }

//  if(userEmail.length === 0){
//     console.log("Array is empty");
    
//  }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary operator

//
//condition ? true: false

const icePrice = 100
icePrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
