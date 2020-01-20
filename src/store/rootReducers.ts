import { combineReducers } from "redux";
import {
  CardReducer,
  CriteriaReducer,
  SalaryInfoReducer,
  PriceBaseReducer
} from "../features";

export default combineReducers({
  critera: CriteriaReducer,
  priceBase: PriceBaseReducer,
  salaryInfo: SalaryInfoReducer,
  cards: CardReducer
});
