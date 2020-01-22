import {
  SalaryInfoActionTypes,
  SET_SALARY_MODEL,
  SET_BASIC_SALARY,
  ISalaryInfo
} from "./SalaryInfo.types";

const initialState: ISalaryInfo = {
  basicSalary: 30000,
  salaryModel: "",
  errors: {
    basicSalary: "",
    salaryModel: ""
  }
};

export default (
  state = initialState,
  action: SalaryInfoActionTypes
): ISalaryInfo => {
  switch (action.type) {
    case SET_BASIC_SALARY:
      return {
        ...state,
        basicSalary: action.basicSalary,
        errors: {
          basicSalary: action.error
        }
      };
    case SET_SALARY_MODEL:
      return {
        ...state,
        salaryModel: action.salaryModel,
        errors: { salaryModel: action.error }
      };
    default:
      return state;
  }
};
