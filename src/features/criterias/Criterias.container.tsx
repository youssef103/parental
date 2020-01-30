import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { EmployeeStatusComponent, DatePickerComponent } from "./components";

import { AppState } from "../../store";
import { setStatus, setBirtDate } from "./Criterias.action";

import {
  CriteriaActionTypes,
  IMapStateToProps,
  IMapDispatchProps,
  dateType
} from "./Criterias.types";

import {
  getBirthday,
  getStatusError,
  getBirthdayError
} from "../../store/selector";

const mapStateToProps = (state: AppState): IMapStateToProps => ({
  birthday: getBirthday(state),
  statusError: getStatusError(state),
  birthdayError: getBirthdayError(state)
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, CriteriaActionTypes>
): IMapDispatchProps => ({
  changeSalaryHandler: (status: string) => dispatch(setStatus(status)),
  changeDateHandler: (date: dateType) => dispatch(setBirtDate(date))
});

export default {
  EmployeeStatus: connect(
    mapStateToProps,
    mapStateToDispatch
  )(EmployeeStatusComponent),
  Birthday: connect(mapStateToProps, mapStateToDispatch)(DatePickerComponent)
};
