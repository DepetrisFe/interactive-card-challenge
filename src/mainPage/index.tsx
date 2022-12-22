import { useStyles } from "./styles";
import { Box, Grid } from "@mui/material";
import BgCardFront from "../assets/bg-card-front.png";
import BgCardBack from "../assets/bg-card-back.png";

const MainPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.cardSection}>
        <Box className={classes.cardContainer}>
          <Box className={classes.cardFrontContainer}>
            <img
              src={BgCardFront}
              alt="card front background"
              className={classes.cardFront}
            />
          </Box>
          <Box className={classes.cardBackContainer}>
            <img
              src={BgCardBack}
              alt="card back background"
              className={classes.cardBack}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.formSection}></Grid>
    </Grid>
  );
};

export default MainPage;
