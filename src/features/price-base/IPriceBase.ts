export type IDuration = {
  startDate?: null | string;
  endDate?: null | string;
  countOfDays?: undefined | number;
};

export interface IPBB {
  pbb: string;
}

export interface IPriceBase {
  pbb: IPBB;
  duration: IDuration;
}
