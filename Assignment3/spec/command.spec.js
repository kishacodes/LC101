const assert = require("assert");
const Command = require("../command.js");

describe("Command class", function () {
  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    assert.throws(
      function () {
        new Command();
      },
      {
        message: "Command type required.",
      }
    );
  });

  //Test2 Command constructor returns correct type
  it("constructor sets command type", function () {
    let rover = new Command("machine");
    assert.strictEqual(rover.commandType, "machine");
  });
  //Test3 constructor sets a value passed in as 2nd argument
  it("constructor sets command type", function () {
    let rover = new Command("machine", 150);
    assert.strictEqual(rover.value, 150);
  });
});
