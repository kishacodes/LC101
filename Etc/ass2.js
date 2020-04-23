//Here I am importing a readline.
const input = require("readline-sync");

// Here is the oldScoreKey object:
const oldScoreKey = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

// Code your transform function here:
function transform(oldScoreKey) {
  let newPointStructure = {};
  // let length = oldScoreKey[key].length();
  for (var key in oldScoreKey) {
    for (let i = 0; i < oldScoreKey[key].length; i++) {
      newPointStructure[oldScoreKey[key][i].toLowerCase()] = Number(key);
    }
  }
  return newPointStructure;
}

// Code your initialPrompt function here:
let initialArray = [
  "Welcome to the Scrabble score calculator!",
  "Which scoring algorithm would you like to use?",
  "0 - Scrabble: The traditional scoring algorithm",
  "1 - Simple Score: Each letter is worth 1 point.",
  "2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.",
];
let acceptableInputs = ["0", "1", "2"];

function scrabbleScore(word, newPoints) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    let val = word[i];
    let thisVal = newPoints[val];
    score = score + thisVal;
  }
  return score;
}
function simpleScore(word) {
  for (let char in word) {
    let numOfChar = 1;
    let score = 0;
    score = score + numOfChar * word.trim().length;
    return score;
  }
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
function scrabbleScore(word, newPoints) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    let val = word[i];
    let thisVal = newPoints[val];
    score = score + thisVal;
  }
  return score;
}
function simpleScore(word) {
  for (let char in word) {
    let numOfChar = 1;
    let score = 0;
    score = score + numOfChar * word.trim().length;
    return score;
  }
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
// Create your scoringAlgorithms array here:
var Scrabble = {
  name: "Scrabble",
  description: "The traditional scoring algorithm",
  scoreFunction: scrabbleScore,
};

let Simple = {
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scoreFunction: simpleScore,
};

let Bonus = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: bonusVowels,
};
let scoringAlgorithms = [Scrabble, Simple, Bonus];
// Code your runProgram function here:
function runProgram(scoringArray) {
  for (let i = 0; i < initialArray.length; i++) {
    console.log(initialArray[i]);
  }
  console.log("");
  let num = input.question(`Enter 0, 1, or 2.: `);
  console.log("algorithm name: " + scoringArray[num].name);
  console.log("");
  while (acceptableInputs.includes(num)) {
    let word = input.question(
      "Please enter a word to score: (STOP ends the game!) "
    );
    if (word.toLowerCase() === "stop") {
      return console.log("Game Over");
    }
    console.log(
      "scoreFunction result: " +
        scoringArray[num].scoreFunction(word, newPoints)
    );
    console.log("");
  }
}
// Call the runProgram function here:
let newPoints = transform(oldScoreKey);
runProgram(scoringAlgorithms);
