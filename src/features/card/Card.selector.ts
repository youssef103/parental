import { createSelector } from "reselect";
import { AppState } from "../../store";

export const getStatus = (state: AppState) => state.critera.status;

export const getBirthday = (state: AppState) => state.critera.birthday;

export const getStartDate = (state: AppState) =>
  state.priceBase.duration.startDate;

export const getEndDate = (state: AppState) => state.priceBase.duration.endDate;

export const getPBB1 = (state: AppState) => state.priceBase.pbb1 || 22000;
export const getPBB2 = (state: AppState) => state.priceBase.pbb2 || 22000;

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
    getPBB1,
    getPBB2,
    getSalaryModel,
    getBasicSalary
  ],
  (
    Status,
    Birthday,
    StartDate,
    EndDate,
    PBB1,
    PBB2,
    SalaryModel,
    BasicSalary
  ) => {
    /*let ConvertedBasicSalary: any =
      SalaryModel === "Rörlig" ? 72222 * 1.235 : BasicSalary;*/

    let yearlySalary = 30000 * 12;
    let max10PBB = PBB2 * 10;
    let max15PBB = PBB2 * 15;
    let excessFixedSalary =
      yearlySalary > PBB2 * 10
        ? Math.min(yearlySalary, max15PBB) - max10PBB
        : 0;
    let parentalSalaryUpTo10PBB =
      yearlySalary > PBB2 * 10
        ? max10PBB * ((0.1 / 365) * 30)
        : yearlySalary * ((0.1 / 365) * 30);
    let parentalSalaryAbove10PBB = excessFixedSalary * ((0.9 / 365) * 30);
    let monthlyTotal =
      parentalSalaryAbove10PBB <= 0
        ? parentalSalaryAbove10PBB
        : parentalSalaryAbove10PBB + parentalSalaryAbove10PBB;

    return [
      {
        max10PBB,
        max15PBB,
        excessFixedSalary,
        parentalSalaryUpTo10PBB,
        parentalSalaryAbove10PBB,
        monthlyTotal
      }
    ];
  }
);
