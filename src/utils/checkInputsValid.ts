import { operations } from './operations.ts';

const checkInputsValid = (inputs: string[]) => {
  const isValid = inputs.every((char) => isOperatorOrNumber(char));
  return isValid;
};

const isOperatorOrNumber = (char: string) => {
  const isValid = !isNaN(Number(char)) || operations.hasOwnProperty(char);
  return isValid;
};

const isValueAFloat = (value: number) => {
  const isFloat = value % 1 !== 0;
  return isFloat;
};

export { checkInputsValid, isOperatorOrNumber, isValueAFloat };
