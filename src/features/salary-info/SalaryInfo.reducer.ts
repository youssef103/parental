import {
  SalaryInfoActionTypes,
  SET_SALARY_MODEL,
  SET_BASIC_SALARY,
  ISalaryInfo
} from "./SalaryInfo.types";

const initialState: ISalaryInfo = {
  basicSalary: 30000,
  salaryModel: ""
};

export default (
  state = initialState,
  action: SalaryInfoActionTypes
): ISalaryInfo => {
  switch (action.type) {
    case SET_BASIC_SALARY:
      return { ...state, basicSalary: action.basicSalary };
    case SET_SALARY_MODEL:
      return { ...state, salaryModel: action.salaryModel };
    default:
      return state;
  }
};
