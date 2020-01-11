import { lighten, darken } from "polished";
import moment from "moment";

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const config = {
  styling: {
    colors: {
      text: "#3C3C3B",
      primary: "#DB3E77",
      secondary: lighten(0.15, "#DB3E77"),
      danger: darken(0.2, "#DB3E77"),
      white: "#FFFFFF",
      lightGray: "#EDEDED",
      darkGray: "#CCCCCC"
    },
    typography: {
      fontFamily: "'Noto Sans',sans-serif",
      fontSmallSize: "14px",
      fontMedSize: "16px",
      fontBigSize: "20px"
    },
    borderShadow: (opacity: number = 0.15) =>
      `0 2px 4px rgba(0, 0, 0, ${opacity})`,
    media: {
      custom: customMediaQuery,
      desktop: customMediaQuery(922),
      tablet: customMediaQuery(768),
      phone: customMediaQuery(576)
    },
    gutter: 10
  },
  localConfig: () =>
    moment.updateLocale("sv", {
      months: [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December"
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      weekdays: [
        "Måndag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lördag",
        "Söndag"
      ],
      weekdaysMin: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"]
    })
};

export default config;
