import { Action } from "redux";

export interface ICard {
  ConvertedBasicSalary: number;
  max10PBB: number;
  max15PBB: number;
  excessFixedSalary: number;
  parentalSalaryUpto10PBB: number;
  parentalSalaryAbove10PBB: number;
  total: number;
}

export interface ICardProps {
  loaded?: boolean;
  cards?: ICard[];
  compensationPeriod?: string;
  errors?: string[];
}

export interface IMapCardStateToProps {
  pbb1?: number;
  pbb2?: number;
}

export interface CardState {
  loaded: boolean;
  data?: ICard[];
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
  data: ICard[];
}
interface loadCardFailureAction extends Action {
  type: typeof LOAD_CARD_FAILURE;
}

export type CardActionTypes =
  | loadCardAction
  | loadCardSeccussAction
  | loadCardFailureAction;
