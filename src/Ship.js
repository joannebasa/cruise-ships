class Ship {
  constructor(name, startingPort, passengers) {
    this.name = name;
    this.startingPort = startingPort;
    this.passengers = passengers;
  }

  board(){
  this.passengers +=1;
  };
};

  
    
module.exports = Ship;
    
    /*To do:
     - USER STORY: "As a cruise ship captain,
    So I can get passengers aboard a ship,
    I want a ship to have a starting port."
    
    - ? object Ship - done
    - Ship should have 'starting port' key-value pair - done?
    - ?board method
    */