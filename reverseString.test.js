const reverseString = require('./reverseString.js');

test('reverse string', () => {
    expect(reverseString('sdrawkcab')).toBe('backwards')
});

test('reverse string', () => {
    expect(reverseString('backwards')).toBe('sdrawkcab')
})


