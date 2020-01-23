import { connect } from "react-redux";

import { IMapCardStateToProps, ICardProps } from "./Card.types";
import { AppState } from "../../store";
import {
  getPBB1,
  getPBB2,
  checkCardDState,
  getErrors,
  getCompensationPeriod,
  getCardsData
} from "../../store/selector";

import { CardComponent } from "./components";

const mapStateToProps = (
  state: AppState
): IMapCardStateToProps & ICardProps => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  cards: getCardsData(state),
  loaded: checkCardDState(state),
  errors: getErrors(state),
  compensationPeriod: getCompensationPeriod(state)
});

export default connect(mapStateToProps, null)(CardComponent);
