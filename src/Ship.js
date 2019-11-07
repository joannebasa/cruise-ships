class Ship {
  constructor(name, startingPort, passengers, destination) {
    this.name = name;
    this.startingPort = startingPort;
    this.passengers = passengers;
    this.destination = destination;
  }

  board() {
    this.passengers +=1;
  };

  dock() {
    this.destination = "Liverpool";
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
    
    - create another method for Ship -> ?dock
    */