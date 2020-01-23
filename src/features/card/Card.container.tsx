import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { IMapCardStateToProps, ICardProps } from "./Card.types";
import { startLoadCard } from "./Card.action";
import { AppState, AppActions } from "../../store";
import {
  getPBB1,
  getPBB2,
  getCards,
  checkCardDState,
  getErrors,
  getCompensationPeriod
} from "../../store/selector";

import { CardComponent } from "./components";

const mapStateToProps = (
  state: AppState
): IMapCardStateToProps & ICardProps & any => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  cards: getCards(state),
  loaded: checkCardDState(state),
  errors: getErrors(state),
  compensationPeriod: getCompensationPeriod(state)
});

const mapstateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, AppActions>
): any => ({
  loadCard: () => dispatch(startLoadCard())
});

export default connect(mapStateToProps, mapstateToDispatch)(CardComponent);
