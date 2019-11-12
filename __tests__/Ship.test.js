const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

//Objects
describe ('Ship', () => {
  it ('Ship object can be created',() => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

//methods
describe ('board() method to add passengers', () => {
  it ('must add 1 passenger', () => {
    const ship = new Ship ('Titanic', 1);

    ship.board();

    expect (ship.passengers).toEqual(2);
  });
});

describe ('ship can set sail', () => {
  it ('setSail() should turn startingPort to false', () => {
    const port = new Port('Dover');
    const ship = new Ship (port);

    ship.setSail();
    
    expect (ship.currentPort).toBeFalsy();
  });
});

describe ('can display current port', () => {
  it ('should have a starting port', () => {
    const port = new Port('Dover');
    const ship = new Ship('Titanic', 20, port);
     
    expect (ship.currentPort).toBe(port);
  });
});

describe ('can dock on a DIFFERENT port', () => {
  const dover = new Port('Dover');
  const ship = new Ship(dover);

  const calais = new Port('Calais');
  ship.dock(calais);

  expect (ship.currentPort).toBe(calais);
});