import { MiddlewareAPI } from "redux";
import { ThunkDispatchType, AppActions } from "../..";

export default ({ dispatch, getState }: MiddlewareAPI) => (
  next: ThunkDispatchType
) => (action: AppActions) => {
  switch (action.type) {
    default:
      return; //dispatch(setPBBError("55555"));
  }
};
