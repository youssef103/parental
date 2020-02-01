import { connect } from "react-redux";

import { IMapCardStateToProps, ICardProps } from "./Card.types";
import { AppState } from "../../store";
import {
  getPBB1,
  getPBB2,
  checkCardDState,
  getErrors,
  getCompensationInfo,
  getCardsData
} from "../../store/selector";

import { CardComponent } from "./components";
import { getDurationData } from "../price-base/PriceBase.selector";

const mapStateToProps = (
  state: AppState
): IMapCardStateToProps & ICardProps => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  cards: getCardsData(state),
  loaded: checkCardDState(state),
  errors: getErrors(state),
  compensationInfo: getCompensationInfo(state),
  periodInfo: getDurationData(state).periodInfo
});

export default connect(mapStateToProps, null)(CardComponent);
