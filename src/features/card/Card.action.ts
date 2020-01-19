import {
  ICard,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes
} from "./Card.types";

export const loadingCard = (): CardActionTypes => ({
  type: LOAD_CARD
});

export const loadedCardSeccuss = (card: ICard): CardActionTypes => ({
  type: LOAD_CARD_SECCUSS,
  payload: card
});

export const loadedCardFailure = (error: string): CardActionTypes => ({
  type: LOAD_CARD_FAILURE,
  payload: error
});

/*
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
*/
