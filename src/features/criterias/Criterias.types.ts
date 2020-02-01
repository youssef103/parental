import { Action } from "redux";
import moment from "moment";

export const SET_STATUS = "[CRITERIAS] SET_STATUS";
export const SET_BIRTHDAY = "[CRITERIAS] SET_BIRTHDAY";
export const SET_STATUS_ERROR = "[CRITERIAS] SET_STATUS_ERROR";
export const SET_BIRTHDAY_ERROR = "[CRITERIAS] SET_BIRTHDAY_ERROR";

export type dateType = moment.Moment | null;

export interface CriteriaState {
  readonly birthday?: dateType;
  readonly status?: string;
  readonly compensationInfo: string;
  readonly errors: {
    readonly birthday?: string;
    readonly status?: string;
  };
}

export interface DatePickerProps {
  readonly birthday: dateType;
  readonly changeDateHandler: (date: dateType) => void;
  readonly error?: string;
}

export interface EmployeeStatusProps {
  readonly changeSalaryHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly error?: string;
}

export type IMapStateToProps = {
  birthday?: dateType;
  statusError?: string;
  birthdayError?: string;
};

export type IMapDispatchProps = {
  changeSalaryHandler?: (status: string) => void;
  changeDateHandler?: (date: dateType) => void;
};

interface setStatusAction extends Action {
  readonly type: typeof SET_STATUS;
  readonly status: string;
  readonly compensationInfo: string;
  readonly error: string;
}

interface setChildBirthdayAction extends Action {
  readonly type: typeof SET_BIRTHDAY;
  readonly birthday: dateType;
  readonly error: string;
}

export type CriteriaActionTypes = setChildBirthdayAction | setStatusAction;
