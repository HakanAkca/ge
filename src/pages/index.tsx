import React from "react";
import { style, media } from "typestyle";
import { Grid, Button } from "@mui/material";
import classnames from "classnames";
import GenericText from "./components/GenericText";
import Footer from "./components/GenericFooter";

import homeHeaderImage from "../images/homeHeaderImage.png";
import bari from "../../assets/bari.svg";
import gevy from "../images/gevy.png";
import NavBar from "./components/NavBar";
import InstagramImage from "./components/InstagramImage";
import logo from "../images/logo.png";
import { DeviceSmartphones } from "../utils/devices";

import detailsHeaderImage from "../../assets/detailsHeaderImage.svg";

const IndexPage = () => {
  return (
    <div style={{ backgroundColor: "#2A2A3A" }}>
      <div className={sideMarginStyle}>
        <NavBar />
        <Grid container style={{ overflow: "hidden" }}>
          <Grid item xs={12}>
            <img
              src={detailsHeaderImage}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid
            xs={12}
            item
            style={{ backgroundColor: "#FFFFFF" }}
            className={globalPaddingStyle}
          >
            <Grid>
              <img
                style={{ float: "right", marginRight: 20 }}
                src={logo}
                alt="Logo caviar"
                className="rotate"
              />
              <h1>Optez pour un bar à Caviar !</h1>
              <GenericText className={textStyle}>
                Notre maison vous accompagne pour célébrer vos événements
                d’ordre privé ou corporate. <br />
                <br />
                Une aventure d’exception qui restera gravée dans l’esprit de vos
                convives. Tel est l’objectif de Gourmet Events Paris.
                <br />
                <br /> Car le caviar c’est vivre l’instant avec Art !
              </GenericText>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classnames(
              containerStyle,
              customBlueBackground,
              globalPaddingStyle
            )}
          >
            <Grid item xs={12}>
              <GenericText
                className={classnames(textStyle, customWhiteTextStyle)}
              >
                Nous sélectionnons rigoureusement nos caviars issus d’élevage du
                monde entier.
                <br />
                Spécialiste du bar à Caviar, Gourmet Events Paris vous
                accompagne pour choisir parmis plusieurs variétés proposées.
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
                style={{ marginTop: 25 }}
              >
                <img src={bari} style={{ width: "241px" }} />
                <GenericText className={caviarTextStyle}>Baeri</GenericText>
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
                <GenericText className={caviarTextStyle}>Osciètre</GenericText>
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
                <GenericText className={caviarTextStyle}>Schrenki</GenericText>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                style={{
                  marginTop: 50,
                  backgroundColor: "#D99D55",
                  color: "#FFFFFF",
                  borderRadius: 0,
                  width: 340,
                  height: 50,
                }}
                variant="outlined"
                href="/details#les-caviars"
              >
                DÉCOUVEZ NOS CAVIARDS
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <InstagramImage />
        <Footer />
      </div>
    </div>
  );
};

const sideMarginStyle = style(
  {
    marginLeft: 150,
    marginRight: 150,
    backgroundColor: "#B3B3B3",
  },
  media(DeviceSmartphones, { marginLeft: 0, marginRight: 0 })
);

const globalPaddingStyle = style({
  padding: 50,
});

const containerStyle = style({
  padding: "28px 28px 28px 28px",
});

const customBlueBackground = style({
  background: "#040322",
});

const textStyle = style({
  color: "black",
  fontSize: 22,
  fontFamily: "Roboto",
  fontWeight: 400,
});

const customWhiteTextStyle = style({
  color: "#FFFFFF",
  fontSize: 24,
  textAlign: "center",
});

const spaceTextStyle = style({
  marginTop: 25,
});

const caviarTextStyle = style({
  color: "#D99D55",
  fontFamily: "Cookie",
  fontSize: "48px",
});

export default IndexPage;
