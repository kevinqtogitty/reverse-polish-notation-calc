const error = (msg: string) => {
  return `Error: ${msg}`;
};

const errorMessages = {
  badArg: 'Args must be a number or one of the four basic operators',
  emptyStack: 'No operands to to operate on'
};

export { error, errorMessages };
