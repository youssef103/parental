import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ISalaryInfo } from "./ISalaryInfo";
import {
  SalaryInfoActionTypes,
  SET_BASIC_SALARY,
  SET_SALARY_TYPE
} from "./types";

type ThunkType<R> = ThunkAction<
  R,
  ISalaryInfo,
  undefined,
  SalaryInfoActionTypes
>;

export const setBasicSalary = (basicSalary: string): ThunkType<void> => (
  dispatch: Dispatch<SalaryInfoActionTypes>,
  getState: () => ISalaryInfo
) => {
  dispatch({
    type: SET_BASIC_SALARY,
    payload: basicSalary
  });
};

export const setSalaryType = (salaryType: string): ThunkType<void> => (
  dispatch: Dispatch<SalaryInfoActionTypes>,
  getState: () => ISalaryInfo
) => {
  dispatch({
    type: SET_SALARY_TYPE,
    payload: salaryType
  });
};
