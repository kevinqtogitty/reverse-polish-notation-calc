import { errorMessages, error } from './error.ts';
import { operations } from './operations.ts';
import colors from 'colors';

export const calculateRpn = (args: string[], stack: number[]) => {
  for (const i in args) {
    const arg = parseFloat(args[i]);
    // If its a number, push it onto the stack
    if (!isNaN(arg)) {
      stack.push(arg);
    } else {
      // Else it's an operator and we need to do some calculations
      const operation = args[i];
      const a = stack.pop();
      const b = stack.pop();
      if (a === undefined || b === undefined) {
        console.log(colors.red(error(errorMessages.emptyStack)));
        return;
      }
      let res = operations[operation](b, a);
      // Push the result back onto the stack for the next operation or for return
      stack.push(res);
    }
  }
  return stack[stack.length - 1];
};
