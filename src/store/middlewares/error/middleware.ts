import { MiddlewareAPI } from "redux";
import { ThunkDispatchType, AppActions } from "../..";

export default ({ dispatch, getState }: MiddlewareAPI) => (
  next: ThunkDispatchType
) => (action: AppActions) => {
  try {
    next(action);
  } catch (e) {
    console.log("e.message");
  } finally {
  }
  /*switch (action.type) {
    default:
      return; //dispatch(setPBBError("55555"));
  }*/
};
