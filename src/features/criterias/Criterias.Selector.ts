import { AppState } from "../../store";

export const getBirthday = (state: AppState) => state.critera.birthday;
export const getStatus = (state: AppState) => state.critera.status;
export const getStatusError = (state: AppState) => state.critera.errors.status;
export const getBirthdayError = (state: AppState) =>
  state.critera.errors.birthday;
