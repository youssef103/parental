import { AppState } from "../../store";
import moment from "moment";

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
  let { startDate, endDate }: any = state.priceBase.duration;
  return startDate && endDate && endDate.diff(startDate, "days");
};
