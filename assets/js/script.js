var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var music = document.getElementById('music')
var input = document.getElementById('input')
var inputButton = document.getElementById('inputButton')
var boxes = document.querySelectorAll('.box')

music.pause();


var message = input.value
var words = message.split(' ');

function check(){
  message = input.value
  words = message.split(' ')
}

function gogo(){
  boxes.forEach((box) =>{
    box.classList.remove("paused")
  })}

inputButton.addEventListener('click', () =>{
  check()
  music.play()
  music.volume = 0.05
  gogo()
  countdown()
})

function countdown() {
  var timeLeft = 5;
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--
    timerEl.innerText = timeLeft
    if (timeLeft === 0){
      clearInterval(timeInterval)
      timerEl.innerText = ''
      displayMessage()
    }
  }, 340);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;
  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
      mainEl.textContent = ''
      music.pause();
      music.currentTime = 0
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 170);
}

