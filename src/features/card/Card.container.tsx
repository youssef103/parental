import { connect } from "react-redux";
import { CardComponent } from "./components";

import { AppState } from "../../store";
import {
  getPBB1,
  getPBB2,
  getCards,
  getCardStatus,
  getErrors
} from "./Card.selector";
import {
  IMapCardStateToProps,
  CardActionTypes,
  ICard,
  IMapCardStateToDispatch
} from "./Card.types";
import { ThunkDispatch } from "redux-thunk";
import { startLoadCard } from "./Card.action";

const mapStateToProps = (state: AppState): IMapCardStateToProps => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  cards: getCards(state),
  loaded: getCardStatus(state),
  errors: getErrors(state)
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, CardActionTypes>
): IMapCardStateToDispatch => ({
  loadCard: (data: ICard[]) => dispatch(startLoadCard(data))
});

export default connect(mapStateToProps, mapStateToDispatch)(CardComponent);
