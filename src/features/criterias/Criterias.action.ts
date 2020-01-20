import { ThunkDispatch } from "redux-thunk";
import { ThunkActionType } from "../../store";
import {
  SET_BIRTHDAY,
  SET_STATUS,
  CriteriaActionTypes,
  CriteriaState
} from "./Criterias.types";
import { errorMessages } from "../../utilities/config/text.config";

export const setBirtDate = (birthday: string | null): ThunkActionType => (
  dispatch: ThunkDispatch<CriteriaState, any, CriteriaActionTypes>
): void => {
  dispatch({
    type: SET_BIRTHDAY,
    birthday,
    error: birthday === null ? errorMessages.birthdayIsRequired : ""
  });
};

export const setStatus = (status: string): ThunkActionType => (
  dispatch: ThunkDispatch<CriteriaState, any, CriteriaActionTypes>
): void => {
  dispatch({
    type: SET_STATUS,
    status,
    error: status === "" ? errorMessages.statusIsRequired : ""
  });
};
