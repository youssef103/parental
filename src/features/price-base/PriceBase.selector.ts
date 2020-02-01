import moment from "moment";
import { AppState } from "../../store";
import {
  returnCountingDays,
  getDiffDays,
  getStatusOfYears
} from "../../utilities";

export const getPriceBaseErrors = (state: AppState) => state.priceBase.errors;

export const getYears = (state: AppState) => {
  let { startDate, endDate }: any = state.priceBase.duration;

  const { firstYear, secondYear, sameYear } = getStatusOfYears(
    startDate,
    endDate
  );

  let years = [firstYear];
  if (!sameYear && secondYear) {
    years[1] = secondYear;
  }
  return years;
};

export const getCountOfDays = (state: AppState) => {
  const { startDate, endDate }: any = state.priceBase.duration;

  const { firstYear, secondYear, sameYear } = getStatusOfYears(
    startDate,
    endDate
  );

  const startOf = moment(startDate).endOf("year");
  const endOf = moment(endDate).startOf("year");

  const countOfDays: number =
    startDate && endDate && getDiffDays(endDate, startDate);

  const countofDaysInDifferentsYears =
    startDate && endDate && !sameYear
      ? `( ${returnCountingDays(
          getDiffDays(startOf, startDate)
        )} i ${firstYear} och ${returnCountingDays(
          getDiffDays(endDate, endOf)
        )} i ${secondYear} )`
      : "";

  return countOfDays > 0
    ? returnCountingDays(countOfDays, countofDaysInDifferentsYears)
    : undefined;
};
