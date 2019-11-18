const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");

describe("Port", () => {
  it("Port object can be created", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("takes a name property", () => {
    const port = new Port("Portsmouth");

    expect(port.name).toBe("Portsmouth");
  });

  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
