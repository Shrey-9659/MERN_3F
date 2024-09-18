let searchArea = document.getElementById("search")
let searchButton = document.getElementById("start")
let temp_c = document.getElementById("temp_c")
let temp_f = document.getElementById("temp_f")
let condition = document.getElementById("condition")
 
searchButton.addEventListener("click", function(){
    let url = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${searchArea.value}`
    // console.log(searchArea.value)
    // console.log(url)
    fetch(url)
    .then((rawData)=>{
        return rawData.json();
    })
    .then((response)=>{
        // console.log("Loading data...")
        // console.log(response)
        
        temp_c.innerHTML = Math.round(response["current"]["temp_c"])    
        // console.log(response["current"]["temp_c"])

        temp_f.innerHTML = Math.round(response["current"]["temp_f"])
        // console.log(response["current"]["temp_f"])

        condition.innerHTML = response["current"]["condition"]["text"]
        // console.log(response["current"]["condition"]["text"])
    })
})