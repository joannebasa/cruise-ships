const Port = require("../src/Port.js");

class Ship {
  constructor(vesselName, passengers, port, previousPort) {
    this.vesselName = vesselName;
    this.passengers = passengers;
    this.currentPort = port;
    this.previousPort = null;
  }

  board() {
    this.passengers += 1;
  }

  setSail() {
    this.startingPort = false;
  }

  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;

/*To do:
     - USER STORY: "As a cruise ship captain,
    So I can get passengers aboard a ship,
    I want a ship to have a starting port."
    
    - make an Itinerary object + test file to check a new Itinerary object can be instantiated - done
    - refactor Ship to have previousPort property set to null - done
    - setSail() method sets a previousPort property to the current port
    - refactor Ship test suite so a Ship takes an Itinerary object instead of a Port object
    (the Itinerary object will have 2 Port objects stored in an array on its ports property)
    -  Refactor the it can dock at a different port test so that no argument is passed to ship.dock, 
    and asserts the currentPort to be the next port in the Itinerary instance. 
    The tests will break; make it pass
    */
