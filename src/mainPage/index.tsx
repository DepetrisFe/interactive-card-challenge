import { ChangeEvent, SyntheticEvent, useState } from "react";
import { formatCardNumber } from "../utils/formatCardNumber";
import { useStyles } from "./styles";
import BgCardFront from "../assets/bg-card-front.png";
import BgCardBack from "../assets/bg-card-back.png";
import CardLogo from "../assets/card-logo.svg";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import IconComplete from "../assets/icon-complete.svg";

const MainPage = () => {
  const classes = useStyles();
  const regexName = /^[a-zA-Z ]*$/;
  const regexNumber = /^(?=.*\d)[\d ]+$/;
  const [loading, setLoading] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const [card, setCard] = useState({
    name: "Jane Appleseed",
    cardNumber: "",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.name === "cardNumber") {
      setCard({
        ...card,
        [e.target.name]: formatCardNumber(e.target.value),
      });
    } else {
      setCard({
        ...card,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenSuccess(true);
    }, 2000);
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
              <Typography fontSize={27} letterSpacing={4}>
                {card.cardNumber}
              </Typography>
            </Box>
            <Box className={classes.cardDataContainer}>
              <Typography letterSpacing={2}>
                {card.name.toUpperCase()}
              </Typography>
              <Typography letterSpacing={2}>
                {`${card.expMonth}/${card.expYear}`}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.cardBackContainer}>
            <img
              alt="card back background"
              className={classes.cardBack}
              src={BgCardBack}
            />
            <Box className={classes.cardCvcContainer}>
              <Typography fontSize={17} letterSpacing={2}>
                {card.cvc}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.formSection}>
        {!openSuccess && (
          <Box
            className={classes.formContainer}
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >
            <Box className={classes.textFieldContainer}>
              <Typography color="primary" fontSize={13} letterSpacing={1}>
                CARDHOLDER NAME
              </Typography>
              <TextField
                autoComplete="off"
                fullWidth
                inputProps={{ maxLength: 25 }}
                name="name"
                error={!regexName.test(card.name)}
                onChange={(e) => handleChange(e)}
                placeholder="e.g. Jane Appleseed"
              />
            </Box>
            <Box className={classes.textFieldContainer}>
              <Typography color="primary" fontSize={13} letterSpacing={1}>
                CARD NUMBER
              </Typography>
              <TextField
                autoComplete="off"
                fullWidth
                inputProps={{ maxLength: 19 }}
                name="cardNumber"
                onChange={(e) => handleChange(e)}
                placeholder="e.g. 1234 5678 9123 0000 "
                value={formatCardNumber(card.cardNumber)}
              />
            </Box>
            <Grid className={classes.cardRow}>
              <Grid container className={classes.textFieldContainer}>
                <Typography color="primary" fontSize={13} letterSpacing={1}>
                  EXP. DATE (MM/YY)
                </Typography>
                <Box className={classes.expirationContainer}>
                  <TextField
                    autoComplete="off"
                    inputProps={{ maxLength: 2 }}
                    name="expMonth"
                    onChange={(e) => handleChange(e)}
                    placeholder="MM"
                  />
                  <TextField
                    autoComplete="off"
                    inputProps={{ maxLength: 2 }}
                    name="expYear"
                    onChange={(e) => handleChange(e)}
                    placeholder="YY"
                  />
                </Box>
              </Grid>
              <Grid container className={classes.textFieldContainer}>
                <Typography color="primary" fontSize={13} letterSpacing={1}>
                  CVC
                </Typography>
                <TextField
                  autoComplete="off"
                  fullWidth
                  inputProps={{ maxLength: 3 }}
                  name="cvc"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. 123"
                />
              </Grid>
            </Grid>
            <Box className={classes.btnContainer}>
              <LoadingButton
                className={classes.button}
                disableElevation
                fullWidth
                loading={loading}
                size="large"
                type="submit"
                variant="contained"
              >
                <Typography letterSpacing={1} fontSize={18}>
                  Confirm
                </Typography>
              </LoadingButton>
            </Box>
          </Box>
        )}
        {openSuccess && (
          <Box className={classes.successContainer}>
            <img
              src={IconComplete}
              alt="Complete Icon"
              className={classes.iconComplete}
            />
            <Box className={classes.successTextContainer}>
              <Typography fontSize={30} letterSpacing={2} color="primary">
                THANK YOU!
              </Typography>
              <Typography fontSize={18} color="primary">
                We've added your card details
              </Typography>
            </Box>
            <Box className={classes.buttonContainer}>
              <Button
                disableElevation
                fullWidth
                onClick={() => setOpenSuccess(!openSuccess)}
                variant="contained"
                className={classes.button}
              >
                <Typography letterSpacing={1} fontSize={18}>
                  Continue
                </Typography>
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default MainPage;
