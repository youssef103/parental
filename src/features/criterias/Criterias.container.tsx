import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { EmployeeStatusComponent, DatePickerComponent } from "./components";

import { AppState } from "../../store";
import {
  getBirthday,
  getStatusError,
  getBirthdayError
} from "./Criterias.Selector";
import { setStatus, setBirtDate } from "./Criterias.action";

import { Row } from "../../utilities/styles/layout";

import {
  EmployeeStatusProps,
  DatePickerProps,
  CriteriaActionTypes,
  IMapCriteriaStateToProps,
  IMapCriteriaDispatchProps
} from "./Criterias.types";

type IProps = EmployeeStatusProps &
  DatePickerProps &
  IMapCriteriaStateToProps &
  IMapCriteriaDispatchProps &
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

const mapStateToProps = (state: AppState): IMapCriteriaStateToProps => ({
  birthday: getBirthday(state),
  statusError: getStatusError(state),
  birthdayError: getBirthdayError(state)
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, CriteriaActionTypes>
): IMapCriteriaDispatchProps => ({
  changeSalaryHandler: (status: string) => dispatch(setStatus(status)),
  changeDateHandler: (date: string) => dispatch(setBirtDate(date))
});

export default connect(mapStateToProps, mapStateToDispatch)(Criteria);
