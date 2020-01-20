import { Action } from "redux";

export const SET_PBB1 = "[PRICE_BASE] SET_PBB1";
export const SET_PBB2 = "[PRICE_BASE] SET_PBB2";
export const SET_START_DATE = "[PRICE_BASE] SET_START_DATE";
export const SET_END_DATE = "[PRICE_BASE] SET_END_DATE";

export type IDuration = {
  readonly startDate?: null | string;
  readonly endDate?: null | string;
  readonly countOfDays?: undefined | number;
};

export interface IPriceBase {
  readonly pbb1: number;
  readonly pbb2: number;
  readonly duration: IDuration;
  readonly errors: {
    readonly pbb1: string;
    readonly pbb2: string;
    readonly startDate?: string;
    readonly endDate?: string;
  };
}

interface setPBB1Action extends Action {
  type: typeof SET_PBB1;
  pbb1: number;
  error: string;
}

interface setPBB2Action extends Action {
  type: typeof SET_PBB2;
  pbb2: number;
  error: string;
}

interface setStartDateAction extends Action {
  type: typeof SET_START_DATE;
  startDate?: null | string;
  error: string;
}

interface setEndDateAction extends Action {
  type: typeof SET_END_DATE;
  endDate?: null | string;
  error: string;
}

export type PriceBaseActionTypes =
  | setStartDateAction
  | setEndDateAction
  | setPBB1Action
  | setPBB2Action;
