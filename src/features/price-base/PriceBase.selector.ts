import moment from "moment";
import { AppState } from "../../store";
import { returnCountingDays } from "../../utilities";

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
    startDate && endDate && endDate.diff(startDate, "days") + 1;

  const countofDaysInDifferentsYears =
    startDate && endDate && !sameYear
      ? `( ${returnCountingDays(
          startOf.diff(startDate, "days") + 1
        )} i ${firstYear} och ${returnCountingDays(
          moment(endDate).diff(endOf, "days") + 1
        )} i ${secondYear} )`
      : "";

  return countOfDays > 0
    ? returnCountingDays(countOfDays, countofDaysInDifferentsYears)
    : undefined;
};
