var timer = 60;
var score = 0;
var hitrun = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrun = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrun;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 133; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;

      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>GameOver</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickednum = Number(details.target.textContent);

  if (clickednum === hitrun) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();
