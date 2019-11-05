const Ship = require('../src/Ship.js');

describe ('Ship', () => {
  it('object can be created',() => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('should have a starting port', () => {
    const ship = new Ship('Titanic');

    expect(ship.startingPort).toBe('Southampton');
  });
});