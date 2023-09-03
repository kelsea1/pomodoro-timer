const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});


const minusButton1 = document.getElementById('minus1');
const plusButton1 = document.getElementById('plus1');
const inputField1 = document.getElementById('input1');

minusButton1.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField1.value) || 0;
  inputField1.value = currentValue - 1;
});

plusButton1.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField1.value) || 0;
  inputField1.value = currentValue + 1;
});






const btnStartElement = document.querySelector('[data-action="start"]');
const btnStopElement = document.querySelector('[data-action="stop"]');
const btnResetElement = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let interval;


const start = () => {
  isRunning = true;
  interval = setInterval(incrementTimer, 1000)
}

const stop = () => {
  isRunning = false;
  clearInterval(interval);
}

const reset = () => {
  minutes.innerText = '00';
  seconds.innerText = '00';
}

const pad = (number) => {
  return (number < 10) ? '0' + number : number;
}

const incrementTimer = () => {
  timerTime++;
  
  const numberMinutes = Math.floor(timerTime / 60);
  const numberSeconds = timerTime % 60;
  
  minutes.innerText = pad(numberMinutes);
  seconds.innerText = pad(numberSeconds);
}

btnStartElement.addEventListener('click', startTimer = () => {
  start();
});

btnStopElement.addEventListener('click', stopTimer = () => {
  stop();
});

btnResetElement.addEventListener('click', stopTimer = () => {
  reset();
});




// var el = document.getElementById('time-display')
// setInterval(function() {

//     var currentTime = new Date(),
//         hours = currentTime.getHours(),
//         minutes = currentTime.getMinutes(),
//         seconds = currentTime.getSeconds(),
//         ampm = hours > 11 ? 'PM' : 'AM';

//         if (minutes < 10) minutes = '0' + minutes;
//         if (hours < 10) hours = '0' + hours
//     el.innerHTML = hours + ":" + minutes + " " + ampm;
// }, 1000);




// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

// let myVar = setInterval(myTimer, 1000);

// function stopTimer()
// {
//   if (myVar !== -1) {
//     clearInterval(myVar);
//     myVar = -1; 
//   }
// }

// function startTimer()
// {
//   if (myVar === -1) {
//     myVar = setInterval(myTimer, 1000);
//   }
// }