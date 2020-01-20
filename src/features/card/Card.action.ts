import {
  ICard,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes,
  IErrors
} from "./Card.types";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "react";
import { AppState } from "../../store";

export const loadingCard = (): CardActionTypes => ({
  type: LOAD_CARD
});

export const loadedCardSeccuss = (card: ICard[]): CardActionTypes => ({
  type: LOAD_CARD_SECCUSS,
  data: card
});

export const loadedCardFailure = (errors: IErrors): CardActionTypes => ({
  type: LOAD_CARD_FAILURE,
  errors: errors
});

export const startLoadCard = (
  data: ICard[]
): ThunkAction<void, AppState, null, CardActionTypes> => (
  dispatch: Dispatch<CardActionTypes>,
  getState: () => AppState
) => {
  dispatch(loadingCard());

  const { errors } = getState().cards;

  if (errors && Object.entries(errors).length > 0) {
    return dispatch(loadedCardFailure(errors));
  }

  return dispatch(loadedCardSeccuss(data));
};
