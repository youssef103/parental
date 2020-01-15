import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  CriteriaActionTypes,
  SET_BIRTHDAY,
  SET_STATUS,
  CriteriaState
} from "./types";

type ThunkType = ThunkAction<void, CriteriaState, null, CriteriaActionTypes>;

export const setChildBirtDate = (birthday: string): ThunkType => (
  dispatch: Dispatch<CriteriaActionTypes>,
  getState: () => CriteriaState
): CriteriaActionTypes => {
  return dispatch({ type: SET_BIRTHDAY, payload: birthday });
};

export const setStatus = (status: string): ThunkType => (
  dispatch: Dispatch<CriteriaActionTypes>,
  getState: () => CriteriaState
): CriteriaActionTypes => {
  return dispatch({ type: SET_STATUS, payload: status });
};
