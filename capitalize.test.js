const capitalize = require('./capitalize');

test('capitalize', () => {
    expect(capitalize("word")).toBe("Word")
});

test('capitalize2', () => {
    expect(capitalize("david")).toBe("David")
})