const milliseconds = document.querySelector('.ms');
const seconds = document.querySelector('.sec');
const minutes = document.querySelector('.min');
const hour = document.querySelector('.hr');

const events = document.querySelector('.event');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let Interval;

// Setting all timer to their deafualt
let mls = '0:0';
let secs = '0:0';
let mins = '0:0';
let hrs = '0:0';

let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

start.addEventListener('click',() => {
     Interval = setInterval(timingFunction,10);
     events.innerText = 'Stop Watch Started Runing';
});

stop.addEventListener('click',() => {
     clearInterval(Interval);
     events.innerText = 'Stop Watch Stoped Runing'
});

reset.addEventListener('click',() => {
     // Stoping the timer fro running
     clearInterval(Interval);
      
     // Setting the timer back to it default
     milliseconds.innerText = mls;
     seconds.innerText = secs;
     minutes.innerText = mins;
     hour.innerText = hrs;

     // Setting the timer to zero instead it sontinue to incrementing. 
     ms = 0;
     sec = 0;
     min = 0;
     hr = 0;
     events.innerText = 'Click Start';
});
function timingFunction(){
     ms++;
     if(ms < 9){
          milliseconds.innerText = `0: ${ms}`;
     }if(ms >= 9){
          milliseconds.innerText = `${ms}`;
     }if(ms >= 99){
          sec++;
          seconds.innerText = `0: ${sec}`;
          ms = 0;
     }if(sec < 9){
          seconds.innerText = `0: ${sec}`;
     }if(sec >= 9){
          seconds.innerText = `${sec}`;
     }if(sec >= 59){
          min++;
          minutes.innerText = `0: ${min}`;
          sec = 0;
     }if(min < 9){
          minutes.innerText = `0: ${min}`;
     }if(min >= 9){
          minutes.innerText = `${min}`;
     }if(min >= 59){
          hr++;
          hour.innerText = hr;
          min = 0;
     }
}