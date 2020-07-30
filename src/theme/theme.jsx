import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    color: "#ffffff",
  },
  palette: {
    primary: {
      main: "#403f3f",
      light: "#dc004e",
      dark: "#9a0036",
    },
    secondary: {
      main: "#335b50",
    },
    text: {
      primary: "#00000073",
    },
  },
});
