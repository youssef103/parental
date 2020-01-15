import { ISalaryInfo } from "./ISalaryInfo";
import {
  SalaryInfoActionTypes,
  SET_SALARY_TYPE,
  SET_BASIC_SALARY
} from "./types";

const initialState: ISalaryInfo = {
  basicSalary: "",
  salaryType: ""
};

export default (
  state = initialState,
  action: SalaryInfoActionTypes
): ISalaryInfo => {
  switch (action.type) {
    case SET_BASIC_SALARY:
      return { ...state, basicSalary: action.payload };
    case SET_SALARY_TYPE:
      return { ...state, salaryType: action.payload };
    default:
      return state;
  }
};
