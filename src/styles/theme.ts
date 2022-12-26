const dark = {
  name: "dark",
  textColors: {
    primary: "#FFFFFF",
    secondary: "#D8D8D8",
  },
  backgroundColors: {
    main: "#1C1937",
    menu: "#0D0C1B",
    item: "#24214A",
    delete: "#5049A5",
  },
  utils: {
    itemSelectedOrBorderOrButton: "#B19DFF",
    todoListBorder: "#6E63FF",
  },
  status: {
    todo: "#BF2782",
    doing: "#22AFFF",
    done: "#A4FFA3",
  },
  fontSizes: {
    lg: "3.2rem",
    md: "1.6rem",
    sm: "1.3rem",
  },
};

export interface IThemeProps {
  theme: typeof dark;
}

export { dark };
