import { useStyles } from "./styles";
import BgCardFront from "../assets/bg-card-front.png";
import BgCardBack from "../assets/bg-card-back.png";
import CardLogo from "../assets/card-logo.svg";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const MainPage = () => {
  const classes = useStyles();

  const handleSubmit = () => {
    window.alert("haciendo submit");
  };

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
      <Grid item xs={6} className={classes.formSection}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className={classes.formContainer}
        >
          <TextField
            name="cardName"
            label={"cardholder name".toUpperCase()}
            autoComplete="off"
          />
          <TextField
            name="cardNumber"
            label={"card number".toUpperCase()}
            autoComplete="off"
          />
          <LoadingButton
            type="submit"
            fullWidth
            disableElevation
            variant="contained"
          >
            Confirm
          </LoadingButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
