
let stopwatchEl = document.getElementById('stopwatch');
let laps = document.getElementById('lap');

let ms = 0;
let s = 0;
let m = 0;
let timer = 0;


function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run(){
    stopwatchEl.textContent = (m < 10 ? '0' + m : m)+ ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    while(s<0){
        s='0'+s;
    }

    if(s == 60){
        s = 0;
        m++;
    }
}

function reset(){
    ms = 0;
    s = 0;
    m = 0;
    start();
}

function resetLap(){
    let ul = document.getElementById("alllaps");
    ul.innerHTML = "";
}

function lap(){
    let li = document.createElement('li');
    let lapse = stopwatchEl.textContent;
    li.innerText = lapse;
    alllaps.appendChild(li);
}

function pause(){
    clearInterval(timer);
    timer = false;
}