import {
  SET_BASIC_SALARY,
  SET_SALARY_MODEL,
  SalaryInfoActionTypes
} from "./SalaryInfo.types";
import { AppState, ThunkActionType, ThunkDispatchType } from "../../store";

export const setBasicSalary = (basicSalary: number): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): SalaryInfoActionTypes => {
  return dispatch({
    type: SET_BASIC_SALARY,
    basicSalary
  });
};

export const setSalaryModel = (salaryModel: string): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): SalaryInfoActionTypes => {
  return dispatch({
    type: SET_SALARY_MODEL,
    salaryModel
  });
};
