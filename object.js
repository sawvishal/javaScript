 //singleton object

 //object literals

 const mySym = Symbol("key")

 const jsUser = {name: "Hitesh",
               "full name":"vishal kumar",
               [mySym]: "myKey1",
               age:  21,
               location: "jharkhand",
               email: "vishalssb858@gmail.com",
               isLoggedIn: false,
               lastLoginDays: ["Monday", "Saturday"] 

 }

//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vishalsaw235@gmail.com"  // value is changed

//Object.freeze(jsUser) // it will freeze the user object and we can't change the value of the object.
jsUser.email = "vishalsaw@2808@gmail.com"
//console.log(jsUser);

jsUser.greetings= function(){
            console.log("hello JS user");
            
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());


 
 

