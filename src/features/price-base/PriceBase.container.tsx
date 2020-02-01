import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import { AppState, AppActions } from "../../store";
import { setPBB1, setPBB2, setDuration } from "./PriceBase.action";

import { Duration, BasicAmount } from "./components";

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
  getDurationData,
  getPriceBaseErrors
} from "./PriceBase.selector";

const mapStateToProps = (state: AppState): IMapPriceBaseStateToProps => ({
  birthday: getBirthday(state),
  startDate: getStartDate(state),
  endDate: getEndDate(state),
  years: getYears(state),
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  countOfDays: getDurationData(state).countOfDays,
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

export default {
  Duration: connect(mapStateToProps, mapStateToDispatch)(Duration),
  BasicAmount: connect(mapStateToProps, mapStateToDispatch)(BasicAmount)
};
