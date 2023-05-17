export const helpMessage = () => {
  return `
// --- Reverse Polish Notation Calculator Help-Desk -- \\

How to use:
    yarn start             Start the calculator

Supported Operations:
    '+'                    Addition
    '-'                    Subtraction
    '*'                    Multiplication
    '/'                    Division
    
Commands:
    q, -quit              Exit the cli-application
    r, -clear             Reset the arguments
    s, -show              Show the arguments you passed in through the terminal
    h, -help              Shows this help messaga


Examples:
    > 5 5 5 8 + + -       # result: -13`;
};
