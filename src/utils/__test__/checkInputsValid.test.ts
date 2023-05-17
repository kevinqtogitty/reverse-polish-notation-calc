import { checkInputsValid, isOperatorOrNumber } from '../checkInputsValid';

describe('Returns the correct booleans given args', () => {
  test('Returns TRUE given an empty array', () => {
    const isValid = checkInputsValid([]);
    expect(isValid).toBe(true);
  });

  test('Returns FALSE given non number or operands chars in array', () => {
    const isValid = checkInputsValid(['1', '2', 'k', '+']);
    expect(isValid).toBe(false);
  });

  test('Returns TRUE given valid args in array', () => {
    const isValid = checkInputsValid(['1', '2', '*', '7', '+', '-']);
    expect(isValid).toBe(true);
  });
});
