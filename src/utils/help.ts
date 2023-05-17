export const helpMessage = () => {
  return `

            Welcome to Kev's RPN Calculator!

/ ------------------ Help-Desk ------------------ \\

    Supported Operations:
        '+'                    Addition
        '-'                    Subtraction
        '*'                    Multiplication
        '/'                    Division

    Commands:
        q, -quit              Exit the cli-application
        r, -reset             Reset the arguments
        s, -show              Show the arguments you passed in through the terminal
        h, -help              Shows this help message

    Examples:
        > 5 5 5 8 + + -       # result: -13

\\ ------------------------------------------------ /

`;
};
