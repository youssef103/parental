import { Action } from "redux";
import moment from "moment";

export const SET_STATUS = "[CRITERIAS] SET_STATUS";
export const SET_BIRTHDAY = "[CRITERIAS] SET_BIRTHDAY";
export const SET_STATUS_ERROR = "[CRITERIAS] SET_STATUS_ERROR";
export const SET_BIRTHDAY_ERROR = "[CRITERIAS] SET_BIRTHDAY_ERROR";

export interface CriteriaState {
  readonly birthday?: null | string;
  readonly status?: string;
  readonly errors: {
    readonly birthday?: string;
    readonly status?: string;
  };
}

export interface DatePickerProps {
  readonly birthday: moment.Moment | null;
  readonly changeDateHandler: (date: moment.Moment | null) => void;
  readonly error?: string;
}

export interface EmployeeStatusProps {
  readonly changeSalaryHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readonly error?: string;
}

export type IMapStateToProps = {
  birthday?: string | null;
  statusError?: string;
  birthdayError?: string;
};

export type IMapDispatchProps = {
  changeSalaryHandler: (status: string) => void;
  changeDateHandler: (date: string) => void;
};

interface setStatusAction extends Action {
  readonly type: typeof SET_STATUS;
  readonly status: string;
  readonly error: string;
}

interface setChildBirthdayAction extends Action {
  readonly type: typeof SET_BIRTHDAY;
  readonly birthday: string | null;
  readonly error: string;
}

export type CriteriaActionTypes = setChildBirthdayAction | setStatusAction;
