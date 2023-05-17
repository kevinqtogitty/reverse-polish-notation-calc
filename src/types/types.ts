enum Operators {
  '+',
  '-',
  '*',
  '/'
}

interface Commands {
  [key: string]: { do: () => void };
}

interface CalcFuntions {
  [key: string]: (a: number, b: number) => number;
}

type RPNArgs = number | Operators;

export { RPNArgs, Operators, Commands, CalcFuntions };
