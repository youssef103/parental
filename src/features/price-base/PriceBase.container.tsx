import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import { AppState, AppActions } from "../../store";
import { setPBB1, setPBB2, setDuration } from "./PriceBase.action";

import { Duration, BasicAmount } from "./components";

import { Row } from "../../utilities/styles/layout";
import {
  IMapPriceBaseStateToDispatch,
  IMapPriceBaseStateToProps
} from "./PriceBase.types";

import {
  getStartDate,
  getEndDate,
  getPBB1,
  getPBB2,
  getBirthday
} from "../../store/selector";

import {
  getYears,
  getCountOfDays,
  getPriceBaseErrors
} from "./PriceBase.selector";

const PriceBase: React.FC<IMapPriceBaseStateToProps &
  IMapPriceBaseStateToDispatch &
  any> = props => {
  const {
    birthday,
    startDate,
    endDate,
    onDatesChanges,
    countOfDays,
    pbb1,
    pbb2,
    onPBB1ChangeHandler,
    onPBB2ChangeHandler,
    years,
    errors
  } = props;
  return (
    <Row col={2}>
      <Duration
        birthday={birthday}
        startDate={startDate}
        endDate={endDate}
        countOfDays={countOfDays}
        onDatesChanges={onDatesChanges}
        error={{
          startDate: errors.startDate,
          endDate: errors.endDate
        }}
      />

      <Row col={years.length === 2 && years[1] ? 2 : 1}>
        <BasicAmount
          year={years[0]}
          value={pbb1}
          error={errors.pbb1}
          onChange={onPBB1ChangeHandler}
        />
        {years.length === 2 && years[1] && (
          <BasicAmount
            year={years[1]}
            value={pbb2}
            error={errors.pbb2}
            onChange={onPBB2ChangeHandler}
          />
        )}
      </Row>
    </Row>
  );
};

const mapStateToProps = (state: AppState): IMapPriceBaseStateToProps => ({
  birthday: getBirthday(state),
  startDate: getStartDate(state),
  endDate: getEndDate(state),
  years: getYears(state),
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  countOfDays: getCountOfDays(state),
  errors: getPriceBaseErrors(state)
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, AppActions>
): IMapPriceBaseStateToDispatch => ({
  onPBB1ChangeHandler: pbb1 => dispatch(setPBB1(pbb1)),
  onPBB2ChangeHandler: pbb2 => dispatch(setPBB2(pbb2)),
  onDatesChanges: (startDate, endDate) =>
    dispatch(setDuration(startDate, endDate))
});

export default connect(mapStateToProps, mapStateToDispatch)(PriceBase);
