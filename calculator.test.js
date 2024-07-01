const calculator = require('./calculator');

test('calc add', () => {
    expect(calculator.add(6,5)).toBe(11)
});

test('calc subtract', () => {
    expect(calculator.subtract(6,5)).toBe(1)
});

test('calc divide', () => {
    expect(calculator.divide(250,4)).toBe(62.5)
});

test('calc multiply', () => {
    expect(calculator.multiply(3,5)).toBe(15)
});