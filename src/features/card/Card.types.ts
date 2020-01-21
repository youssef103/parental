import { Action } from "redux";

export interface ICard {
  ConvertedBasicSalary: number;
  max10PBB: number;
  max15PBB: number;
  excessFixedSalary: number;
  parentalSalaryUpto10PBB: any;
  parentalSalaryAbove10PBB: number;
  total: number;
}

export interface ICardsErrors {
  status?: string | null;
  birthday?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  pbb1?: string | null;
  pbb2?: string | null;
  salaryModel?: string | null;
  basicSalary?: string | null;
}

export interface ICardProps {
  loaded?: boolean;
  cards?: ICard[];
  errors?: ICardsErrors;
}

export interface IMapCardStateToProps {
  pbb1?: number;
  pbb2?: number;
}

export interface CardState {
  loaded: boolean;
  data?: ICard[];
  errors?: ICardsErrors;
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
  errors: ICardsErrors;
}

export type CardActionTypes =
  | loadCardAction
  | loadCardSeccussAction
  | loadCardFailureAction;
