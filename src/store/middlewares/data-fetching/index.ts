import { MiddlewareAPI } from "redux";
import { ThunkDispatchType, AppActions } from "../..";
import { LOAD_CARD, startLoadCard } from "../../../features";

export const dataFetching = ({
  dispatch,
  getState
}: MiddlewareAPI<ThunkDispatchType>) => (next: ThunkDispatchType) => (
  action: AppActions
) => {
  next(action);

  if (!action.type.includes(LOAD_CARD)) {
    return dispatch(startLoadCard());
  }
};
