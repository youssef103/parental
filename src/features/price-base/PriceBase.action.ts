import moment from "moment";

import { AppState, ThunkActionType, ThunkDispatchType } from "../../store";
import { SET_PBB, SET_DURATION } from "./PriceBase.types";
import { PBB } from "../../fixtures/pbb";

export const setPBB = (pbb: any): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): void => {
  dispatch({
    type: SET_PBB,
    payload: pbb
  });
};

export const setDuration = (
  startDate: any,
  endDate: any,
  countOfDays: any
): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): any => {
  const sameYear = moment(startDate).isSame(endDate, "year");

  let firstYear: number = moment(startDate).year();
  let secondYear: number = moment(endDate).year();

  dispatch(setPBB(PBB[firstYear]));

  if (!sameYear) {
    dispatch(setPBB(PBB[secondYear]));
  }
  return dispatch({
    type: SET_DURATION,
    payload: {
      startDate,
      endDate,
      countOfDays
    }
  });
};
