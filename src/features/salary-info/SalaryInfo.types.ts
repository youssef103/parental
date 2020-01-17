import { Action } from "redux";

export const SET_BASIC_SALARY = "[SALARY_INFO] SET_BASIC_SALARY";
export const SET_SALARY_MODEL = "[SALARY_INFO] SET_SALARY_MODEL";

interface setBasicSalaryAction extends Action {
  type: typeof SET_BASIC_SALARY;
  payload: string;
}

interface setBasicModelAction extends Action {
  type: typeof SET_SALARY_MODEL;
  payload: string;
}

export type SalaryInfoActionTypes = setBasicSalaryAction | setBasicModelAction;
