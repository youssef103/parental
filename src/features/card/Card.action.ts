import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../store";
import {
  ICard,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes,
  ICardsErrors
} from "./Card.types";

export const loadingCard = (): CardActionTypes => ({
  type: LOAD_CARD
});

export const loadedCardSeccuss = (data: ICard[]): CardActionTypes => ({
  type: LOAD_CARD_SECCUSS,
  data
});

export const loadedCardFailure = (errors: ICardsErrors): CardActionTypes => ({
  type: LOAD_CARD_FAILURE,
  errors
});

export const startLoadCard = (
  data: ICard[]
): ThunkAction<void, AppState, null, CardActionTypes> => (
  dispatch: Dispatch<CardActionTypes>,
  getState: () => AppState
): void => {
  dispatch(loadingCard());

  //const {errors}= getState().cards;
  try {
    dispatch(loadedCardSeccuss(data));
  } catch (err) {
    dispatch(loadedCardFailure(err.message));
  }
};
