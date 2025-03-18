// for of

//[{}, ]

const arr = [1,2,3,4,5]
for (const num of arr) {

console.log(num)
    
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//Maps

const map = new Map()
map.set('IN', "India"),
map.set('FR ',"France")
map.set('CH', "Chaina")
map.set('USA', "United state of america")

console.log(map);

for (const [key, value] of map) {
        console.log(key, ':', value);
            
}

// const muObject = {
//     'game1' = 'NFS'
//     'game2' = 'Spiderman'
// }

// for (const element of object) {
    
// }
// object is not iterable


