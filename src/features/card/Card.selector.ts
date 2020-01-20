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

export const checkCardDState = (state: AppState): boolean => state.cards.loaded;

// Errors
export const getStatusError = (state: AppState) =>
  state.cards.errors?.status || null;
export const getBirthdayError = (state: AppState) =>
  state.cards.errors?.birthday || null;

export const getStartDateError = (state: AppState) =>
  state.cards.errors?.startDate || null;

export const getEndDateError = (state: AppState) =>
  state.cards.errors?.endDate || null;

export const getPBB1Error = (state: AppState) =>
  state.cards.errors?.pbb1 || null;
export const getPBB2Error = (state: AppState) =>
  state.cards.errors?.pbb2 || null;

export const getSalaryModelError = (state: AppState) =>
  state.cards.errors?.salaryModel || null;
export const getBasicSalaryError = (state: AppState) =>
  state.cards.errors?.basicSalary || null;

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
  const yearlySalary: number = basicSalary * 12;

  const ConvertedBasicSalary: number =
    salaryModel === "Rörlig" ? round(basicSalary * 1.235) : round(basicSalary);

  const max10PBB: number = round(pbb * 10);
  const max15PBB: number = round(pbb * 15);

  const parentalSalaryUpto10PBB =
    yearlySalary > max10PBB
      ? round(max10PBB * ((0.1 / 365) * 30))
      : round(yearlySalary * ((0.1 / 365) * 30));

  const excessFixedSalary: number =
    yearlySalary > max10PBB
      ? round(Math.min(yearlySalary, max15PBB) - max10PBB)
      : 0;

  const parentalSalaryAbove10PBB: number = round(
    excessFixedSalary * ((0.9 / 365) * 30),
    2
  );
  const monthlyTotal: number =
    parentalSalaryAbove10PBB <= 0
      ? parentalSalaryUpto10PBB
      : round(parentalSalaryUpto10PBB + parentalSalaryAbove10PBB);

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

let round = (value: number, decimals: number = 2): number => {
  let num: any = value + "e" + decimals;
  return Number(Math.round(num) + "e-" + decimals);
};
