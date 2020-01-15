import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { IDuration, IPBB } from "./IPriceBase";

import { AppState } from "../../store";
import { PriceBaseActionTypes, SET_PBB, SET_DURATION } from "./types";

type ThunkType = ThunkAction<void, AppState, null, PriceBaseActionTypes>;

export const setPBB = (pbb: IPBB): ThunkType => (
  dispatch: Dispatch,
  getState: () => AppState
): PriceBaseActionTypes => {
  return dispatch({
    type: SET_PBB,
    payload: pbb
  });
};

export const setDuration = ({
  startDate,
  endDate,
  countOfDays
}: IDuration): ThunkType => (
  dispatch: Dispatch,
  getState: () => AppState
): PriceBaseActionTypes => {
  return dispatch({
    type: SET_DURATION,
    payload: {
      startDate,
      endDate,
      countOfDays
    }
  });
};
