//singelton object

//const tinderUser = new Object(); //Singelton Object.

const tinderUser = {} // non Singelton Object.

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "samay@123.com",
    fullname:{
        userfullname:{
            firstName: "Samay",
            lastName: "Raina"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a", 2:"b", };
const obj2 = {3:"c", 4:"d", };
const obj4 = {5:"c", 6:"d", };


//const obj3 = {...obj1, ...obj2};
//const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);


const obj3 = {...obj1, ...obj2, ...obj4};
//console.log(obj3);


const users = [
    {
        id: 1,
        name: "Samay",
        email: "h@gmail.com",
    },
]

//users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    coursename: "JS in hindi",
    price:"999",
    courseinstructor: "Samay Raina",
}

//course.courseinstructor

const {courseinstructor: instructor} = course 

//console.group(courseinstructor);
console.log(instructor);


//JSON or APIs
// {
//    name: "Samay",
//    coursename: "JS in hindi",
//    price: "999"
// }

// [
//     {},
//     {}
// ]