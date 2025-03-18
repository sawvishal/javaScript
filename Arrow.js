const user = {
    username : "hitessh",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username } ,  welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage
// user.username = "sam"
// user.welcomeMessage()

//console.log();

// function chai(){
//      let username =" hitesh"
//     console.log(this.username);
    
// }
// chai()

    // const chai = function () 
    // {
    //     let username =" hitesh"
    //        console.log(this.username);
            
    // }
    // chai()

    const chai = () => {
       
    let username =" hitesh"
       console.log(this);
        
}
//chai()

// const  addTwo = (num1, num2) =>{  // whenever we use {} their return is also used
//     return num1 + num2
// }


//const  addTwo = (num1, num2) =>( num1 + num2) // withot using the return vslue


const addTwo = (num1, num2) => ({username: "hitessh"}) //passing the object without return 
console.log(addTwo(3,4))

const myarray = [ 2,3,4,5,6,]
