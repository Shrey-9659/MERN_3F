let heading = document.getElementById('heading');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let data = 0;
let timer;
let isMyTimerActive = false;

start.addEventListener("click", ()=>{

    if(isMyTimerActive == true) {
        return ;
    }
    timer = setInterval(()=>{
        heading.innerHTML = `Timer : ${data}`;
        data = data + 1
    },1000)
    isMyTimerActive = true;
})

stop.addEventListener("click", ()=>{
    isMyTimerActive = false;
    clearInterval(timer)
})

reset.addEventListener("click", ()=>{
    isMyTimerActive = false;
    clearInterval(timer)
    heading.innerHTML = `Timer`;
    data = 0;
})