const score = 200

if (score>100){
    const power = "fly"
    console.log(`User power:  ${power}`);
    
}

// shorthand notation 

const balance = 1000

//if (balance > 500 ) console.log("test"),console.log("test2");
// do not use these type of lines

// if(balance < 500){
//       console.log("less than");
      
// }else if (balance < 750){
//     console.log("less than 75");
    
// }else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}