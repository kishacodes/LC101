//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    //adds value of newScore to this.scores array by push
    let results = this.scores.push(newScore);
    return results;
  }
  average() {
    //add up the scores array entries and divide by the number of scores
    //then round to 1 decimal place and return the result.
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum = sum + this.scores[i];
    }
    let results = Math.floor((sum / this.scores.length) * 100) / 100;
    return results;
  }
  status() {
    //returns string of either accepted, reserve, probationary, rejected based on candidate's average, which can be called as a parameter or from inside the function
    let averageResults = this.average();
    if (averageResults >= 90) {
      return "Accepted";
    } else if (averageResults < 90 && averageResults >= 80) {
      return "Reserve";
    } else if (averageResults < 80 && averageResults >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 15, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

let animals = [bubba, merry, glad];
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

function printStatusReport(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `${arr[i].name} earned an average test score of ${arr[
        i
      ].average()}% and has a status of ${arr[i].status()}.`
    );
  }
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let isReserve = 0;
let count = 0;
while (glad.status() != "Accepted") {
  if (glad.status() == "Reserve") {
    isReserve = isReserve + 1;
  }
  if (glad.status() == "Reserve" && isReserve === 1) {
    console.log(
      `Glad Gator needed ${count} extra tries to get to Reserve status.`
    );
  }
  glad.addScore(100);
  glad.average();
  glad.status();
  count = count + 1;
}
console.log(
  `Glad Gator needed ${count} extra tries to get to Accepted status.`
);
