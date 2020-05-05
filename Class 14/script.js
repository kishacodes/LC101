/* I didn't need to use the paragraph variable because i made the <p> an id
Part 1: When "Take off" button is clicked, change the test to Houston, we have lift off!
Part 2: When mouseover Abort Mission button, the button's background turns red.
Part 3: When user clocks Abort Mission button, confirmation window appears Are you sure you want to abort.
*/
let button = null;
let paragraph = null;
let missionAbort = null;

function init() {
  missionAbort = document.getElementById("abortMission");
  missionAbort.addEventListener("mouseover", function () {
    missionAbort.style.background = "red";
  });

  missionAbort.addEventListener("click", function () {
    confirm("Are you sure you want to abort the mission?");
  });

  button = document.getElementById("liftoff");
  button.addEventListener("click", function (event) {
    document.getElementById("main-text").innerHTML =
      " Houston, we have lift off!";
  });
  paragraph = document.querySelector("p");
}

window.onload = init;
