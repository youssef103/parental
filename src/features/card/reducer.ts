import {
  CardState,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes
} from "./types";

export const initialState: CardState = {
  loaded: false,
  data: []
};

export default (state = initialState, action: CardActionTypes): CardState => {
  switch (action.type) {
    case LOAD_CARD:
      return {
        loaded: true,
        data: [...state.data]
      };
    case LOAD_CARD_SECCUSS:
      return {
        loaded: false,
        data: [...state.data, action.payload]
      };
    case LOAD_CARD_FAILURE:
      return {
        loaded: false,
        data: []
      };

    default:
      return state;
  }
};
