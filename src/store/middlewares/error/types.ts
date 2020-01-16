import { Action } from "redux";

export const STATUS_HAS_ERROR = "STATUS_HAS_ERROR";
export const BIRTHDAY_HAS_ERROR = "BIRTHDAY_HAS_ERROR";
export const START_DATE_HAS_ERROR = "START_DATE_HAS_ERROR";
export const END_DATE_HAS_ERROR = "END_DATE_HAS_ERROR";
export const PBB_HAS_ERROR = "PBB_HAS_ERROR";
export const SALARY_TYPE_HAS_ERROR = "SALARY_TYPE_HAS_ERROR";
export const SALARY_HAS_ERROR = "SALARY_HAS_ERROR";

export interface ErrorState {
  status?: string;
  birthday?: string;
  startDate?: string;
  endDate?: string;
  pbb?: string;
  countOfDays?: string;
  salaryType?: string;
  basicSalary?: string;
}

interface setStatusErrorAction extends Action {
  type: typeof STATUS_HAS_ERROR;
  payload: string;
}

interface setBirthdayErrorAction extends Action {
  type: typeof BIRTHDAY_HAS_ERROR;
  payload: string;
}

interface setStartDateErrorAction extends Action {
  type: typeof START_DATE_HAS_ERROR;
  payload: string;
}

interface setEndDateErrorAction extends Action {
  type: typeof END_DATE_HAS_ERROR;
  payload: string;
}

interface setPBBErrorAction extends Action {
  type: typeof PBB_HAS_ERROR;
  payload: string;
}

interface setSalaryTypeErrorAction extends Action {
  type: typeof SALARY_TYPE_HAS_ERROR;
  payload: string;
}

interface setSalaryErrorAction extends Action {
  type: typeof SALARY_HAS_ERROR;
  payload: string;
}

export type ErrorActionTypes =
  | setStatusErrorAction
  | setBirthdayErrorAction
  | setStartDateErrorAction
  | setEndDateErrorAction
  | setPBBErrorAction
  | setSalaryTypeErrorAction
  | setSalaryErrorAction;
