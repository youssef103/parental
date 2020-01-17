import { SET_BASIC_SALARY, SET_SALARY_MODEL } from "./SalaryInfo.types";
import { AppState, ThunkActionType, ThunkDispatchType } from "../../store";

export const setBasicSalary = (basicSalary: string): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): any => {
  return dispatch({
    type: SET_BASIC_SALARY,
    payload: basicSalary
  });
};

export const setSalaryModel = (salaryModel: string): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
): any => {
  dispatch({
    type: SET_SALARY_MODEL,
    payload: salaryModel
  });
};
