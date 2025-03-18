function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printName = function(){
    console.log(`price is ${this.score}`);
    
}

const chai =new createUser("chai",25)
const tea = createUser("tea", 250)

chai.printName()