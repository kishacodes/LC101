// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];


function orbitCircumference(radius) {
  circum = 2 * Math.PI * radius;
  return circum;
}

function missionDuration(numOrbits,radius,speed) {
  time = (((numOrbits * orbitCircumference(radius)) / speed) *100 );
  timeInHours = Math.round(time) / 100;
  return timeInHours;
}
console.log(missionDuration(1,orbitCircumference(2000),28000));

let missionObj = {
  "circumference": circum,
  "duration": timeInHours,
};

console.log(`The mission will travel ${missionObj.circumference} km around the planet, and it will take ${missionObj.duration} hours to complete.`);

//Part 3 
function randomEntry(arr) {
  //use math.random to pick one of the idNumbers and return it. 
  let selectID = Math.floor(Math.random()*arr.length);
  return arr[selectID];
  }

function oxygenExpended(object) {
  //1st - use selectRandomEntry to pick 1 from crew to use when calling object CHECK
  //2nd - 3 orbits, so use missionDuration to calculate how many hrs mission will take CHECK
  //3rd - cacluate using the function how much oxygen will be used. round to 3 decimals. CHECK
  //4th return the string literal CHECK
  hours = missionDuration(3,2000,28000);
  //oxy = Math.round((object.o2used * hours)) * 1000;
 finalString = console.log(`${object} will perform the spacewalk, which will last ${hours} hours and require __ kg of oxygen.`); 
 return finalString;
  
}

missionObj["candidate"] = randomEntry(crew);
missionObj["hours"] = missionDuration(3,2000,28000);
console.log(oxygenExpended(missionObj.name));

//missionObj["oxygenExpended"] = oxygenExpended(candidate);


