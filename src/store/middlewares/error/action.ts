import { Dispatch } from "redux";
import {
  PBB_HAS_ERROR,
  ErrorActionTypes,
  STATUS_HAS_ERROR,
  BIRTHDAY_HAS_ERROR
} from "./types";
import { ThunkDispatchType, ThunkActionType } from "../..";

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

export const setStatusError = (error: string): ThunkActionType => (
  dispatch: ThunkDispatchType
): ErrorActionTypes => {
  return dispatch({ type: STATUS_HAS_ERROR, payload: error });
};

export const setBirtDayError = (error: string): ThunkActionType => (
  dispatch: ThunkDispatchType
): ErrorActionTypes => {
  return dispatch({ type: BIRTHDAY_HAS_ERROR, payload: error });
};
