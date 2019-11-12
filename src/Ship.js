const Port = require("../src/Port.js");

class Ship {
  constructor(vesselName, passengers, port) {
    this.vesselName = vesselName;
    this.passengers = passengers;
    this.currentPort = port;
  };

  board() {
    this.passengers +=1;
  };

  setSail() {
    this.startingPort = false;
  };

  dock(port) {
    this.currentPort = port;
  };

};


module.exports = Ship;
    
    /*To do:
     - USER STORY: "As a cruise ship captain,
    So I can get passengers aboard a ship,
    I want a ship to have a starting port."
    
    - create another method for Ship -> ?dock - done
    - new Port object - takes a name for now
    - fix Ship to take port as string??
    */