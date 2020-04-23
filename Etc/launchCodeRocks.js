function launchOutput(num) {
  if (!(num % 2 === 0) && !(num % 3 === 0) && !(num % 5 === 0)) {
    return "Rutabagas! That doesn't work.";
  } else if (num === 2) {
    return "Launch!";
  } else if (num === 3) {
    return "Code!";
  } else if (num === 5) {
    return "Rocks!";
  } else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
    return "LaunchCode Rocks!";
  } else if (num % 2 === 0 && num % 5 === 0 && !(num % 3 === 0)) {
    return "LaunchCode Rocks! (CRASH!!!!!)";
  } else if (num % 3 === 0 && num % 5 === 0 && !(num % 2 === 0)) {
    return "Code Rocks";
  } else if (num % 2 === 0 && num % 3 === 0 && !(num % 5 === 0)) {
    return "LaunchCode!";
  }
}

module.exports = launchOutput;
