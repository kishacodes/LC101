let button = null;
let paragraph = null;
let missionAbort = null;

function init() {
  missionAbort = document.getElementById("abortMission");
  missionAbort.addEventListener("mouseover", function (event) {
    document.getElementById(
      "abortMission"
    ).onmouseover = missionAbort.style.background = "red";
  });
  missionAbort.addEventListener("click", function (event) {
    document.getElementById("abortMission") = confirm(
      "Are you sure you want to abort the mission?"
    );
  });

  button = document.getElementById("liftoff");
  button.addEventListener("click", function (event) {
    document.getElementById("main-text").innerHTML =
      " Houston, we have lift off!";
  });
  paragraph = document.querySelector("p");
}

window.onload = init;
