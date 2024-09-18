let searchArea = document.getElementById("search");
let searchButton = document.getElementById("start");
let temp_c = document.getElementById("temp_c");
let temp_f = document.getElementById("temp_f");
let condition = document.getElementById("condition");

searchButton.addEventListener("click", function () {
  let url = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${searchArea.value}`;
  fetch(url)
    .then((rawData) => {
      return rawData.json();
    })
    .then((response) => {
      temp_c.innerHTML = Math.round(response["current"]["temp_c"]);
      temp_f.innerHTML = Math.round(response["current"]["temp_f"]);
      condition.innerHTML = response["current"]["condition"]["text"];
    });
});





searchButton.addEventListener("click", async function () {
  let url = `http://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${searchArea.value}`;
  let rawData = await fetch(url)
    let response = await rawData.json();
      temp_c.innerHTML = Math.round(response["current"]["temp_c"]);
      temp_f.innerHTML = Math.round(response["current"]["temp_f"]);
      condition.innerHTML = response["current"]["condition"]["text"];
});
