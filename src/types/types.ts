interface Commands {
  [key: string]: { do: () => void };
}

interface CalcFuntions {
  [key: string]: (a: number, b: number) => number;
}

export { Commands, CalcFuntions };
