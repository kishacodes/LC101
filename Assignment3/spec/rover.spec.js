//Jasmine tested 7-14 for Assignment 3

const assert = require("assert");
const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

describe("Rover class", function () {
  //Test 7.
  it("constructor sets position and default values for mode and generatorWatts", function () {
    let position = 98382;
    let rover = new Rover(position);

    assert.strictEqual(rover.position, position);
    assert.strictEqual(rover.generatorWatts, 110);
    assert.strictEqual(rover.mode, "NORMAL");
  });

  //Test 8
  it("response returned by receiveMessage contains name of message", function () {
    let rover = new Rover(98382);

    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let response = rover.receiveMessage(message);

    assert.strictEqual(response.message, message.name);
  });

  // Test 9
  it("response returned by receiveMessage includes the results if two commands are sent in the message", function () {
    let rover = new Rover(98382);
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let response = rover.receiveMessage(message);

    assert.strictEqual(response.results.length, commands.length);
  });

  //Test 10
  it("responds correctly to STATUS_CHECK command", function () {
    let rover = new Rover(98382);
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("Test STATUS_CHECK command", commands);
    let response = rover.receiveMessage(message);
    let roverStatusObject = response.results[0]["roverStatus"];

    assert.strictEqual(roverStatusObject.mode, rover.mode);
  });

  //Test 11
  it("responds correctly to mode change command", function () {
    let rover = new Rover(98382);
    rover.mode = "NORMAL";

    let modeChangeNewValue = "LOW_POWER";
    let commands = [new Command("MODE_CHANGE", modeChangeNewValue)];
    let message = new Message("Test MODE_CHANGE command", commands);

    let response = rover.receiveMessage(message);

    assert.strictEqual(modeChangeNewValue, rover.mode);
    assert.strictEqual(response["results"][0]["completed"], true);
  });

  //Test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function () {
    let rover = new Rover(98382);
    rover.mode = "LOW_POWER";
    let commands = [new Command("MOVE, 12000")];
    let message = new Message(
      "Test NO MOVEMENT when MODE Is LOW_POWER",
      commands
    );

    let roverInitialPosition = rover.position;
    let response = rover.receiveMessage(message);
    let roverPositionAfterMessage = rover.position;

    assert.strictEqual(response["results"][0]["completed"], false);
    assert.strictEqual(roverPositionAfterMessage, roverInitialPosition);
  });

  //Test 13
  it("responds with position for move command", function () {
    let rover = new Rover(98382);
    rover.mode = "NORMAL";
    let roverInitialPosition = rover.position;
    let wantedPosition = roverInitialPosition + 1000;

    let commands = [new Command("MOVE", wantedPosition)];
    let message = new Message("Test MOVEMENT when MODE is NORMAL", commands);
    rover.receiveMessage(message);

    let roverPositionAfterMessage = rover.position;
    assert.strictEqual(roverPositionAfterMessage, wantedPosition);
  });

  //Test 14
  it("completed false and a message for an unknown command", function () {
    let rover = new Rover(98382);

    let commands = [new Command("UNKNOWN_COMMAND")];
    let message = new Message("Test invalid command", commands);
    let response = rover.receiveMessage(message);

    assert.deepEqual(response["results"][0], {
      completed: false,
      message: "UNKNOWN COMMAND",
    });
  });
});
