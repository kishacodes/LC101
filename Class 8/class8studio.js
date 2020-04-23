// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your selectRandomEntry function here to take an array as a parameter:
let randomIDs = [];
let idNumbers = [291, 414, 503, 599, 796, 890];
function selectRandomEntry(arrayOfIDs) {
  let index = Math.floor(Math.random() * arrayOfIDs.length);
  return arrayOfIDs[index];
}

// Code your buildCrewArray function here:
let crew = [];
function buildCrewArray(arrayOfIDs, theAnimals) {
  let numOfCrew = 0;
  let crewIDs = [];
  while (numOfCrew < 3) {
    let nextID = selectRandomEntry(arrayOfIDs);
    if (!crewIDs.includes(nextID)) {
      numOfCrew++;
      crewIDs.push(nextID);
    }
  }
  while (crew.length < 3) {
    for (let i = 0; i < theAnimals.length; i++) {
      if (crewIDs.includes(theAnimals[i].astronautID)) {
        crew.push(theAnimals[i].name);
      }
    }
  }
  return crew;
}
// console.log("RandomIDs: " + randomIDs);
console.log(buildCrewArray(randomIDs, animals));
console.log(`${crew[0]}, ${crew[1]}, ${crew[2]}, are going to space!`);

// //console.log(animals);

// // Code your template literal and console.log statements:
// let crew = [];
// function buildCrewArray(arr1,arr2) {
//   for (let i = 0; i <arr1.length; i++){
//     if(arr2.includes(arr1[i].astronautID)) {
//       crew.push(arr1[i]);
//     }
// }
// return crew;
// }
// console.log(randomIDs);
// buildCrewArray(animals,randomIDs);

// //console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);
