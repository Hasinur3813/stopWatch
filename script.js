"use strict";
let hourDisplay = document.getElementById('hour');
let minDisplay = document.getElementById('min');
let secDisplay = document.getElementById('sec');
let msecDisplay = document.getElementById('msec');

// all buttons
let start = document.getElementById('startBtn');
let stop = document.getElementById('stopBtn');
let reset = document.getElementById('resetBtn');

let hour = 0, min = 0, sec = 0, msec = 0;
let timerID;

start.addEventListener('click', ()=>{
   timerID = setInterval(timer,10);
});


function timer(){
    msec++;
    msecDisplay.innerHTML = msec < 10 ? '0' + msec : msec;
    if(msec == 65){
        sec++;
        msec = 0;
        secDisplay.innerHTML = sec < 10 ? '0' + sec : sec;
    }
    if(sec == 60){
        min++;
        sec = 0;
        minDisplay.innerHTML = min < 10 ? '0' + min : min;
    }

    if(min == 60){
        hour++;
        min = 0;
        hourDisplay.innerHTML = hour < 10 ? '0' + hour : hour;
    }
    if(hour == 100){
        hour = 0, min = 0, sec = 0, msec = 0;
    }
};

stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);


function stopTimer(){
    clearInterval(timerID);
};

function resetTimer(){
        clearInterval(timerID);
        hour = 0, min = 0, sec = 0, msec = 0;
        let allTime = document.querySelectorAll('.timerDisplay span');
        for(let i = 0; i < allTime.length; i++){
            allTime[i].innerHTML = "00";
        }
}

