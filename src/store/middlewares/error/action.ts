import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  PBB_HAS_ERROR,
  ErrorState,
  ErrorActionTypes,
  STATUS_HAS_ERROR,
  BIRTHDAY_HAS_ERROR
} from "./types";
import { AppState, AppActionTypes } from "../..";

type ThunkType = ThunkAction<void, ErrorState, null, ErrorActionTypes>;

export const setPBBError2 = (errorMessage: string): any => (
  dispatch: Dispatch<ErrorActionTypes>
): ErrorActionTypes => {
  return dispatch({
    type: PBB_HAS_ERROR,
    payload: errorMessage
  });
};

export const setPBBError = (errorMessage: string): any => ({
  type: PBB_HAS_ERROR,
  payload: errorMessage
});

export const setStatusError = (error: string): ThunkType => (
  dispatch: ThunkDispatch<AppState, void, AppActionTypes>
): ErrorActionTypes => {
  return dispatch({ type: STATUS_HAS_ERROR, payload: error });
};

export const setBirtDayError = (error: string): ThunkType => (
  dispatch: ThunkDispatch<AppState, void, AppActionTypes>
): ErrorActionTypes => {
  return dispatch({ type: BIRTHDAY_HAS_ERROR, payload: error });
};
