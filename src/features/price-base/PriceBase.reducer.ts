import { IPriceBase } from "./IPriceBase";
import { PriceBaseActionTypes, SET_PBB, SET_DURATION } from "./PriceBase.types";

const initialState: any = {
  pbb: "46700",
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
      return { ...state, pbb: action.payload };

    case SET_DURATION:
      return { ...state, duration: { ...state.duration, ...action.payload } };

    default:
      return state;
  }
};
