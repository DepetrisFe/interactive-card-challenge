import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette,
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
