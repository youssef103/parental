import {
  CardState,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes
} from "./Card.types";

export const initialState: CardState = {
  loaded: true,
  data: [],
  errors: {}
};

export default (state = initialState, action: CardActionTypes): CardState => {
  switch (action.type) {
    case LOAD_CARD:
      return {
        loaded: false,
        data: [],
        errors: {}
      };
    case LOAD_CARD_SECCUSS:
      return {
        ...state,
        loaded: true,
        data: [...action.data]
      };
    case LOAD_CARD_FAILURE:
      return {
        ...state,
        loaded: false,
        data: [],
        errors: { ...action.errors }
      };

    default:
      return state;
  }
};
