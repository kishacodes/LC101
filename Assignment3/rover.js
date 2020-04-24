class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    //returns an object of 2 properties message & results
    //Message object: array of results that is the message.commands
    let response = {
      message: message.name,
      results: this.buildResults(message.commands),
    };
    return response;
  }
  buildResults(commands, results = []) {
    for (const command of commands) {
      let result = { completed: true };
      if (command["commandType"] === "MOVE") {
        if (!(this.mode === "LOW_POWER")) {
          this.position = command["value"];
        } else {
          result = { completed: false };
        }
      } else if (command["commandType"] === "STATUS CHECK") {
        result.roverStatus = {
          mode: this.mode,
          generatorWatts: this.generatorWatts,
          position: this.position,
        };
      } else if (command["commandType"] === "MODE_CHANGE") {
        this.mode = command["value"];
      } else {
        result = { completed: false, message: "UNKNOWN COMMAND" };
      }
      results.push(result);
    }
    return results;
  }
}

module.exports = Rover;
