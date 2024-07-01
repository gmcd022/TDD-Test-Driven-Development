const caesarCipher = require('./caesarCipher');

test('caesar', () => {
    expect(caesarCipher('caesarCipher', 3)).toBe('fdhvduFlskhu')
});

test('caesar', () => {
    expect(caesarCipher('xYz', 1)).toBe('yZa')
});

test('caesar', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
});