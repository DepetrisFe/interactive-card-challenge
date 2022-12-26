import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useStyles } from "./styles";
import BgCardFront from "../assets/bg-card-front.png";
import BgCardBack from "../assets/bg-card-back.png";
import CardLogo from "../assets/card-logo.svg";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const MainPage = () => {
  const classes = useStyles();
  const [card, setCard] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("card", card);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.cardSection}>
        <Box className={classes.cardContainer}>
          <Box className={classes.cardFrontContainer}>
            <img
              alt="card front background"
              className={classes.cardFront}
              src={BgCardFront}
            />
            <img src={CardLogo} alt="card logo" className={classes.cardLogo} />
            <Box className={classes.cardNumberContainer}>
              <Typography fontSize={28} letterSpacing={4}>
                {card.number}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.cardBackContainer}>
            <img
              alt="card back background"
              className={classes.cardBack}
              src={BgCardBack}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.formSection}>
        <Box
          className={classes.formContainer}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            autoComplete="off"
            label={"cardholder name".toUpperCase()}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            autoComplete="off"
            label={"card number".toUpperCase()}
            name="number"
            onChange={(e) => handleChange(e)}
          />
          <Box className={classes.cardRow}>
            <TextField
              autoComplete="off"
              name="expMonth"
              onChange={(e) => handleChange(e)}
              placeholder="MM"
            />
            <TextField
              autoComplete="off"
              name="expYear"
              onChange={(e) => handleChange(e)}
              placeholder="YY"
            />
            <TextField
              autoComplete="off"
              fullWidth
              name="cvc"
              onChange={(e) => handleChange(e)}
              placeholder="e.g. 123"
            />
          </Box>
          <LoadingButton
            disableElevation
            fullWidth
            size="large"
            type="submit"
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
