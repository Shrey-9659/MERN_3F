let heading = document.getElementById("heading");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let timeout;
start.addEventListener("click", () => {
    timeout = setTimeout(() => {
        heading.innerHTML = "Vignan University";
      }, 2000);
});

stop.addEventListener("click", ()=>{
    clearTimeout(timeout)
})


