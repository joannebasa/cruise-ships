class Ship {
  constructor(vesselName, startingPort, passengers) {
    this.vesselName = vesselName;
    this.startingPort = startingPort;
    this.passengers = passengers;
  };

  board() {
    this.passengers +=1;
  };

  setSail() {
    this.startingPort = false;
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