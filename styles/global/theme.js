import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

const Theme = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
