import moment from "moment";
import { PBB } from "../../constants";
import {
  PriceBaseActionTypes,
  SET_PBB1,
  SET_PBB2,
  IPriceBase,
  SET_START_DATE,
  SET_END_DATE
} from "./PriceBase.types";

const initialState: IPriceBase = {
  pbb1: PBB[moment().year()],
  pbb2: undefined,
  duration: {
    startDate: null,
    endDate: null,
    countOfDays: undefined
  },
  errors: {
    startDate: "",
    endDate: "",
    pbb1: "",
    pbb2: ""
  }
};

export default (
  state = initialState,
  action: PriceBaseActionTypes
): IPriceBase => {
  switch (action.type) {
    case SET_PBB1:
      return {
        ...state,
        pbb1: action.pbb1,
        //pbb2: 0,
        errors: { ...state.errors, pbb1: action.error }
      };

    case SET_PBB2:
      return {
        ...state,
        pbb2: action.pbb2,
        errors: { ...state.errors, pbb2: action.error }
      };

    case SET_START_DATE:
      return {
        ...state,
        duration: {
          ...state.duration,
          startDate: action.startDate
        },
        errors: {
          ...state.errors,
          startDate: action.error
        }
      };
    case SET_END_DATE:
      return {
        ...state,
        duration: {
          ...state.duration,
          endDate: action.endDate
        },
        errors: {
          ...state.errors,
          endDate: action.error
        }
      };
    default:
      return state;
  }
};
