import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ISalaryInfo } from "./ISalaryInfo";
import { SET_BASIC_SALARY, SET_SALARY_MODEL } from "./types";
import { AppState, ThunkType } from "../../store";

export const setBasicSalary = (basicSalary: string): ThunkType => (
  dispatch: ThunkDispatch<AppState, any, any>,
  getState: () => AppState
): any => {
  return dispatch({
    type: SET_BASIC_SALARY,
    payload: basicSalary
  });
};

export const setSalaryModel = (salaryModel: string): ThunkType => (
  dispatch: ThunkDispatch<AppState, any, any>,
  getState: () => AppState
): any => {
  dispatch({
    type: SET_SALARY_MODEL,
    payload: salaryModel
  });
};
