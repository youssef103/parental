import { connect } from "react-redux";
import { CardComponent } from "./components";

import { AppState } from "../../store";
import { getPBB1, getPBB2, getCards, checkCardDState } from "./Card.selector";
import { IMapCardStateToProps, ICardProps } from "./Card.types";

const mapStateToProps = (
  state: AppState
): IMapCardStateToProps & ICardProps => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  cards: getCards(state),
  loaded: checkCardDState(state)
});

export default connect(mapStateToProps, null)(CardComponent);
