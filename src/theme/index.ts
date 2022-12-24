import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 1280,
      lg: 1560,
      xl: 1920,
    },
  },
});

export default theme;
