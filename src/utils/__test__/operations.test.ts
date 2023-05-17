import { operations } from '../operations';

describe('Performs all operations correctly and return corrent result', () => {
  describe('Addition functions correctly', () => {
    test('Returns 0 given args [0, 0]', () => {
      const result = operations['+'](0, 0);
      expect(result).toBe(0);
    });

    test('Returns 8 given args [6, 2]', () => {
      const result = operations['+'](6, 2);
      expect(result).toBe(8);
    });

    test('Returns -8 given args [-6, -2]', () => {
      const result = operations['+'](-6, -2);
      expect(result).toBe(-8);
    });

    test('Returns 4 given args [6, -2]', () => {
      const result = operations['+'](6, -2);
      expect(result).toBe(4);
    });
  });

  describe('Subtraction functions correctly', () => {
    test('Returns 0 given args [0, 0]', () => {
      const result = operations['-'](0, 0);
      expect(result).toBe(0);
    });

    test('Returns 4 given args [6, 2]', () => {
      const result = operations['-'](6, 2);
      expect(result).toBe(4);
    });

    test('Returns -8 given args [-6, -2]', () => {
      const result = operations['-'](-6, -2);
      expect(result).toBe(-4);
    });

    test('Returns 8 given args [6, -2]', () => {
      const result = operations['-'](6, -2);
      expect(result).toBe(8);
    });
  });

  describe('Multiplication functions correctly', () => {
    test('Returns 0 given args [0, 0]', () => {
      const result = operations['*'](0, 0);
      expect(result).toBe(0);
    });

    test('Returns 12 given args [6, 2]', () => {
      const result = operations['*'](6, 2);
      expect(result).toBe(12);
    });

    test('Returns 12 given args [-6, -2]', () => {
      const result = operations['*'](-6, -2);
      expect(result).toBe(12);
    });

    test('Returns -12 given args [6, -2]', () => {
      const result = operations['*'](6, -2);
      expect(result).toBe(-12);
    });
  });
  describe('Division functions correctly', () => {
    test('Returns 0 given args [0, 0]', () => {
      const result = operations['/'](0, 0);
      expect(result).toBe(NaN);
    });

    test('Returns 3 given args [6, 2]', () => {
      const result = operations['/'](6, 2);
      expect(result).toBe(3);
    });

    test('Returns 3 given args [-6, -2]', () => {
      const result = operations['/'](-6, -2);
      expect(result).toBe(3);
    });

    test('Returns 3 given args [6, -2]', () => {
      const result = operations['/'](6, -2);
      expect(result).toBe(-3);
    });
  });
});
