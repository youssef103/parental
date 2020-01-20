import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { EmployeeStatusComponent, DatePickerComponent } from "./components";

import { Row } from "../../utilities/styles/layout";
import { AppState } from "../../store";
import { setStatus, setBirtDate } from "./Criterias.action";

import {
  EmployeeStatusProps,
  DatePickerProps,
  CriteriaActionTypes,
  IMapStateToProps,
  IMapDispatchProps
} from "./Criterias.types";

import {
  getBirthday,
  getStatusError,
  getBirthdayError
} from "./Criterias.Selector";

type IProps = EmployeeStatusProps &
  DatePickerProps &
  IMapStateToProps &
  IMapDispatchProps &
  any;

const Criteria: React.FC<IProps> = props => {
  return (
    <>
      <Row col={2}>
        <EmployeeStatusComponent
          error={props.statusError}
          changeSalaryHandler={e => props.changeSalaryHandler(e.target.value)}
        />
        <DatePickerComponent
          changeDateHandler={props.changeDateHandler}
          birthday={props.birthday}
          error={props.birthdayError}
        />
      </Row>
    </>
  );
};

const mapStateToProps = (state: AppState): IMapStateToProps => ({
  birthday: getBirthday(state),
  statusError: getStatusError(state),
  birthdayError: getBirthdayError(state)
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, CriteriaActionTypes>
): IMapDispatchProps => ({
  changeSalaryHandler: (status: string) => dispatch(setStatus(status)),
  changeDateHandler: (date: string) => dispatch(setBirtDate(date))
});

export default connect(mapStateToProps, mapStateToDispatch)(Criteria);
