import { MiddlewareAPI, Dispatch, Action, Middleware, AnyAction } from "redux";
import { AppActionTypes, AppState } from "../../index";
import { ThunkDispatch } from "redux-thunk";
import { setPBBError2, setPBBError } from "./action";
import { setPBB } from "../../../features/price-base/action";

export default ({
  dispatch,
  getState
}: {
  dispatch: any;
  getState: () => AppState;
}) => (next: any) => (action: any) => {
  switch (action.type) {
    default:
      console.log("Log action", action.type);
      console.log("next action", next(action));
      console.log("next action", getState());
      return;
  }
};
