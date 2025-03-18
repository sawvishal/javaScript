function setUserName(username){
//Complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
setUserName.call(this, username)

this.password = password
this.email = email
}

const chai = new createUser("chai", "hai@fb.com", "123" )
console.log(chai);
