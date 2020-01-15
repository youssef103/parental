import { AppState, AppActionTypes } from "../index";

const initialState: any = {};

export default (state = initialState, action: AppActionTypes): any => {
  switch (action.type) {
    default:
      return state;
  }
};
