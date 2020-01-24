import { AppState, ThunkActionType, ThunkDispatchType } from "../../store";
import {
  ICard,
  LOAD_CARD,
  LOAD_CARD_SECCUSS,
  LOAD_CARD_FAILURE,
  CardActionTypes
} from "./Card.types";
import { setCardsData, getErrors } from "../../store/selector";

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
  const data = setCardsData(getState());
  const errors = getErrors(getState());

  const { status, birthday } = getState().critera;
  const { pbb1, duration } = getState().priceBase;
  const { salaryModel } = getState().salaryInfo;

  if (
    status !== "" &&
    birthday &&
    pbb1 > 0 &&
    duration.startDate &&
    duration.endDate &&
    salaryModel !== ""
  ) {
    dispatch(loadingCard());

    setTimeout(() => {
      if (errors && errors.length > 0) {
        return dispatch(loadedCardFailure());
      }
      dispatch(loadedCardSeccuss(data));
    }, 700);
  }
};
