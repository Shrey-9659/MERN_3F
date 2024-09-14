// let firstPromise = new Promise(function(resolve, reject) {
//     let error = true;
//     if(error == false){
//         console.log("I do not have any error")
//         return resolve()
//     }else{
//         console.log("I do have an error")
//         return reject()
//     }
// });

// firstPromise
// .then(function(){
//     console.log("I am an example of resolved promise")
// })
// .catch(function(){
//     console.log("I am an example of rejected promise")
// })



// new Promise(function(resolve, reject) {
//     let error = false;
//     if(error == true){
//         console.log("I do not have any error")
//         return resolve()
//     }else{
//         console.log("I do have an error")
//         return reject()
//     }
// }).then(()=>{
//     console.log("Resoved")
// }).catch(()=>{
//     console.log("Rejected")
// }).finally(()=>{
//     console.log("I will always run, no matter if promise is resolved  or rejected")
// })

// let thirdPromise = new Promise(function(resolve, reject) {
//     let error = false;
//     if(error == false){
//         console.log("No error found")
//         return resolve({name : "Shrey Khandelwal", age : 25})
//     }else{
//         console.log("Error found")
//         return reject(err)
//     }
// })

// thirdPromise.then((res)=>{
//     console.log(res.name)
// }).catch((error)=>{
//     console.log(error)
// })

// -> I will be going to university
// -> I will open my laptop
// -> I will complete my assignment
// -> I will be marked accordingly

// let promiseOne = new Promise((resolve, reject)=>{
//     console.log("I will be going to university")
//     return resolve();
// })
// let promiseTwo = promiseOne.then((res)=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I will open my laptop")
//         return resolve();
//     })
// })

// let promiseThree = promiseTwo.then(()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I will complete my assignment")
//         return resolve();
//     })
// })

// promiseThree.then(()=>{
//     console.log("Task completed")
// })