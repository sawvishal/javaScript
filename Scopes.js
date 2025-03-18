// var c = 300
let a = 300      // Global Scope
if (true) {

let a = 10       // local scope
 //console.log("INNER: ", a)
}
 //console.log(a) ;
// console.log(b) ;
// console.log(c) ;


function one() {
    const username = "Hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
  
    }
    //console.log(website);
     
    //two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        //console.log( username +  website);     
    }
    //console.log(website);
}
//console.log(username);



//**********************************************************

function addone(num ){
    return num +1 

}

addone(5)


const addtwo = function (num){
    return num+ 2
}