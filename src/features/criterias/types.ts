import { Action } from "redux";

export const SET_STATUS = "SET_STATUS";
export const SET_BIRTHDAY = "SET_BIRTHDAY";

export interface CriteriaState {
  birthday?: string;
  status?: string;
}

interface setSalaryTypeAction extends Action {
  type: typeof SET_STATUS;
  payload: string;
}

interface setChildBirthdayAction extends Action {
  type: typeof SET_BIRTHDAY;
  payload: string;
}

export type CriteriaActionTypes = setChildBirthdayAction | setSalaryTypeAction;
