export interface ICard {
  max10PBB: string;
  max15PBB90: string;
  excessFixedSalary: string;
  parentalSalaryUpto10PBB: string;
  parentalSalaryAbove10PBB: string;
}

export interface ICardProps {
  arrData: ICard;
  classNamne?: string;
}