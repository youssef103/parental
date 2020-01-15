import { Action } from "redux";

export const SALARY_HAS_ERROR = "SALARY_HAS_ERROR";
export const BIRTHDAY_HAS_ERROR = "BIRTHDAY_HAS_ERROR";
export const START_DATE_HAS_ERROR = "START_DATE_HAS_ERROR";
export const END_DATE_HAS_ERROR = "HEND_DATE_AS_ERROR";

export interface Error {}

interface setDurationAction extends Action {}
