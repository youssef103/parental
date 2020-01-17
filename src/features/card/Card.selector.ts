import { createSelector } from "reselect";
import { AppState } from "../../store";

export const getStatus = (state: AppState) => state.critera.status;

export const getBirthday = (state: AppState) => state.critera.birthday;

export const getStartDate = (state: AppState) =>
  state.priceBase.duration.startDate;

export const getEndDate = (state: AppState) => state.priceBase.duration.endDate;

export const getPBB = (state: AppState) => state.priceBase.pbb;

export const getSalaryModel = (state: AppState) => state.salaryInfo.salaryModel;

export const getBasicSalary = (state: AppState) => state.salaryInfo.basicSalary;

// Errors
export const getBasicSalaryError = (state: AppState) =>
  state.errors.basicSalary;

export const getSalaryModelError = (state: AppState) =>
  state.errors.salaryModel;

export const getPBBError = (state: AppState) => state.errors.pbb;

export const getEndDateError = (state: AppState) => state.errors.endDate;

export const getStartDateError = (state: AppState) => state.errors.startDate;

export const getBirthdayError = (state: AppState) => state.errors.birthday;

export const getStatusError = (state: AppState) => state.errors.status;

export const generateCard = createSelector(
  [
    getStatus,
    getBirthday,
    getStartDate,
    getEndDate,
    getPBB,
    getSalaryModel,
    getBasicSalary
  ],
  (Status, Birthday, StartDate, EndDate, PBB, SalaryModel, BasicSalary) => {
    console.log({
      Status,
      Birthday,
      StartDate,
      EndDate,
      PBB,
      SalaryModel,
      BasicSalary
    });
  }
);
