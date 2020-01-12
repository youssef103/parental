import colors from "./color";
import localDateConfig from "./dateConfig";
import mediaQuery from "./mediaQuery";

const styling = {
  typography: {
    fontFamily: "'Noto Sans',sans-serif",
    fontSmallSize: "14px",
    fontMedSize: "16px",
    fontBigSize: "20px"
  },
  borderShadow: (opacity: number = 0.15, state: string = "") =>
    `0 2px 4px rgba(0, 0, 0, ${opacity}) ${state}`
};

export { styling, colors, localDateConfig, mediaQuery };
