const Port = require('../src/Port.js');

describe ('Port', () => {
  it ('Port object can be created',() => {
        expect(new Port()).toBeInstanceOf(Object);
  });
});

describe ('dock must assign a destination to ship', () => {
  it ('must add a destination port', () => {
    const port = new Port;

    port.dock();
    
    expect (port.portName = 'Liverpool');
  });
});