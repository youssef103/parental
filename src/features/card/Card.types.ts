import { Action } from "redux";

export interface ICard {
  ConvertedBasicSalary: number;
  max10PBB: number;
  max15PBB: number;
  excessFixedSalary: number;
  parentalSalaryUpto10PBB: any;
  parentalSalaryAbove10PBB: number;
  monthlyTotal: number;
}

export interface IErrors {
  status?: string;
  birthday?: string;
  startDate?: string;
  endDate?: string;
  pbb1?: string;
  pbb2?: string;
  basicSalary?: string;
  salaryModel?: string;
}

export interface IMapCardStateToProps {
  loaded?: boolean;
  pbb1?: number;
  pbb2?: number;
  cards?: ICard[];
  errors?: IErrors;
}

export interface IMapCardStateToDispatch {
  loadCard?: (data: ICard[]) => any;
}

export interface CardState {
  loaded: boolean;
  data?: ICard[];
  errors?: IErrors;
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
  errors: IErrors;
}

export type CardActionTypes =
  | loadCardAction
  | loadCardSeccussAction
  | loadCardFailureAction;
