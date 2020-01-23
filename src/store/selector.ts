import { createSelector } from "reselect";
import { AppState } from ".";
import { ICard } from "../features/card/Card.types";
import { round } from "../utilities/config";

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

export const getCompensationPeriod = (state: AppState) =>
  state.critera.compensationPeriod;

export const checkCardDState = (state: AppState): boolean => state.cards.loaded;

// Errors
export const getStatusError = (state: AppState) => state.critera.errors.status;

export const getBirthdayError = (state: AppState) =>
  state.critera.errors.birthday;

export const getStartDateError = (state: AppState) =>
  state.priceBase.errors.startDate;

export const getEndDateError = (state: AppState) =>
  state.priceBase.errors.endDate;

export const getPBB1Error = (state: AppState) => state.priceBase.errors.pbb1;
export const getPBB2Error = (state: AppState) => state.priceBase.errors.pbb2;

export const getSalaryModelError = (state: AppState) =>
  state.salaryInfo.errors?.salaryModel;
export const getBasicSalaryError = (state: AppState) =>
  state.salaryInfo.errors?.basicSalary;

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
  const ConvertedBasicSalary: number =
    salaryModel === "Rörlig" ? round(basicSalary * 1.235) : round(basicSalary);

  const yearlySalary: number = ConvertedBasicSalary * 12;
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
  const total: number =
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
    total
  };
};

export const getErrors = createSelector(
  [
    getStatusError,
    getBirthdayError,
    getStartDateError,
    getEndDateError,
    getPBB1Error,
    getPBB2Error,
    getSalaryModelError,
    getBasicSalaryError
  ],
  (
    statusError,
    birthdayError,
    sartDateError,
    endDateError,
    PBB1Error,
    PBB2Error,
    salaryModelError,
    basicSalaryError
  ) => {
    const allErrors = {
      statusError,
      birthdayError,
      sartDateError,
      endDateError,
      PBB1Error,
      PBB2Error,
      salaryModelError,
      basicSalaryError
    };

    const errorsFilter: string[] = [];
    const errorsObj = Object.entries(allErrors);
    // eslint-disable-next-line
    errorsObj.map((err: string | any) => {
      err[1] &&
        (err[1] !== undefined || err[1] !== "") &&
        errorsFilter.push(err[1]);
    });
    return errorsFilter;
  }
);
