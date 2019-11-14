const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  it("Itinerary object can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});
