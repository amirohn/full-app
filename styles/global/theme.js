import {ThemeProvider, createTheme} from "@mui/material/styles";
import styled, {ThemeProvider as SCThemeProvider} from "styled-components";
import {useTheme, StylesProvider} from "@material-ui/core/styles";

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
    secondary: {
      main: "#009688",
    },
  },
});

const Theme = ({children}) => {
  const muiTheme = useTheme();
  return (
    <StylesProvider injectFirst>
      <SCThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>;
      </SCThemeProvider>
    </StylesProvider>
  );
};

export default Theme;
