let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
};

let dog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
};

let insect = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
};

// Create an array to hold the animal objects.
let animals = [];
animals.push([superChimpOne], [salamander], [superChimpTwo], [dog], [insect]);

function addingTo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i]["astronautID"])) {
      arr[i]["astronautID"] = Math.trunc(Math.random() * 10);
      arr[i]["move"] = function () {
        return Math.round(Math.random() * 10);
      };
    }
  }
  return arr;
}

addingTo(animals);

// //Part 2
function crewReports(obj) {
  console.log(
    `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`
  );
}

// //Part 3

let fitnessTest = function (arr) {
  let times = [];
  for (let i = 0; i < arr.length; i++) {
    let moveSteps = 0;
    let turns = 0;
    while (moveSteps < 20) {
      moveSteps = moveSteps + arr[i].move();
      turns = turns + 1;
    }
    let stepResults = console.log(
      `${arr[i].name} took ${turns} turns to take 20 steps.`
    );
    times.push(stepResults);
  }
  return times;
};

console.log(fitnessTest(animals));
