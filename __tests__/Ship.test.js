const Ship = require('../src/Ship.js');

//Objects
describe ('Ship', () => {
  it ('Ship object can be created',() => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it ('should have a starting port', () => {
    const ship = new Ship ('Titanic', 'Southampton');

    expect (ship.startingPort).toBe('Southampton');
  });
});

//methods
describe ('board() method to add passengers', () => {
  it ('must add 1 passenger', () => {
    const ship = new Ship ('Titanic', 'Southampton', 1);

    ship.board();

    expect (ship.passengers).toEqual(2);
  });
});



describe('ship can set sail', () => {
  it ('setSail() should turn startingPort to false', () => {
    const ship = new Ship ('Southampton');

    ship.setSail();
    
    expect (ship.startingPort).toBeFalsy();
  });
});