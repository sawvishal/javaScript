// //ES6
// class user {
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUssername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com", 123)

// console.log(chai.encryptPassword());
// console.log(chai.changeUssername());

// //Behind the scene

 function user(userName, email, password){
     this.userName = userName;
     this.email = email;
     this.password = password
 }

user.prototype.encryptPassword = function(){
     return `${this.password}abc`

}
user.prototype.changeUssername = function(){
     return `${this.userName.toUpperCase()}`

}

const tea = new user("tea", "chai@gmail.com", 123)

console.log(tea.encryptPassword());
console.log(tea.changeUssername());
