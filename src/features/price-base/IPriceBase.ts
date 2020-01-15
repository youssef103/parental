export type IDuration = {
  startDate?: null | string;
  endDate?: null | string;
  countOfDays?: number | undefined;
};

export interface IPBB {
  pbb: string;
}

export interface IPriceBase {
  pbb: IPBB[];
  duration: IDuration;
}
