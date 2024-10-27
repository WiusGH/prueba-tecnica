import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily:
      '"Outfit", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
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
      primary: "#000000",
      pink: "#EB00D3",
      gray: "#4D525C",
      light: "#ffffff",
    },
  },
});

export default theme;
