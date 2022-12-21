import { makeStyles } from "@mui/styles";
import BgDesktop from "../assets/bg-main-desktop.png";

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundImage: `url(${BgDesktop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "35% 100%",
  },
});
