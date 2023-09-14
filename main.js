var sessionLength = 25; // default session length in minutes
var breakLength = 5; // default break length in minutes

var timeLeft = 0;
var timer;
var running = false;

function startTimer() {
  if (!running) {
    var sessionLengthInput = parseInt(document.getElementById("sessionInput").value);
    var breakLengthInput = parseInt(document.getElementById("breakInput").value);

    if (!isNaN(sessionLengthInput) && sessionLengthInput > 0) {
      sessionLength = sessionLengthInput;
    }

    if (!isNaN(breakLengthInput) && breakLengthInput > 0) {
      breakLength = breakLengthInput;
    }

    timeLeft = sessionLength * 60;

    updateTimer();

    // timer = setInterval(function () {
      timer = setInterval(function toggleTimer() {
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(timer);
        alert("Time's up! Take a break.");
        running = false;
        document.getElementById("startBtn").innerHTML = "Start";
      }
      updateTimer();
    }, 1000);

    running = true;
    document.getElementById("startBtn").innerHTML = "Pause";
  } else {
    clearInterval(timer);
    running = false;
    document.getElementById("startBtn").innerHTML = "Resume";
  }
}


function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  var timerDisplay = document.getElementById("timeLeft");

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  timerDisplay.innerHTML = minutes + ":" + seconds;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  timeLeft = 0;
  sessionLength = 25;
  breakLength = 5;
  document.getElementById("sessionInput").value = "";
  document.getElementById("breakInput").value = "";
  updateTimer();
  document.getElementById("startBtn").innerHTML = "Start";
}

const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click',()=>{
    window.location.href = 'file:///D:/projects/to%20do%20list/list.html';
});