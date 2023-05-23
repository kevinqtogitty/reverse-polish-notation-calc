import { red } from 'colorette';
import { errorMessages, error } from './error.ts';
import { operations } from './operations.ts';

export const calculateRpn = (args: string[], stack: number[]) => {
  for (const i in args) {
    const arg = parseFloat(args[i]);

    // If its a number, push it onto the stack
    if (!isNaN(arg)) {
      stack.push(arg);
    } else {
      // Else it's an operator and we need to do some calculations
      const operation = args[i];

      // Check if we have reached the end of the stack
      if (stack.length === 1) {
        console.log(error(errorMessages.emptyStack));
        return;
      }

      const a = stack.pop();
      const b = stack.pop();

      // Check if user is trying to divide by zero
      if (args[i] === '/') {
        if (a === 0) console.log('Cannot divide by zero');
        return;
      }

      if (a === undefined || b === undefined) {
        console.log(red(error(errorMessages.emptyStack)));
        return;
      }

      let res = operations[operation](b, a);

      // Push the result back onto the stack for the next operation or for return
      stack.push(res);
    }
  }
  return stack[stack.length - 1];
};
