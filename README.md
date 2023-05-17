# Kev's Reverse Polish Notation Calculator

![Reverse Polish Notation](./src/assets/polishFlag.webp)

A commandline application that computes Reverse Polish notation

## Architecture and technical reasoning

This application is written in TS, and runs on Node.js for it's simplicity, large community, and ecosystem. Uses the `node:readline` module to accept handle inputs/outputs to/from the commandline

- The main function which executes the script is located at the entry point `index.ts`
- `main()` is where the main logic of the program lies. It runs the cli, accepts/rejects user input, and returns the result given the users RPN

## How to install and run the application

1. Open your terminal and run `node -v`, make sure you node version is `>=16.0`
2. Navigate into your desired directory and clone this repo with the command `git clone git@github.com:kevinqtogitty/reverse-polish-notation-calc.git`
3. cd into the directory `cd reverse-polish-notation-calc`
4. Install dependancies `yarn install`
5. Start the application `yarn start`
6. Enter in your RPN on a single line or over multiple lines eg.

```
> 5 5 5 8 + + -
-13

OR

> 5
5
> 5
5
> 5
5
> 8
8
> s
Current arguments = 5,5,5,8
> +
13
> +
18
> -
-13
```

## Commands

To provide a better CLI experience

```
    q: quit              Exits the cli-application
    r: reset             Resets the arguments
    s: show              Shows the arguments you passed in through the terminal
    h: help              Shows a help message
```

eg.

```
> h

            Welcome to Kev's RPN Calculator!

/ ------------------ Help-Desk ------------------ \

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
        > 5 5 5 8 + + -       result = -13

\ ------------------------------------------------ /
```

## Tests

Unit tests have been implemented for all functions using the **Jest** testing library

- To run all tests use the command `yarn test`
- To run a single test suit for a particular function use the command `yarn test fileNameHere.test.ts`

## Functional reasoning

Features of the RPN calculator inclduing the main calculation function

1. **rpnCalc**: Calculates the RPN and returns the RPN given that the arguments have been validated. Can accept multiline or single line RPN.
   - The function implements a stack data structure and loops over the array of arguments, for each argument...
     - If the current argument is an operand it is pushed onto the stack
     - if the current argument is an operator it will pop the last two arguments off the stack, compute, and push that result back onto the stack
     - this continues until the stack is empty
2. **error**: Returns an Error message given one of two messages defined in the errorMessage object.
3. **checkInputsValid**:
   Checks that inputs are of type number or a defined enum operator. Else returns an error message and does not calculate. Application continues to accept arguments afterwards
4. **helpMessage**: Prints a formatted multiline helper which contains information on how to use the application, the commands you can run, and an example
5. **operations**: An object containing the four basic mathematical functions in key:value pairs

## Things I would do a bit differently

1. Flesh out a more well designed CLI application/experience

- Was going to implement ascii art on application execution, but formatting with the help message was off

2. More fleshed out error handling system. Currently it just prints out an error to the console when the arguments are invalid. The application continues to work as it should. But perhaps a boolean to flag that an error has occurred might be better
3. Function to detect if the returned resule needs to be rounded. Was using to fixed, but we don't want integers to look like `3.00`
