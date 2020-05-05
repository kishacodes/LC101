const assert = require("assert");
const Message = require("../message.js");

describe("Message class", function () {
  //Test 4.
  it("throws error if name is NOT passed into constructor as the first parameter", function () {
    assert.throws(
      function () {
        new Message();
      },
      {
        message: "Message type required.",
      }
    );
  });
  //Test 5. Constructor sets name
  it("constructor sets name", function () {
    let central = new Message("fuelLevel");
    assert.strictEqual(central.name, "fuelLevel");
  });

  //Test 6. Commands array as 2nd argument
  it("contains a commands array passed into the constructor as 2nd argument", function () {
    let command1 = new Message("MODE_CHANGE", "LOW_POWER");
    let command2 = new Message("MOVE", 12000);
    let commands = [command1, command2];
    let central = new Message("Test message with two commands", commands);
    assert.strictEqual(central.commands, commands);
  });
});
