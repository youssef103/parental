import { ThunkActionType, ThunkDispatchType } from "../../store";
import { SET_BIRTHDAY, SET_STATUS } from "./Criterias.types";
import { errorMessages, hintMessages } from "../../utilities/config";

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
  const compensationPeriod =
    status === "mer än ett år"
      ? hintMessages.employedMoreThanOneYear
      : "" || status === "mer än tre år"
      ? hintMessages.employedMoreThanThreeYear
      : "";

  dispatch({
    type: SET_STATUS,
    status,
    error: status === "" ? errorMessages.statusIsRequired : "",
    compensationPeriod
  });
};
