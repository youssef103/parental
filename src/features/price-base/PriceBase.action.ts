import moment from "moment";

import { ThunkActionType, ThunkDispatchType, AppState } from "../../store";
import {
  SET_PBB1,
  SET_PBB2,
  SET_START_DATE,
  SET_END_DATE
} from "./PriceBase.types";
import { PBB } from "../../constants/pbb";
import { errorMessages } from "../../utilities/config";

export const setPBB1 = (pbb1: number): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): void => {
  const { startDate }: any = getState().priceBase.duration;
  const firstYear = moment(startDate).year();

  dispatch({
    type: SET_PBB1,
    pbb1,
    error: !pbb1 ? `${errorMessages.notFoundPBB} ${firstYear}` : ""
  });
};

export const setPBB2 = (pbb2: number | undefined): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): void => {
  const { startDate, endDate }: any = getState().priceBase.duration;
  const secondYear = moment(endDate).year();
  const sameYear: boolean = moment(startDate).isSame(endDate, "year");

  let error =
    !pbb2 && startDate && endDate && !sameYear
      ? `${errorMessages.notFoundPBB} ${secondYear}`
      : "";

  dispatch({
    type: SET_PBB2,
    pbb2,
    error
  });
};

const setStartDate = (startDate: string): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): void => {
  let birthday: any = getState().critera.birthday;
  let error = moment(startDate).isBetween(
    moment(birthday),
    moment(birthday)
      .add(2, "years")
      .subtract(29, "days") &&
      birthday &&
      startDate
  )
    ? errorMessages.period
    : "" || !startDate
    ? errorMessages.startDateIsRequired
    : "";

  dispatch({
    type: SET_START_DATE,
    startDate,
    error
  });
};

const setEndDate = (endDate: string): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): void => {
  let startDate: any = getState().priceBase.duration.startDate;
  let error = !endDate
    ? errorMessages.endDateIsRequired
    : "" || moment(endDate).diff(startDate, "days") + 1 <= 29
    ? errorMessages.minPeriod
    : "";

  dispatch({
    type: SET_END_DATE,
    endDate,
    error
  });
};

export const setDuration = (
  startDate: string,
  endDate: string
): ThunkActionType => (dispatch: ThunkDispatchType) => {
  const firstYear: number = moment(startDate).year();
  const secondYear: number = moment(endDate).year();
  const sameYear: boolean = moment(startDate).isSame(endDate, "year");

  dispatch(setStartDate(startDate));

  if ((!startDate && !endDate) || sameYear) {
    dispatch(setEndDate(endDate));
    dispatch(setPBB2(undefined));
  }

  if (!isNaN(firstYear) && startDate) {
    dispatch(setPBB1(PBB[firstYear] || 0));
  }

  if (endDate) {
    dispatch(setEndDate(endDate));

    if (!sameYear && !isNaN(firstYear) && !isNaN(secondYear)) {
      dispatch(setPBB2(PBB[secondYear]));
    }
  }
};
