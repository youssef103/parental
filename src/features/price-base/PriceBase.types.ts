import { Action } from "redux";
import moment from "moment";

export const SET_PBB1 = "[PRICE_BASE] SET_PBB1";
export const SET_PBB2 = "[PRICE_BASE] SET_PBB2";
export const SET_START_DATE = "[PRICE_BASE] SET_START_DATE";
export const SET_END_DATE = "[PRICE_BASE] SET_END_DATE";

export type IDuration = {
  readonly startDate?: moment.Moment | string | null;
  readonly endDate?: moment.Moment | string | null;
  readonly birthday?: moment.Moment | string | null;
  readonly countOfDays?: string | undefined;
  readonly error?: { startDate: string; endDate: string } | string;
};

export interface IMapDurationStateToDispatch {
  onDatesChanges?: (startDate: any, endDate: any) => void;
}

export interface IBasicAmount {
  year?: string;
  value: string;
  error: string;
  onChange: (pbb: string) => void;
}

export interface IBasicAmountConnectedComponent {
  year?: number | undefined;
  value?: number | undefined;
  onChange?: (pbb: number) => void;
}

export interface IMapBasicAmountToState {
  readonly pbb1: number | undefined;
  readonly pbb2: number | undefined;
  readonly years: number[];
}

export interface IMapBasicAmountToDispatch {
  onPBB1ChangeHandler: (pbb1: number) => void;
  onPBB2ChangeHandler: (pbb2: number) => void;
}
export interface IPriceBaseError {
  errors: {
    readonly pbb1: string;
    readonly pbb2: string;
    readonly startDate?: string;
    readonly endDate?: string;
  };
}

export type IMapPriceBaseStateToProps = IDuration &
  IMapBasicAmountToState &
  IPriceBaseError;
/*{
  readonly errors: IPriceBaseError;
}*/

export type IMapPriceBaseStateToDispatch = IMapBasicAmountToDispatch &
  IMapDurationStateToDispatch;
export interface IPriceBase {
  readonly pbb1: number;
  readonly pbb2: number | undefined;
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
  pbb2: number | undefined;
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
