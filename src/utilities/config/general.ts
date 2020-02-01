import moment from "moment";

export const round = (value: number, decimals: number = 2): number => {
  let num: any = value + "e" + decimals;
  return Number(Math.round(num) + "e-" + decimals);
};

export const getDiffDays = (startDay: any, endDay: any) => {
  return moment(startDay).diff(endDay, "days") + 1;
};

export const getStatusOfYears = (startDate?: any, endDate?: any) => {
  const firstYear: null | number = moment(startDate).year() || moment().year();
  const secondYear: null | number = moment(endDate).year();
  const sameYear: boolean = moment(startDate).isSame(endDate, "year");

  return {
    firstYear,
    secondYear,
    sameYear
  };
};

export const returnCountingDays = (
  countOfDays: number,
  otherValue: string = ""
): string => {
  return countOfDays === 1
    ? `${countOfDays} Dag `
    : `${countOfDays} Dagar ${otherValue}`;
};
