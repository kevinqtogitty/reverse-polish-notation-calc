import { calculateRpn } from '../rpnCalc';

describe('RPN calculator function works correctly', () => {
  test('Given valid one liner of arguments, returns correct result', () => {
    const args = ['5', '5', '5', '8', '+', '+', '-'];
    let stack: number[] = [];
    const result = calculateRpn(args, stack);

    expect(result).toBe(-13);
    expect(stack).toHaveLength(1);
    expect(stack).toContain(-13);
  });

  test('Given valid one liner of arguments, returns correct result', () => {
    const args = ['2', '4', '8', '-', '5', '+', '/'];
    let stack: number[] = [];
    const result = calculateRpn(args, stack);

    expect(result).toBe(2);
    expect(stack).toHaveLength(1);
    expect(stack).toContain(2);
  });

  test('Given one operand, returns operand', () => {
    const args = ['1'];
    let stack: number[] = [];
    const result = calculateRpn(args, stack);

    expect(result).toBe(1);
    expect(stack).toHaveLength(1);
    expect(stack).toContain(1);
  });

  test('Given 1 operand and one operator, returns an error message', () => {
    const args = ['5', '+'];
    let stack: number[] = [];
    const logSpy = jest.spyOn(console, 'log');
    const result = calculateRpn(args, stack);

    expect(result).toBe(undefined);
    expect(stack).toHaveLength(0);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Error: No operands to to operate on');
  });
});
