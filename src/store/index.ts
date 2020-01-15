import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import rootReducers from "./rootReducers";
import {
  SalaryInfoActionTypes,
  CriteriaActionTypes,
  PriceBaseActionTypes,
  CardActionTypes
} from "../features";

const middlewares = [thunk];
const middleWareEnhancer = applyMiddleware(...middlewares);

export type AppState = ReturnType<typeof rootReducers>;
export type AppActionTypes =
  | CriteriaActionTypes
  | PriceBaseActionTypes
  | SalaryInfoActionTypes
  | CardActionTypes;

export const store = createStore(
  rootReducers,
  composeWithDevTools(middleWareEnhancer)
);
