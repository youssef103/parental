import { connect } from "react-redux";
import { CardComponent } from "./components";

import { AppState } from "../../store";
import { getPBB1, getPBB2, getCards } from "./Card.selector";
import { ICard } from "./Card.types";

type IMapStateToProps2 = {
  pbb1: number;
  pbb2: number;
  cards: ICard[];
};
const mapStateToProps = (state: AppState): IMapStateToProps2 & any => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state),
  cards: getCards(state)
});

export default connect(mapStateToProps, null)(CardComponent);
