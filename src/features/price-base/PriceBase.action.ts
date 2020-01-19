import moment from "moment";

import { ThunkActionType, ThunkDispatchType } from "../../store";
import {
  SET_PBB1,
  SET_PBB2,
  SET_START_DATE,
  SET_END_DATE,
  PriceBaseActionTypes
} from "./PriceBase.types";
import { PBB } from "../../constants/pbb";
import { errorMessages } from "../../utilities/config/messages.config";

export const setPBB1 = (pbb1: number): ThunkActionType => (
  dispatch: ThunkDispatchType
): void => {
  dispatch({
    type: SET_PBB1,
    pbb1,
    error: !pbb1 ? errorMessages.notFoundPBB : ""
  });
};

export const setPBB2 = (pbb2: number): ThunkActionType => (
  dispatch: ThunkDispatchType
): void => {
  dispatch({
    type: SET_PBB2,
    pbb2,
    error: !pbb2 ? errorMessages.notFoundPBB : ""
  });
};

const setStartDate = (startDate: string): PriceBaseActionTypes => ({
  type: SET_START_DATE,
  startDate,
  error: ""
});

const setEndDate = (endDate: string): PriceBaseActionTypes => ({
  type: SET_END_DATE,
  endDate,
  error: ""
});

export const setDuration = (
  startDate: string,
  endDate: string
): ThunkActionType => (dispatch: ThunkDispatchType): void => {
  const firstYear: number = moment(startDate).year();
  const secondYear: number = moment(endDate).year();
  const sameYear: boolean = moment(startDate).isSame(endDate, "year");

  if (!startDate && !endDate) {
    dispatch(setEndDate(endDate));
  }

  if (!endDate) {
    dispatch(setStartDate(startDate));
  }

  if (endDate) {
    dispatch(setEndDate(endDate));
    if (!isNaN(firstYear)) {
      dispatch(setPBB1(PBB[firstYear]));
    }

    if (!sameYear && !isNaN(firstYear) && !isNaN(secondYear)) {
      dispatch(setPBB2(PBB[secondYear]));
    }
  }
};
