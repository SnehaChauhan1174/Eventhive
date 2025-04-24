import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B5E3C", // Brown
    },
    secondary: {
      main: "#D2B48C", // Light brown
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
