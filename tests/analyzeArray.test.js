import analyzeArray from '../src/analyzeArray';

test('returns correct average, min, max, and length', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('works with single element array', () => {
  const result = analyzeArray([5]);

  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});

test('works with negative numbers', () => {
  const result = analyzeArray([-2, -5, -3]);

  expect(result).toEqual({
    average: -3.3333333333333335,
    min: -5,
    max: -2,
    length: 3
  });
});
