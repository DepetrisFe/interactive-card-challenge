import React from "react";
import { useStyles } from "./styles";
import { Grid } from "@mui/material";

const MainPage = () => {
  const classes = useStyles();

  return <Grid className={classes.root}>hola</Grid>;
};

export default MainPage;
