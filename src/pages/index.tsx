import React from "react";
import { style } from "typestyle";
import { Grid, Button } from "@mui/material";
import classnames from "classnames";
import GenericText from "./components/GenericText";

import homeHeaderImage from "../../assets/homeHeaderImage.svg";
import bari from "../../assets/bari.svg";
import house from "../../assets/house.svg";
import NavBar from "./components/NavBar";

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      <Grid container style={{ overflow: "hidden" }}>
        <Grid item xs={12}>
          <img src={homeHeaderImage} style={{ width: "100%" }} />
        </Grid>
        <Grid item className={containerStyle}>
          <Grid>
            <h1>Optez pour un bar à Caviar !</h1>
            <GenericText className={textStyle}>
              Notre maison vous accompagne pour célébrer vos événements d’ordre
              privé ou corporate. Une aventure d’exception qui restera gravée
              dans l’esprit de vos convives. Tel est l’objectif de Gourmet
              Events Paris. Car le caviar c’est vivre l’instant avec Art !
            </GenericText>
          </Grid>
          <Grid></Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classnames(containerStyle, customBlueBackground)}
        >
          <Grid item display="flex" xs={12} sm={8} md={8}>
            <GenericText
              className={classnames(textStyle, customWhiteTextStyle)}
            >
              Nous sélectionnons rigoureusement nos caviars issus d’élevage du
              monde entier. Spécialiste du bar à Caviar, Gourmet Events Paris
              vous accompagne pour choisir parmis plusieurs variétés proposées.
            </GenericText>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <img src={bari} style={{ width: "241px" }} />
              <GenericText>BARI</GenericText>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              item
              xs={12}
              md={4}
            >
              <img src={bari} style={{ width: "241px" }} />
              <GenericText>BARI</GenericText>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              item
              xs={12}
              md={4}
            >
              <img src={bari} style={{ width: "241px" }} />
              <GenericText>BARI</GenericText>
            </Grid>
          </Grid>
          <Button variant="outlined">DÉCOUVEZ NOS CAVIARDS</Button>
        </Grid>

        <Grid container className={containerStyle}>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={7}
            md={7}
            lg={3}
          >
            <img src={house} />
          </Grid>
          <Grid item xs={12} sm={4} md={2} lg={8}>
            <h1>Notre maison</h1>
            <GenericText className={textStyle}>
              jvbzrjf pi anzbefpvbvpnpkefnzdkpvb nfzkp vb nennv b jkdsbizhe
              hvnaaf vhbjzhei hhbebb jsnvbhriuhe `fdbzéjvibgz, vhsizgbrfifv
              dhvzbzs dvneikaoa vhnzbag b dpvhza o v janbgkzi
            </GenericText>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const containerStyle = style({
  padding: "28px 28px 28px 28px",
});

const customBlueBackground = style({
  background: "#040322",
});

const textStyle = style({
  color: "black",
  fontSize: 18,
  font: "Roboto",
  fontWeight: 400,
  textAlign: "justify",
});

const customWhiteTextStyle = style({
  color: "#FFFFFF",
});

export default IndexPage;
