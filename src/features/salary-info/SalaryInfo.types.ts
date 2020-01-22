import { Action } from "redux";

export const SET_BASIC_SALARY = "[SALARY_INFO] SET_BASIC_SALARY";
export const SET_SALARY_MODEL = "[SALARY_INFO] SET_SALARY_MODEL";

export interface ISalaryInfoError {
  salaryModel?: string;
  basicSalary?: string;
}

export interface ISalaryInfo {
  readonly salaryModel?: string;
  readonly basicSalary?: number;
  readonly errors?: ISalaryInfoError;
}

export interface IMapSalaryInfoStateToDispatch {
  basicSalaryChangeHandler: (salary: number) => void;
  setSalaryModelChangeHandler: (salaryModel: string) => void;
}

export interface IMapSalaryInfoStateToProps {
  basicSalaryValue?: number | undefined;
  salaryModels?: string | undefined;
  errors?: ISalaryInfoError;
}

interface setBasicSalaryAction extends Action {
  type: typeof SET_BASIC_SALARY;
  basicSalary: number;
  error: string;
}

interface setSalaryModelAction extends Action {
  type: typeof SET_SALARY_MODEL;
  salaryModel: string;
  error: string;
}

export type SalaryInfoActionTypes = setBasicSalaryAction | setSalaryModelAction;
