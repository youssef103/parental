import { Action } from "redux";

export const SET_BASIC_SALARY = "[SALARY_INFO] SET_BASIC_SALARY";
export const SET_SALARY_MODEL = "[SALARY_INFO] SET_SALARY_MODEL";

export interface ISalaryInfo {
  salaryModel?: string;
  basicSalary?: number;
}

export interface IMapSalaryInfoStateToDispatch {
  basiceSalaryChangeHandler: (salary: number) => void;
  setSalaryModelChangeHandler: (salaryModel: string) => void;
}

export interface IMapSalaryInfoStateToProps {
  basiceSalaryValue: number | undefined;
  salaryModels: string | undefined;
}

interface setBasicSalaryAction extends Action {
  type: typeof SET_BASIC_SALARY;
  basicSalary: number;
}

interface setSalaryModelAction extends Action {
  type: typeof SET_SALARY_MODEL;
  salaryModel: string;
}

export type SalaryInfoActionTypes = setBasicSalaryAction | setSalaryModelAction;
