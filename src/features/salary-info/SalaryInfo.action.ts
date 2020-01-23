import { SET_BASIC_SALARY, SET_SALARY_MODEL } from "./SalaryInfo.types";
import { AppState, ThunkActionType, ThunkDispatchType } from "../../store";
import { errorMessages } from "../../utilities/config";

export const setBasicSalary = (basicSalary: number): ThunkActionType => (
  dispatch: ThunkDispatchType
) => {
  return dispatch({
    type: SET_BASIC_SALARY,
    basicSalary,
    error: isNaN(basicSalary)
      ? errorMessages.basicSalaryIsRequired
      : "" || basicSalary < 30000
      ? errorMessages.minSalary
      : ""
  });
};

export const setSalaryModel = (salaryModel: string): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
) => {
  return dispatch({
    type: SET_SALARY_MODEL,
    salaryModel,
    error: salaryModel === "" ? errorMessages.salaryModelIsRequiredsalary : ""
  });
};
