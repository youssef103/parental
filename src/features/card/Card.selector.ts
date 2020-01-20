import { createSelector } from "reselect";
import { AppState } from "../../store";
import { IErrors } from "./Card.types";

export const getStatus = (state: AppState) => state.critera.status;

export const getBirthday = (state: AppState) => state.critera.birthday;

export const getStartDate = (state: AppState) =>
  state.priceBase.duration.startDate;

export const getEndDate = (state: AppState) => state.priceBase.duration.endDate;

export const getPBB1 = (state: AppState) => state.priceBase.pbb1 || 0;
export const getPBB2 = (state: AppState) => state.priceBase.pbb2 || 0;

export const getSalaryModel = (state: AppState): string =>
  state.salaryInfo.salaryModel || "";

export const getBasicSalary = (state: AppState): number =>
  state.salaryInfo.basicSalary || 0;

export const getCardStatus = (state: AppState): boolean => state.cards.loaded;

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
) => {
  const ConvertedBasicSalary =
    salaryModel === "Rörlig" ? Math.round(basicSalary * 1.235) : basicSalary;
  const yearlySalary = ConvertedBasicSalary * 12;
  const max10PBB = pbb * 10;
  const max15PBB = pbb * 15;
  const parentalSalaryUpto10PBB =
    yearlySalary > max10PBB
      ? Math.round(max10PBB * ((0.1 / 365) * 30))
      : Math.round(yearlySalary * ((0.1 / 365) * 30));
  const excessFixedSalary =
    yearlySalary > max10PBB
      ? Math.round(Math.min(yearlySalary, max15PBB) - max10PBB)
      : 0;

  const parentalSalaryAbove10PBB = Math.round(
    excessFixedSalary * ((0.9 / 365) * 30)
  );
  const monthlyTotal =
    parentalSalaryAbove10PBB <= 0
      ? parentalSalaryUpto10PBB
      : parentalSalaryAbove10PBB + parentalSalaryUpto10PBB;

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

// Errors
/*export const getBasicSalaryError = (state: AppState) =>
        state.salaryInfo.basicSalary;
      
      export const getSalaryModelError = (state: AppState) =>
        state.salaryInfo.errors.salaryModel;*/

export const getPBB1Error = (state: AppState) => state.priceBase.errors.pbb1;
export const getPBB2Error = (state: AppState) => state.priceBase.errors.pbb2;

export const getStartDateError = (state: AppState) =>
  state.priceBase.errors.startDate;
export const getEndDateError = (state: AppState) =>
  state.priceBase.errors.endDate;

export const getBirthdayError = (state: AppState) =>
  state.critera.errors.birthday;

export const getStatusError = (state: AppState) => state.critera.errors.status;

export const getErrors = createSelector(
  [
    getPBB1Error,
    getPBB2Error,
    getStartDateError,
    getEndDateError,
    getBirthdayError,
    getStatusError
  ],
  (pbb1, pbb2, startDate, endDate, birthday, status) => {
    let errors: IErrors = {
      basicSalary: "",
      salaryModel: "",
      pbb1: pbb1 ? pbb1 : "",
      pbb2: pbb2 ? pbb2 : "",
      startDate: startDate ? startDate : "",
      endDate: endDate ? endDate : "",
      birthday: birthday ? birthday : "",
      status: status ? status : ""
    };

    return errors;
  }
);
