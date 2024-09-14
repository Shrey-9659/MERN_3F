// https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(rawData){
//     return rawData.json()
// })
// .then((data)=>{
//     console.log(data)
// })
let text = document.getElementById("text");
let startButton = document.getElementById("start")

startButton.addEventListener("click",function(){
    fetch("https://meowfacts.herokuapp.com/").then((rawData)=>{
        return rawData.json()
    }).then((res)=>{
        text.innerHTML = res["data"]
    })
})
