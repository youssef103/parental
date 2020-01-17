import {
  CriteriaState,
  SET_STATUS,
  CriteriaActionTypes,
  SET_BIRTHDAY
} from "./types";

const initialState: CriteriaState = {
  birthday: null,
  status: ""
};

export default (
  state = initialState,
  action: CriteriaActionTypes
): CriteriaState => {
  switch (action.type) {
    case SET_BIRTHDAY:
      return { ...state, birthday: action.payload };

    case SET_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};
