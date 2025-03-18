// let myName = "hitesh     "
// let myChannel = "chai     "

// console.log(myName.truelength);


let myHeroes = ["thor", "spiderMan"]

let heroPower ={
    thor: "Hammer", 
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all Objects`);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello!`);
    
}

//heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyHitesh()
//heroPower.heyHitesh()

//++++++++++++++++++INHERITANCE+++++++++++++++++++

const user ={
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user


//Modern Sytax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = 'chaiAurCode'

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"Hitesh".trueLength()
"iceTea".trueLength()