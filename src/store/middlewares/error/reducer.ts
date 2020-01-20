import {
  STATUS_HAS_ERROR,
  BIRTHDAY_HAS_ERROR,
  START_DATE_HAS_ERROR,
  PBB_HAS_ERROR,
  END_DATE_HAS_ERROR,
  SALARY_MODEL_HAS_ERROR,
  SALARY_HAS_ERROR,
  ErrorState,
  ErrorActionTypes
} from "./types";

const initialState: ErrorState = {
  status: undefined,
  birthday: undefined,
  startDate: undefined,
  endDate: undefined,
  pbb: undefined,
  countOfDays: undefined,
  salaryModel: undefined,
  basicSalary: undefined
};

export default (state = initialState, action: ErrorActionTypes): ErrorState => {
  switch (action.type) {
    case STATUS_HAS_ERROR:
      return { ...state, status: action.payload };
    case BIRTHDAY_HAS_ERROR:
      return { ...state, birthday: action.payload };
    case START_DATE_HAS_ERROR:
      return { ...state, startDate: action.payload };
    case END_DATE_HAS_ERROR:
      return { ...state, endDate: action.payload };
    case PBB_HAS_ERROR:
      return { ...state, pbb: action.payload };
    case SALARY_MODEL_HAS_ERROR:
      return { ...state, salaryModel: action.payload };
    case SALARY_HAS_ERROR:
      return { ...state, birthday: action.payload };
    default:
      return state;
  }
};
