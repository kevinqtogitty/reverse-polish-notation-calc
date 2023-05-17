import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { checkInputsValid } from './utils/checkInputsValid.ts';
import { error, errorMessages } from './utils/error.ts';
import { calculateRpn } from './utils/rpnCalc.ts';
import { helpMessage } from './utils/help.ts';
import { red, green, magenta, cyan } from 'colorette';
import { Commands } from './types/types.ts';

function main() {
  const rl = readline.createInterface({ input, output, terminal: false });

  let stack: number[] = [];

  const cmds: Commands = {
    q: {
      do: () => {
        console.log(red('Exiting application'));
        rl.close();
      }
    },
    r: {
      do: () => {
        stack = [];
        console.log(green(`Arguments have been cleared`));
      }
    },
    h: {
      do: () => console.log(cyan(helpMessage()))
    },
    s: {
      do: () => console.log(magenta(`Current arguments = ${stack}`))
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

    // We've hit an error
    if (!allFilteredArgsValid) {
      console.log(red(error(errorMessages.badArg)));
      return;
    }

    // If everything is ok, operate
    const result = calculateRpn(filteredArgs, stack);
    if (result) console.log(result);
  };

  rl.on('line', (answer) => {
    handleInput(answer);
  });

  rl.question(cyan(`${helpMessage()}\n`), (answer) => handleInput(answer));
}

main();

export default main;
