import { IPriceBase } from "./IPriceBase";
import { PriceBaseActionTypes, SET_PBB, SET_DURATION } from "./types";

const initialState: IPriceBase = {
  pbb: [],
  duration: {
    startDate: null,
    endDate: null,
    countOfDays: undefined
  }
};

export default (
  state = initialState,
  action: PriceBaseActionTypes
): IPriceBase => {
  switch (action.type) {
    case SET_PBB:
      return { ...state, pbb: [...state.pbb, action.payload] };

    case SET_DURATION:
      return { ...state, duration: { ...state.duration, ...action.payload } };

    default:
      return state;
  }
};
