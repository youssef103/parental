import { ThunkActionType, ThunkDispatchType } from "../../store";
import { errorMessages } from "../../utilities/config/text.config";
import { SET_BIRTHDAY, SET_STATUS } from "./Criterias.types";

export const setBirtDate = (birthday: string | null): ThunkActionType => (
  dispatch: ThunkDispatchType
): void => {
  dispatch({
    type: SET_BIRTHDAY,
    birthday,
    error: birthday === null ? errorMessages.birthdayIsRequired : ""
  });
};

export const setStatus = (status: string): ThunkActionType => (
  dispatch: ThunkDispatchType
): void => {
  dispatch({
    type: SET_STATUS,
    status,
    error: status === "" ? errorMessages.statusIsRequired : ""
  });
};
