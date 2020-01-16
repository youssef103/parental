import { combineReducers } from "redux";
import { ErrorReducer } from "./middlewares/error";
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
  cards: CardReducer,
  errors: ErrorReducer
});
