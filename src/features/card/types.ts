import { Action } from "redux";
import { ICard } from "./ICard";

export interface CardState {
  loaded: boolean;
  data: ICard[];
}

// Describing the different ACTION NAMES available
export const LOAD_CARD = "LOAD_CARD";
export const LOAD_CARD_SECCUSS = "LOAD_CARD_SECCUSS";
export const LOAD_CARD_FAILURE = "LOAD_CARD_FIALURE";

interface loadCardAction extends Action {
  type: typeof LOAD_CARD;
}
interface loadCardSeccussAction extends Action {
  type: typeof LOAD_CARD_SECCUSS;
  payload: ICard;
}
interface loadCardFailureAction extends Action {
  type: typeof LOAD_CARD_FAILURE;
  payload: string;
}

export type CardActionTypes =
  | loadCardAction
  | loadCardSeccussAction
  | loadCardFailureAction;
