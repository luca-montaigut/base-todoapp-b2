const defaultTheme = {
  colors: {
    primary: "red",
    background: "white",
    textColor: "black",
  },
  images: {
    background: require("../assets/background.png"),
  },
};

export const lightTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
  images: {
    ...defaultTheme.images,
  },
};

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: "blue",
    background: "black",
    textColor: "white",
  },
  images: {
    ...defaultTheme.images,
    background: require("../assets/background-dark.png"),
  },
};
