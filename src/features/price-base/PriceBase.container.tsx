import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

import { Row } from "../../utilities/styles/layout";
import { AppState } from "../../store";
import { Duration, BasicAmount } from "./components";
import { setPBB1, setPBB2 } from "./PriceBase.action";
import { getYears, getPriceBaseErrors } from "./PriceBase.selector";

interface Props {}

const PriceBase: React.FC<any> = (props: any) => {
  const {
    pbb1,
    pbb2,
    onPBB1ChangeHandler,
    onPBB2ChangeHandler,
    years,
    errors
  } = props;
  return (
    <Row col={2}>
      <Duration />
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

const mapStateToProps = (state: AppState) => ({
  startDate: state.priceBase.duration.startDate,
  endDate: state.priceBase.duration.endDate,
  countOfDays: "",
  years: getYears(state),
  pbb1: state.priceBase.pbb1,
  pbb2: state.priceBase.pbb2,
  errors: getPriceBaseErrors(state)
});

const mapStateToDispatch = (dispatch: ThunkDispatch<AppState, any, any>) => ({
  onPBB1ChangeHandler: (pbb1: number) => dispatch(setPBB1(pbb1)),
  onPBB2ChangeHandler: (pbb2: number) => dispatch(setPBB2(pbb2))
});

export default connect(mapStateToProps, mapStateToDispatch)(PriceBase);
