// for
// for(let i = 1; i< 10; i++){
//     console.log(i)
// }

// while
// let i = 0;
// while (i==1) {
//     console.log(i)
// }

// do...while
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i<10);

// for...in --> Object
// let obj = {name : "Shrey", age : 25}
// console.log(obj[key])
// for(key in obj){
//     console.log(obj.key)
// }

// for...of --> Arrays
// let arr = [1,2,3,4,5,6,7,8,9,10,11]
// for(key of arr){
    //     console.log(key)
    // }
    // Methods --> 
    
// let arr = [1,2,3,4,5,6,7,8,9,10,11]
// forEach
// let modifiedArray = arr.forEach(function(i){
//     console.log(i)
// }).forEach(function(i){
//     console.log(i)
// })
// console.log(modifiedArray)

// map
// let modifiedArray = arr.map((i)=>{
//     return i+5;
// }).map(function(j){
//     return j*10;
// })
// console.log(modifiedArray)

// filter
// let filteredArray = arr.map((i)=>{
//     return i*10; 
// }).filter(function(i){
//     return i>70
// });
// console.log(filteredArray)

// reduce
// let arr = [1,2,3,4,5]

// let reducedArray = arr.reduce(function(acc, curr){
//     return acc+curr;
// },0)
// console.log(reducedArray)

// Exercise
let arr = [1,2,3,4,5,6,7,8,9,10]
let answer = arr.map((i)=>{
    return i**i
}).filter((j)=>{
    if(j%2 == 0){
        return j;
    }
}).reduce((acc, curr)=>{
    return acc + curr
}, 0)
console.log(answer)