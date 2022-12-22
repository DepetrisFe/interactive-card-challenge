import { makeStyles } from "@mui/styles";
import BgDesktop from "../assets/bg-main-desktop.png";

export const useStyles = makeStyles({
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
    border: "1px solid red",
  },
  cardContainer: {
    display: "grid",
    width: "100%",
    gridRowGap: "30px",
  },
  cardFrontContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardBackContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardFront: {},
  cardBack: {},
  formSection: {
    border: "1px solid red",
  },
});
