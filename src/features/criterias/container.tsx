import React, { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import EmployeeStatus from "./EmployeeStatusComponent";
import DatePicker from "./DatePickerComponent";

import { Row } from "../../utilities/layout";
import { AppState } from "../../store";
import { setStatus, setBirtDate } from "./action";

const Criteria: React.FC = (props: any) => {
  return (
    <div>
      <Row col={2}>
        <EmployeeStatus
          error={props.statusError}
          changeSalaryHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.changeSalaryHandler(e.target.value)
          }
        />
        <DatePicker
          changeDateHandler={props.changeDateHandler}
          birthday={props.birthday}
          error={props.birthdayError}
        />
      </Row>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  statusError: state.errors.status,
  birthday: state.critera.birthday,
  birthdayError: state.errors.birthday
});

const mapStateToDispatch = (dispatch: ThunkDispatch<AppState, any, any>) => ({
  changeSalaryHandler: (status: string) => dispatch(setStatus(status)),
  changeDateHandler: (date: string) => dispatch(setBirtDate(date))
});

export default connect(mapStateToProps, mapStateToDispatch)(Criteria);
