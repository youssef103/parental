import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk, { ThunkMiddleware, ThunkAction } from "redux-thunk";
import { ErrorActionTypes, errorMiddleWare } from "./middlewares";

import rootReducers from "./rootReducers";
import {
  SalaryInfoActionTypes,
  CriteriaActionTypes,
  PriceBaseActionTypes,
  CardActionTypes
} from "../features";

const middlewares = [
  thunk as ThunkMiddleware<AppState, AppActionTypes>,
  errorMiddleWare as ThunkMiddleware<AppState, AppActionTypes>
];
const middleWareEnhancer = applyMiddleware(...middlewares);

export type ThunkType = ThunkAction<void, AppState, null, AppActionTypes>;

export type AppState = ReturnType<typeof rootReducers>;
export type AppActionTypes =
  | CriteriaActionTypes
  | PriceBaseActionTypes
  | SalaryInfoActionTypes
  | CardActionTypes
  | ErrorActionTypes;

export const store: Store<AppState> = createStore(
  rootReducers,
  composeWithDevTools(middleWareEnhancer)
);
