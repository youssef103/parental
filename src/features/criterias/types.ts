import { Action } from "redux";

export const SET_STATUS = "[CRITERIAS] SET_STATUS";
export const SET_BIRTHDAY = "[CRITERIAS] SET_BIRTHDAY";
export const STATUS_HAS_ERROR = "[CRITERIAS] STATUS_HAS_ERROR";
export const BIRTHDAY_HAS_ERROR = "[CRITERIAS]  BIRTHDAY_HAS_ERROR";

export interface CriteriaState {
  readonly birthday?: null | string;
  readonly status?: string;
}

interface setSalaryModelAction extends Action {
  readonly type: typeof SET_STATUS;
  readonly payload: string;
}

interface setChildBirthdayAction extends Action {
  readonly type: typeof SET_BIRTHDAY;
  readonly payload: string;
}

export type CriteriaActionTypes = setChildBirthdayAction | setSalaryModelAction;
