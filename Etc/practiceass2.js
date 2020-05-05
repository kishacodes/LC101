
// Code your transform function here:
function transform(oldScoreKey) {
  let newPointStructure = {};
  let newKey;
  for (var key in oldScoreKey) {
    for (let i = 0; i < oldScoreKey[key].length; i++) {
      newKey = oldScoreKey[key][i].toLowerCase();
      newPointStructure[newKey] = Number(key);  
}
}
return newPointStructure;
}
// Code your initialPrompt function here:
let acceptableInputs = [0,1,2];
console.log('Welcome to the Scrabble score calculator!');
console.log('Which scoring algorithm would you like to use?');
console.log('0 - Scrabble: The traditional scoring algorithm.');
console.log('1 - Simple Score: Each letter is worth 1 point.\n');
console.log('2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.\n\n');

const input = require('readline-sync');
let num = input.question(`Enter 0, 1, or 2.: `);
function initialPrompt() {
  if (acceptableInputs.includes(Number(num)) === 'false') {
    num = input.question(`Enter 0, 1, or 2 (STOP ends the program): `);
  } else {
    runProgram(scoringAlgorithms);
    return Number(num);
  }  
}

// Code your runProgram function here:
function runProgram(scoringAlgorithms) {
  while (true) {
  if(Number(num) === 0) {
    console.log("algorithm name: ", scoringAlgorithms[0].name);
    let word = input.question("Please enter a word to score: (entering STOP ends the game) ");
    console.log("");
    return console.log("scoreFunction result: ", scoringAlgorithms[0].scoreFunction(word, newPoints));
  }
  if(Number(num) === 1) {
    console.log("algorithm name: ", scoringAlgorithms[1].name);
    let word = input.question("Please enter a word to score:(entering STOP ends the game) ");
    word.toLowerCase();
    console.log("");
    return console.log("scoreFunction result: ", scoringAlgorithms[1].scoreFunction(word));
  }
  if(Number(num) === 2) {
    console.log("algorithm name: ", scoringAlgorithms[2].name);
    let word = input.question("Please enter a word to score: (entering STOP ends the game) ");
    word.toLowerCase();
    console.log("");
    return console.log("scoreFunction result: ", scoringAlgorithms[2].scoreFunction(word));
  }
}
  }


// Here is the oldScoreKey object:
const oldScoreKey = {
 1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
 2: ['D', 'G'],
 3: ['B', 'C', 'M', 'P'],
 4: ['F', 'H', 'V', 'W', 'Y'],
 5: ['K'],
 8: ['J', 'X'],
 10: ['Q', 'Z']
};

// Use the transform function to create the newScoreKey object here:
function scrabbleScore(word, newPoints) {
let score = 0;
transform(newPoints);
for (let i = 0; i < word.length; i++) {
  let val = word[i];
  let thisVal = newPoints[val];
  score = score + thisVal;
} 
return score;
}
function simpleScore(word) {
for(var char in word) {
  char = 1;
  score = char * word.length; 
}
return score;
}

//bonusVowels is all vowels 3 pts, other letters 1 pt
function bonusVowels(word) {
let vowels = ["a", "e", "i", "o", "u"];
let score = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    score = score + 3;
  }
  if (!vowels.includes(word[i])) {
    score = score + 1;
}
}
return score;
}

let newPoints = transform(oldScoreKey);

// Create your scoringAlgorithms array here:
let Scrabble = {
  name: "Scrabble",
  description: "The traditional scoring algorithm",
  scoreFunction: scrabbleScore 
};

let Simple = {
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoreFunction: simpleScore
};

let Bonus = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: bonusVowels
};
let scoringAlgorithms = [Scrabble, Simple, Bonus];

// Call the runProgram function here:
// let num = input.question("Enter 0, 1, or 2: ");


runProgram(scoringAlgorithms);
console.log("");
let word = input.question("Please enter a word to score:(entering STOP ends the game) ");
console.log("");
runProgram(scoringAlgorithms);
console.log("");


  


