import { AppState, ThunkActionType, ThunkDispatchType } from "../../store";
import {
  ICard,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes
} from "./Card.types";
import { getCards, getErrors } from "../../store/selector";

export const loadingCard = (): CardActionTypes => ({
  type: LOAD_CARD
});

export const loadedCardSeccuss = (data: ICard[]): CardActionTypes => ({
  type: LOAD_CARD_SECCUSS,
  data
});

export const loadedCardFailure = (): CardActionTypes => ({
  type: LOAD_CARD_FAILURE
});

export const startLoadCard = (): ThunkActionType => (
  dispatch: ThunkDispatchType,
  getState: () => AppState
) => {
  dispatch(loadingCard());

  const data = getCards(getState());
  const errors = getErrors(getState());

  setTimeout(() => {
    if (errors && Object.keys(errors).length > 0) {
      return dispatch(loadedCardFailure());
    }
    dispatch(loadedCardSeccuss(data));
  }, 700);
};
