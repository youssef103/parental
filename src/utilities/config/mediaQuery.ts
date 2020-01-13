const minWidth = (minWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)`;
/*const deviceWidth = (deviceWidth: number) =>
  `@media only screen and (device-width: ${deviceWidth}px)`;*/
const maxWidth = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;
const rangeSize = (minWidth: number, maxWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;

export const size = {
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  custom: 945,
  laptop: 1024
  /*  laptopL: 1440,
  desktop: 2000,
  xSmall: 320,
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200 */
};

export default {
  maxSizePhone: maxWidth(size.tablet),
  minSizeTabletAndUp: minWidth(size.tablet),
  minSizeLaptopAndUp: minWidth(size.laptop),
  maxSizeTablet: maxWidth(size.laptop),
  smallSize: maxWidth(size.mobileM),
  mediumSize: rangeSize(size.mobileM, size.custom),
  //bigSize: minWidth(946),
  customMinWidth: minWidth,
  customMaxWidth: maxWidth,
  customRangeSize: rangeSize
};

/*
export default {
  phone: maxWidth(size.tablet),
  minSizeTabletAndUp: minWidth(size.tablet),
  minSizeLaptopAndUp: minWidth(size.laptop),
  maxSizePhone: maxWidth(size.tablet),
  maxSizeTablet: maxWidth(size.laptop),
  maxSizeOfScreen: maxWidth(size.desktop),
  smallScreen: rangeSize(size.mobileS, size.tablet),
  mediumScreen: rangeSize(size.tablet, size.laptopL),
  BigScreen: rangeSize(size.laptop, size.desktop),
  devicePortrait: rangeSize(
    size.mobileL,
    size.large,
    "portrait"
  ),
  deviceLandscape: rangeSize(size.mobileL, size.large, "landscape"),
  customMinWidth: minWidth,
  customMaxWidth: maxWidth,
  customRangeSize: rangeSize
};*/
