const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe ('Port', () => {
  it ('Port object can be created',() => {
        expect(new Port()).toBeInstanceOf(Object);
  });

  it('takes a name property', () => {
    const port = new Port ('Portsmouth');

    expect(port.name).toBe('Portsmouth');
  });
});