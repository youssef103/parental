export const round = (value: number, decimals: number = 2): number => {
  let num: any = value + "e" + decimals;
  return Number(Math.round(num) + "e-" + decimals);
};

export const returnCountingDays = (
  countOfDays: number,
  otherValue: string = ""
): string => {
  return countOfDays === 1
    ? `${countOfDays} Dag`
    : `${countOfDays} Dagar ${otherValue}`;
};
