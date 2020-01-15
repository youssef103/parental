import { Action } from "redux";

export const SET_BASIC_SALARY = "SET_BASIC_SALARY";
export const SET_SALARY_TYPE = "SET_SALARY_TYPE";

interface setBasicSalaryAction extends Action {
  type: typeof SET_BASIC_SALARY;
  payload: string;
}

interface setBasicTypeAction extends Action {
  type: typeof SET_SALARY_TYPE;
  payload: string;
}

export type SalaryInfoActionTypes = setBasicSalaryAction | setBasicTypeAction;
