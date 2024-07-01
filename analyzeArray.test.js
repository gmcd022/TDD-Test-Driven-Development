analyzeArray = require('./analyzeArray');

test('analyzeArray', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min:1, max: 8, length: 6})
});

test('string in array', () => {
    expect(() => {analyzeArray([1,'apple',3,4,2,6]); }).toThrow('all entries in array must be numbers')
});

test('non array', () => {
    expect(() => {analyzeArray(6); }).toThrow('You must enter an array')
});

test('single zero', () => {
    expect(analyzeArray([0])).toStrictEqual({average: 0, min:0, max: 0, length: 1})
});

test('empty array', () => {
    expect(analyzeArray([])).toStrictEqual({average: null, min:null, max: null, length: 0})
});

