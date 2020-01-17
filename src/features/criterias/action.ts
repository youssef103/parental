import { ThunkDispatch } from "redux-thunk";
import { AppState, ThunkActionType } from "../../store";
import { SET_BIRTHDAY, SET_STATUS } from "./types";
import { errorMessages } from "../../fixtures/configData";
import { setStatusError, setBirtDayError } from "../../store/middlewares";

export const setBirtDate = (birthday: string): ThunkActionType => (
  dispatch: ThunkDispatch<AppState, any, any>
): any => {
  if (birthday === null) {
    return dispatch(setBirtDayError(errorMessages.period));
  }

  return dispatch({ type: SET_BIRTHDAY, payload: birthday });
};

export const setStatus = (status: string): ThunkActionType => (
  dispatch: ThunkDispatch<AppState, any, any>
): any => {
  if (status === "") {
    return dispatch(setStatusError(errorMessages.statusIsRequired));
  }
  //dispatch(setStatusError(""));
  dispatch({ type: SET_STATUS, payload: status });
};
