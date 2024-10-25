import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EB00D3",
    },
    secondary: {
      main: "#4D525C",
    },
    tertiary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#EB00D3",
      secondary: "#4D525C",
      dark: "#000000",
      light: "#ffffff",
    },
  },
});

export default theme;
