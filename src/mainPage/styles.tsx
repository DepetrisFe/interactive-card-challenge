import BgDesktop from "../assets/bg-main-desktop.png";
import BgMobile from "../assets/bg-main-mobile.png";
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
      [theme.breakpoints.down("md")]: {
        height: "100%",
        backgroundImage: `url(${BgMobile})`,
        backgroundSize: "100% 40%",
      },
    },
    cardSection: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
    cardContainer: {
      display: "grid",
      gridRowGap: "30px",
      border: "1px solid red",
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
      border: "1px solid red",
    },
    formContainer: {
      display: "flex",
      gap: "1.5rem",
      flexDirection: "column",
      justifyContent: "center",
      width: "60%",
      [theme.breakpoints.down("md")]: {
        width: "90%",
        padding: "3rem 0rem",
      },
    },
    cardRow: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "1rem",
    },
    textFieldContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.3rem",
    },
    expirationContainer: {
      display: "flex",
      gap: "1rem",
    },
    btnContainer: {
      marginTop: "1rem",
    },
    button: {
      height: "55px",
    },
    successContainer: {
      display: "flex",
      gap: "2.5rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "60%",
      [theme.breakpoints.down("md")]: {
        width: "90%",
        padding: "3rem 0rem",
      },
    },
    iconComplete: {
      width: "100px",
    },
    successTextContainer: {
      display: "flex",
      gap: "0.5rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
      [theme.breakpoints.down("lg")]: {
        width: "90%",
      },
      [theme.breakpoints.between("lg", "xl")]: {
        width: "70%",
      },
      [theme.breakpoints.up("xl")]: {
        width: "50%",
      },
    },
  };
});
