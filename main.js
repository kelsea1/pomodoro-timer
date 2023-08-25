const minusButton = document.getElementById('minus', 'minus1');
const plusButton = document.getElementById('plus', 'plus1');
const inputField = document.getElementById('input', 'input1');

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

var el = document.getElementById('time-display')
setInterval(function() {

    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        ampm = hours > 11 ? 'PM' : 'AM';

        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours
    el.innerHTML = hours + ":" + minutes + " " + ampm;
}, 1000);