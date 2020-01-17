import React from "react";
import { Row } from "../../utilities/layout";
import { Duration, BasicAmount } from ".";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { setPBB } from "./action";

interface Props {}

const PriceBase: React.FC<any> = (props: any) => {
  //const { startDate, endDate, countOfDays, pbb, onPBBChangeHandler } = props;
  return (
    <Row col={2}>
      <Duration />
      <BasicAmount />
    </Row>
  );
};

const mapStateToProps = (state: AppState) => ({
  startDate: state.priceBase.duration.startDate,
  endDate: state.priceBase.duration.endDate,
  countOfDays: state.priceBase.duration.countOfDays,
  pbb: state.priceBase.pbb
});

const mapStateToDispatch = (dispatch: ThunkDispatch<AppState, any, any>) => ({
  onDatesChange: () => dispatch({ type: "" }),
  onPBBChangeHandler: (pbb: any) => dispatch(setPBB(pbb))
});

export default connect(mapStateToProps, mapStateToDispatch)(PriceBase);
