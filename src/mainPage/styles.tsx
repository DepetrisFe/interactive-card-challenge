import BgCardBack from "../assets/bg-card-back.png";
import BgCardFront from "../assets/bg-card-front.png";
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
      [theme.breakpoints.down(570)]: {
        backgroundSize: "100% 65vw",
      },
    },
    cardSection: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        paddingTop: "30px",
      },
      [theme.breakpoints.down(570)]: {
        height: "80vw",
      },
    },
    cardsContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "570px",
      height: "530px",
      [theme.breakpoints.up("lg")]: {
        right: "50px",
      },
      [theme.breakpoints.up("xl")]: {
        right: "120px",
      },
      [theme.breakpoints.down("md")]: {
        height: "390px",
      },
      [theme.breakpoints.down(570)]: {
        height: "100%",
        maxHeight: "390px",
      },
    },
    cardFront: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "447px",
      height: "245px",
      backgroundImage: `url(${BgCardFront})`,
      backgroundSize: "100% 100%",
      [theme.breakpoints.down("md")]: {
        top: "140px",
        left: "10px",
        zIndex: "1",
      },
      [theme.breakpoints.down(570)]: {
        width: "79%",
        height: "62%",
        top: "25.3vw",
      },
    },
    cardLogo: {
      position: "absolute",
      top: "30px",
      left: "30px",
      zIndex: "1",
      [theme.breakpoints.down(570)]: {
        width: "20%",
        top: "12%",
        left: "7%",
      },
    },
    cardNumberContainer: {
      position: "absolute",
      bottom: "60px",
      left: "30px",
      right: "30px",
      [theme.breakpoints.down(570)]: {
        left: "5%",
        right: "5%",
        bottom: "27%",
      },
    },
    cardNumberText: {
      whiteSpace: "nowrap",
      [theme.breakpoints.down(570)]: {
        fontSize: "5vw !important",
        letterSpacing: "3px !important",
      },
    },
    cardDataContainer: {
      position: "absolute",
      display: "flex",
      justifyContent: "space-between",
      bottom: "25px",
      left: "30px",
      right: "30px",
      [theme.breakpoints.down(570)]: {
        bottom: "10%",
        left: "5%",
        right: "5%",
      },
    },
    cardDataText: {
      whiteSpace: "nowrap",
      [theme.breakpoints.down(570)]: {
        fontSize: "3vw !important",
      },
    },
    cardBack: {
      position: "absolute",
      bottom: "0",
      right: "0",
      width: "447px",
      height: "245px",
      backgroundImage: `url(${BgCardBack})`,
      backgroundSize: "100% 100%",
      [theme.breakpoints.down("md")]: {
        right: "10px",
        top: "0",
      },
      [theme.breakpoints.down(570)]: {
        width: "79%",
        height: "62%",
      },
    },
    cardCvcContainer: {
      display: "flex",
      justifyContent: "flex-end",
      position: "absolute",
      top: "107px",
      left: "50px",
      right: "50px",
      [theme.breakpoints.down(570)]: {
        top: "43%",
        left: "12%",
        right: "12%",
      },
    },
    cvcText: {
      [theme.breakpoints.down(570)]: {
        fontSize: "3vw !important",
      },
    },
    formSection: {
      display: "flex",
      justifyContent: "center",
    },
    formContainer: {
      display: "flex",
      gap: "1.5rem",
      flexDirection: "column",
      justifyContent: "center",
      width: "60%",
      [theme.breakpoints.down("md")]: {
        width: "90%",
        maxWidth: "570px",
        padding: "3rem 0rem",
      },
    },
    textFieldContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.3rem",
    },
    cardRow: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "1rem",
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
        width: "100%",
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
      [theme.breakpoints.down("md")]: {
        maxWidth: "570px",
      },
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
