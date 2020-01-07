const config = {
  styling: {
    colors: {
      text: "#3C3C3B",
      primary: "#DB3E77",
      secondary: "#1446A0",
      white: "#FFFFFF",
      lightGray: "#EDEDED"
    },
    typography: {
      font: "'Sedgwick Ave', cursive"
    },
    borderShadow: (blur = 0.15) => `0 2px 4px rgba(0, 0, 0, ${blur})`,
    gutter: 10
  },
  otherStuff: {}
};

export default config;
