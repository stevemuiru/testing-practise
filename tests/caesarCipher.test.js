import caesarCipher from '../src/caesarCipher';

test('shifts lowercase letters correctly', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('shifts uppercase letters correctly', () => {
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('preserves case of letters', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('wraps around alphabet correctly', () => {
  expect(caesarCipher('z', 1)).toBe('a');
  expect(caesarCipher('Z', 1)).toBe('A');
});

test('leaves punctuation and spaces unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
