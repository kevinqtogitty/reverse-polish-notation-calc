import { error, errorMessages } from '../error';

describe('Errors return the correct messages', () => {
  test('Returns the correct bad arg message', () => {
    const message = error(errorMessages.badArg);
    expect(message).toBe(
      'Error: Args must be a number or one of the four basic operators'
    );
  });

  test('Returns the correct empty stack message', () => {
    const message = error(errorMessages.emptyStack);
    expect(message).toBe('Error: No operands to to operate on');
  });
});
