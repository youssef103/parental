import { ISalaryInfo } from "./ISalaryInfo";
import {
  SalaryInfoActionTypes,
  SET_SALARY_MODEL,
  SET_BASIC_SALARY
} from "./types";

const initialState: ISalaryInfo = {
  basicSalary: "30000",
  salaryModel: ""
};

export default (
  state = initialState,
  action: SalaryInfoActionTypes
): ISalaryInfo => {
  switch (action.type) {
    case SET_BASIC_SALARY:
      return { ...state, basicSalary: action.payload };
    case SET_SALARY_MODEL:
      return { ...state, salaryModel: action.payload };
    default:
      return state;
  }
};
