import { MiddlewareAPI } from "redux";
import { ThunkDispatchType, AppActions } from "../..";

export default ({ dispatch, getState }: MiddlewareAPI) => (
  next: ThunkDispatchType
) => (action: AppActions) => {
  next(action);
  /*switch (action.type) {
    default:
      return; //dispatch(setPBBError("55555"));
  }*/
};
