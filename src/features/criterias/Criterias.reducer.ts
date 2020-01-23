import {
  CriteriaState,
  SET_STATUS,
  CriteriaActionTypes,
  SET_BIRTHDAY
} from "./Criterias.types";

const initialState: CriteriaState = {
  birthday: null,
  status: "",
  compensationPeriod: "",
  errors: {}
};

export default (
  state = initialState,
  action: CriteriaActionTypes
): CriteriaState => {
  switch (action.type) {
    case SET_BIRTHDAY:
      return {
        ...state,
        birthday: action.birthday,
        errors: { ...state.errors, birthday: action.error }
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
        compensationPeriod: action.compensationPeriod,
        errors: { ...state.errors, status: action.error }
      };

    default:
      return state;
  }
};
