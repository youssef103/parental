import { Action } from "redux";
import { IDuration, IPBB } from "./IPriceBase";

export const SET_PBB = "SET_PBB";
export const SET_DURATION = "SET_DURATION";

interface setPBBAction extends Action {
  type: typeof SET_PBB;
  payload: IPBB;
}

interface setDurationAction extends Action {
  type: typeof SET_DURATION;
  payload: IDuration;
}

export type PriceBaseActionTypes = setDurationAction | setPBBAction;
