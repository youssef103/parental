import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk, {
  ThunkMiddleware,
  ThunkAction,
  ThunkDispatch
} from "redux-thunk";

import rootReducers from "./rootReducers";
import {
  SalaryInfoActionTypes,
  CriteriaActionTypes,
  PriceBaseActionTypes,
  CardActionTypes
} from "../features";

const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];
const middleWareEnhancer = applyMiddleware(...middlewares);

export type ThunkActionType = ThunkAction<void, AppState, null, AppActions>;
export type ThunkDispatchType = ThunkDispatch<AppState, any, AppActions>;

export type AppState = ReturnType<typeof rootReducers>;

export type AppActions =
  | CriteriaActionTypes
  | PriceBaseActionTypes
  | SalaryInfoActionTypes
  | CardActionTypes;

export const store: Store<AppState> = createStore(
  rootReducers,
  composeWithDevTools(middleWareEnhancer)
);
