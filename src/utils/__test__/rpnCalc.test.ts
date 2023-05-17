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
});
