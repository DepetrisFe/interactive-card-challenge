import { ChangeEvent, SyntheticEvent, useState } from "react";
import { formatCardNumber } from "../utils/formatCardNumber";
import { useStyles } from "./styles";
import CardLogo from "../assets/card-logo.svg";
import IconComplete from "../assets/icon-complete.svg";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const MainPage = () => {
  const classes = useStyles();
  const initialState = {
    name: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };
  const regexName = /^[a-zA-Z ]+$/;
  const regexNumber = /^(?=.*\d)[\d ]+$/;
  const regexDate = /^[0-9]{2}$/;
  const regexCvc = /^[0-9]{3}$/;
  const [card, setCard] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);

  const [formError, setFormError] = useState({
    name: false,
    cardNumber: false,
    expMonth: false,
    expYear: false,
    cvc: false,
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
    const errorsInForm = handleFormError();
    if (!errorsInForm.includes(true)) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpenSuccess(true);
      }, 2000);
    }
  };

  const handleFormError = () => {
    const nameErr = !regexName.test(card.name);
    const numberErr = !regexNumber.test(card.cardNumber);
    const monthErr = !regexDate.test(card.expMonth);
    const yearErr = !regexDate.test(card.expYear);
    const cvcErr = !regexCvc.test(card.cvc);
    setFormError({
      name: nameErr,
      cardNumber: numberErr,
      expMonth: monthErr,
      expYear: yearErr,
      cvc: cvcErr,
    });
    return [nameErr, numberErr, monthErr, yearErr, cvcErr];
  };

  const handleContinue = () => {
    setOpenSuccess(!openSuccess);
    setCard(initialState);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} className={classes.cardSection}>
        <Box className={classes.cardsContainer}>
          <Box className={classes.cardFront}>
            <img src={CardLogo} alt="card logo" className={classes.cardLogo} />
            <Box className={classes.cardNumberContainer}>
              <Typography
                fontSize={27}
                letterSpacing={4}
                align="center"
                className={classes.cardNumberText}
              >
                {card.cardNumber ? card.cardNumber : "0000 0000 0000 0000"}
              </Typography>
            </Box>
            <Box className={classes.cardDataContainer}>
              <Typography letterSpacing={2} className={classes.cardDataText}>
                {card.name ? card.name.toUpperCase() : "JANE APPLESEED"}
              </Typography>
              <Typography letterSpacing={2} className={classes.cardDataText}>
                {`${card.expMonth ? card.expMonth : "00"}/${
                  card.expYear ? card.expYear : "00"
                }`}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.cardBack}>
            <Box className={classes.cardCvcContainer}>
              <Typography
                fontSize={17}
                letterSpacing={2}
                className={classes.cvcText}
              >
                {card.cvc ? card.cvc : "000"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className={classes.formSection}>
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
                error={formError.name}
                fullWidth
                inputProps={{ maxLength: 25 }}
                name="name"
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
                error={formError.cardNumber}
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
                    error={formError.expMonth}
                    inputProps={{ maxLength: 2 }}
                    name="expMonth"
                    onChange={(e) => handleChange(e)}
                    placeholder="MM"
                  />
                  <TextField
                    autoComplete="off"
                    error={formError.expYear}
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
                  error={formError.cvc}
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
                onClick={handleContinue}
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
