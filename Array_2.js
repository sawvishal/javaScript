const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["supermsn", "flssh","batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[1]);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const another_array =[1,2,3, [4,5,6],7,[6,7,[4,5]]] 

//const real_another_array = another_array.flat(Infinity)
//const real_another_array = another_array.flat(2)
const real_another_array = another_array.flat(1)

console.log(real_another_array);
 
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Vishal"));

console.log(Array.from({name: "Vishal"}));// this will not work and return []
                                        //Interesting may asked in Interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

 