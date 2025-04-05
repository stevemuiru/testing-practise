import capitalize from '../src/capitalize';

test('Capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});