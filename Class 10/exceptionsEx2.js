/* This exercise tests a function runs even if it doesn't work right. It adds a try command to test a called result that won't work and catches the error to program in the error message.

This exercise also tests a function to make sure the correct input returns the correct result, so both are tested.

*/

function gradeLabs(labs) {
  let result = "";
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];

    try {
      result = lab.runLab(3);
    } catch (err) {
      result = "Error thrown";
      console.log(`${lab.student}'s code worked: ${result}`);
    }
    if (result !== "Error thrown") {
      console.log(`${lab.student}'s code worked: ${result === 27}`);
    }
  }
}

let studentLabs = [
  {
    student: "Carly",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Erica",
    runLab: function (num) {
      return num * num;
    },
  },
];

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

gradeLabs(studentLabs2);
