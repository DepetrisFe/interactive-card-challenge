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
    cardCvcContainer: {
      display: "flex",
      justifyContent: "flex-end",
      position: "absolute",
      padding: "0px 5px",
      left: "50px",
      right: "50px",
      bottom: "118px",
    },
    cardLogo: {
      position: "absolute",
      top: "25px",
      left: "30px",
    },
    cardNumberContainer: {
      display: "flex",
      position: "absolute",
      left: "30px",
      right: "30px",
      bottom: "75px",
    },
    cardDataContainer: {
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      left: "30px",
      right: "30px",
      bottom: "30px",
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
