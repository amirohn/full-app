import {ThemeProvider, createTheme} from "@mui/material/styles";
import {useTheme, StylesProvider} from "@material-ui/core/styles";
import styled, {ThemeProvider as SCThemeProvider} from "styled-components";

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
  const muiTheme = useTheme();
  return;
  <StylesProvider injectFirst>
    <SCThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </SCThemeProvider>
  </StylesProvider>;
};

export default Theme;
