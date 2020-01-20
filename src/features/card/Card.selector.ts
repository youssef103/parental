import { createSelector } from "reselect";
import { AppState } from "../../store";
import { ICard } from "./Card.types";

export const getStatus = (state: AppState) => state.critera.status;

export const getBirthday = (state: AppState) => state.critera.birthday;

export const getStartDate = (state: AppState) =>
  state.priceBase.duration.startDate;

export const getEndDate = (state: AppState) => state.priceBase.duration.endDate;

export const getPBB1 = (state: AppState) => state.priceBase.pbb1;
export const getPBB2 = (state: AppState) => state.priceBase.pbb2;

export const getSalaryModel = (state: AppState): string =>
  state.salaryInfo.salaryModel || "";

export const getBasicSalary = (state: AppState): number =>
  state.salaryInfo.basicSalary || 0;

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

export const getCards = createSelector(
  [getPBB1, getPBB2, getSalaryModel, getBasicSalary],
  (PBB1, PBB2, SalaryModel, BasicSalary) => {
    let cards = [];
    cards[0] = generateCard(PBB1, BasicSalary, SalaryModel);

    if (PBB2 > 0) {
      cards[1] = generateCard(PBB2, BasicSalary, SalaryModel);
    }

    return cards;
  }
);

const generateCard = (
  pbb: number,
  basicSalary: number,
  salaryModel: string
): ICard => {
  const yearlySalary = basicSalary * 12;

  const ConvertedBasicSalary =
    salaryModel === "Rörlig" ? basicSalary * 1.235 : basicSalary;
  const max10PBB = pbb * 10;
  const max15PBB = pbb * 15;
  const parentalSalaryUpto10PBB =
    yearlySalary > max10PBB
      ? max10PBB * ((0.1 / 365) * 30)
      : yearlySalary * ((0.1 / 365) * 30);
  const excessFixedSalary =
    yearlySalary > max10PBB ? Math.min(yearlySalary, max15PBB) - max10PBB : 0;

  const parentalSalaryAbove10PBB = excessFixedSalary * ((0.9 / 365) * 30);
  const monthlyTotal =
    parentalSalaryAbove10PBB <= 0
      ? parentalSalaryAbove10PBB
      : parentalSalaryAbove10PBB + parentalSalaryAbove10PBB;

  return {
    ConvertedBasicSalary,
    max10PBB,
    max15PBB,
    excessFixedSalary,
    parentalSalaryUpto10PBB,
    parentalSalaryAbove10PBB,
    monthlyTotal
  };
};
