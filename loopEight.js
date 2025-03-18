const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc, currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
//     return acc + currval
// }, 0)

const mytotal = mynums.reduce((acc, curr) => acc + curr, 0)

console.log(mytotal);


const shopingCart = [
{
    itemName : "js course",
    price : 1000
},
{
    itemName : "java course",
    price : 2000
},
{
    itemName : "python course",
    price : 3000
},
{
    itemName : "mobile course",
    price : 4000
},
{
    itemName : "ai course",
    price : 5000
}
]

const pricetopay = shopingCart.reduce( (acc,item) =>acc + item.price  , 0)
console.log(pricetopay);
