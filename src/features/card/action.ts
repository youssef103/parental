import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ICard } from "./ICard";
import {
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardState,
  CardActionTypes
} from "./types";

const loadingCard = (): CardActionTypes => ({
  type: LOAD_CARD
});

const loadedCardSeccuss = (card: ICard): CardActionTypes => ({
  type: LOAD_CARD_SECCUSS,
  payload: card
});

const loadedCardFailure = (error: string): CardActionTypes => ({
  type: LOAD_CARD_FAILURE,
  payload: error
});

const startLoadCard = (
  data: ICard
): ThunkAction<void, CardState, null, CardActionTypes> => (
  dispatch: Dispatch<CardActionTypes>,
  getState: () => CardState
): void => {
  dispatch(loadingCard());

  try {
    dispatch(loadedCardSeccuss(data));
  } catch (err) {
    dispatch(loadedCardFailure(err.message));
  }
};
