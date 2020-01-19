import { connect } from "react-redux";
import { CardComponent } from "./components";

import { AppState } from "../../store";
import { getPBB1, getPBB2 } from "./Card.selector";

const mapStateToProps = (state: AppState) => ({
  pbb1: getPBB1(state),
  pbb2: getPBB2(state)
});

export default connect(mapStateToProps, null)(CardComponent);
