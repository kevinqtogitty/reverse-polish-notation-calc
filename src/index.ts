import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { checkInputsValid } from './utils/checkInputsValid.ts';
import { error, errorMessages } from './utils/error.ts';
import { calculateRpn } from './utils/rpnCalc.ts';
import { helpMessage } from './utils/help.ts';
import colors from 'colors';
import { Commands } from './types/types.ts';

const rl = readline.createInterface({ input, output });

let stack: number[] = [];

const cmds: Commands = {
  q: {
    do: () => {
      console.log(colors.red('Exiting application'));
      rl.close();
    }
  },
  r: {
    do: () => {
      stack = [];
      console.log(colors.green(`Arguments have been cleared`));
    }
  },
  h: {
    do: () => console.log(colors.blue(helpMessage()))
  },
  s: {
    do: () => console.log(colors.magenta(`Current arguments = ${stack}`))
  }
};

const handleInput = (args: string) => {
  // Check for if they entered a command
  if (cmds[args]) {
    cmds[args].do();
    return;
  }
  // Check if all inputs are valid
  const filteredArgs = args.split(' ').filter((item) => item);

  const allFilteredArgsValid = checkInputsValid(filteredArgs);

  if (!allFilteredArgsValid) {
    console.log(colors.red(error(errorMessages.badArg)));
    return;
  }

  // If everything is ok, operate
  const result = calculateRpn(filteredArgs, stack);
  if (result) console.log(result);
};

rl.on('line', (answer) => {
  handleInput(answer);
});
