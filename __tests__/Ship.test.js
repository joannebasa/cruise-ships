const Ship = require('../src/Ship.js');

describe ('Ship', () => {
  it('object can be created',() => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('should have a starting port', () => {
    const ship = new Ship('Titanic', 'Southampton');

    expect(ship.startingPort).toBe('Southampton');
  });
});

describe ('board() must add passengers', () => {
  const ship = new Ship('Titanic', 'Southampton', 1);

  ship.board();
  expect (ship.passengers).toEqual(2);
});