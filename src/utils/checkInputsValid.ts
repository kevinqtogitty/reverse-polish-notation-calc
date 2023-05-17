import { operations } from './operations.ts';

const checkInputsValid = (inputs: string[]) => {
  const isValid = inputs.every((char) => isOperatorOrNumber(char));
  return isValid;
};

const isOperatorOrNumber = (char: string | number) => {
  const isValid = !isNaN(Number(char)) || operations.hasOwnProperty(char);
  return isValid;
};

export { checkInputsValid, isOperatorOrNumber };
