// Code your selectRandomEntry function here to take an array as a paremeter:
function selectRandomEntry(arr) {
  //use math.random to pick one of the idNumbers and return it. 
  let selectID;
  for (let i = 0; i < 2; i++) {
  selectID = Math.random() * idNumbers.length;
  arr[selectID];
   }
   return arr[selectID];
  }

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];
let randomIDs = [];
selectRandomEntry(idNumbers);
while(randomIDs.length < 3) {
  randomIDs.push(selectRandomEntry(idNumbers), selectRandomEntry(idNumbers), selectRandomEntry(idNumbers));
}
console.log(randomIDs);

//console.log(`${newArray[0]}, ${newArray[1]}, ${newArray[2]}, are going to space!`);


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
//console.log(animals);

// Code your template literal and console.log statements:
let crew = [];
function buildCrewArray(arr1,arr2) {
  for (let i = 0; i <arr1.length; i++){
    if(arr2.includes(arr1[i].astronautID)) {
      crew.push(arr1[i]);
    } 
} 
return crew;
}

buildCrewArray(animals,randomIDs);
 
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`); 

