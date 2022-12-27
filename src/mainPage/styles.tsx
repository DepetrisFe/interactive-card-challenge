import BgDesktop from "../assets/bg-main-desktop.png";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
      height: "100vh",
      backgroundImage: `url(${BgDesktop})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "35% 100%",
    },
    cardSection: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    cardContainer: {
      display: "grid",
      gridRowGap: "30px",
    },
    cardFrontContainer: {
      position: "relative",
      [theme.breakpoints.down("lg")]: {
        right: "20%",
      },
      [theme.breakpoints.between("lg", "xl")]: {
        right: "30%",
      },
      [theme.breakpoints.up("xl")]: {
        right: "45%",
      },
    },
    cardBackContainer: {
      position: "relative",
      [theme.breakpoints.down("lg")]: {
        right: "0%",
      },
      [theme.breakpoints.between("lg", "xl")]: {
        right: "10%",
      },
      [theme.breakpoints.up("xl")]: {
        right: "25%",
      },
    },
    cardFront: {},
    cardBack: {},
    cardLogo: {
      position: "absolute",
      top: "25px",
      left: "30px",
    },
    cardNumberContainer: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      width: "100%",
      bottom: "70px",
    },
    cardDataContainer: {
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      width: "100%",
      bottom: "20px",
    },
    formSection: {
      display: "flex",
      justifyContent: "center",
    },
    formContainer: {
      display: "flex",
      gap: "2rem",
      flexDirection: "column",
      justifyContent: "center",
      width: "60%",
    },
    cardRow: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "1rem",
    },
  };
});
