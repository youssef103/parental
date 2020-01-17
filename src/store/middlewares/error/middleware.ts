import { MiddlewareAPI } from "redux";
import { ThunkDispatchType, AppActions } from "../..";

export default ({ dispatch, getState }: MiddlewareAPI) => (
  next: ThunkDispatchType
) => (action: AppActions) => {
  switch (action.type) {
    default:
      console.log("Log action", action.type);
      console.log("next action", next(action));
      console.log("next action", getState());
      return; //dispatch(setPBBError("55555"));
  }
};
