const breakminusButton = document.getElementById('breakminus');
const breakplusButton = document.getElementById('breakplus');
const breakinputField = document.getElementById('breakinput');

breakminusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(breakinputField.value) || 0;
  breakinputField.value = currentValue - 1;
});

breakplusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(breakinputField.value) || 0;
  breakinputField.value = currentValue + 1;
});


const sessionminusButton = document.getElementById('sessionminus');
const sessionplusButton = document.getElementById('sessionplus');
const sessioninputField = document.getElementById('sessioninput');

sessionminusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(sessioninputField.value) || 0;
  sessioninputField.value = currentValue - 1;
});

sessionplusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(sessioninputField.value) || 0;
  sessioninputField.value = currentValue + 1;
});


const btnStartElement = document.querySelector('[data-action="start"]');
const btnStopElement = document.querySelector('[data-action="stop"]');
const btnResetElement = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.workMinutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let interval;

workMinutes = workDuration - 1           //25 = 24:59
breakMinutes = breakDuration - 1        //5 = 4:59 
breakCount = 0
let RemainingTime = () =>{
    seconds = seconds - 1
    if(seconds === 0){
        workMinutes = workMinutes - 1
        if(workMinutes === -1){
            if(breakCount % 2 === 0){
               workMinutes = breakMinutes;
               breakCount++
            }else{
               workMinutes = workDuration - 1
               breakCount++
            }
          }
        seconds = 60
      }
}
let timer = setInterval(RemainingTime , 1000)

// const start = () => {
//   interval = setInterval(incrementTimer, 1000)
// }

// const stop = () => {
//   clearInterval(interval);
// }

// const reset = () => {
//   minutes.innerText = '00';
//   seconds.innerText = '00';
// }

// const pad = (number) => {
//   return (number < 10) ? '0' + number : number;
// }

// const incrementTimer = () => {
//   timerTime++;

//   const numberMinutes = Math.floor(timerTime / 60);
//   const numberSeconds = timerTime % 60;

//   minutes.innerText = pad(numberMinutes);
//   seconds.innerText = pad(numberSeconds);
// }

// btnStartElement.addEventListener('click', () => { start() });

// btnStopElement.addEventListener('click', stopTimer = () => {
//   stop();
// });

// btnResetElement.addEventListener('click', stopTimer = () => {
//   reset();
// });