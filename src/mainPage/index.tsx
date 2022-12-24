import { useStyles } from "./styles";
import { Box, Grid, Typography } from "@mui/material";
import BgCardFront from "../assets/bg-card-front.png";
import BgCardBack from "../assets/bg-card-back.png";
import CardLogo from "../assets/card-logo.svg";

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
            <img src={CardLogo} alt="card logo" className={classes.cardLogo} />
            <Box className={classes.cardNumberContainer}>
              <Typography fontSize={28} letterSpacing={4}>
                0000 0000 0000 0000
              </Typography>
            </Box>
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
