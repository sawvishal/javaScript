const user ={
    username: "Hitesh",
    loginCount: 8,
    signedin:  true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.useername}`);
        console.log(this);
        
        
        
    }
}
 
const user2 ={
    username: "Hitesh",
    loginCount: 8,
    signedin:  true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.useername}`);
       // console.log(this);
        
        
        
    }
}
//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);


//******************Constructor Function********** */

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
   this.username = username
   this.loginCount = loginCount
   this.isLoggedIn = isLoggedIn

   return this
}

const userOne = new User("hitesh", 12, true )
const userTwo = new User("ChaiAurCode", 11,false)
console.log(userOne);
console.log(userTwo);

