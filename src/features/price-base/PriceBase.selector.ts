import moment from "moment";
import { AppState } from "../../store";

export const getPriceBaseErrors = (state: AppState) => state.priceBase.errors;

export const getYears = (state: AppState) => {
  let { startDate = moment().year(), endDate }: any = state.priceBase.duration;

  const firstYear: null | number = moment(startDate).year() || moment().year();
  const secondYear: null | number = moment(endDate).year();
  const sameYear: boolean = moment(startDate).isSame(endDate, "year");

  let years = [firstYear];
  if (!sameYear && secondYear) {
    years[1] = secondYear;
  }
  return years;
};

export const getCountOfDays = (state: AppState) => {
  const { startDate, endDate }: any = state.priceBase.duration;

  const firstYear: null | number = moment(startDate).year();
  const secondYear: null | number = moment(endDate).year();
  const sameYear: boolean = moment(startDate).isSame(endDate, "year");

  const startOf = moment(startDate).endOf("year");
  const endOf = moment(endDate).startOf("year");

  const countOfDays: number =
    startDate && endDate && endDate.diff(startDate, "days");

  const countofDaysInDifferentsYears =
    startDate && endDate && !sameYear
      ? `( ${startOf.diff(startDate, "days") +
          1} dagar i ${firstYear} och ${moment(endDate).diff(
          endOf,
          "days"
        )} dagar i ${secondYear} )`
      : "";

  return countOfDays === 1
    ? countOfDays + " Dag"
    : undefined || countOfDays > 1
    ? `${countOfDays} Dagar ${countofDaysInDifferentsYears}`
    : undefined;
};
