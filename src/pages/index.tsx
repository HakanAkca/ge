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
import {
  DeviceLRTablets,
  DeviceSmartphones,
  DeviceSmartphonesExtraSmall,
} from "../utils/devices";

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
            <h1 className={caviarTextStyle}>Optez pour un bar à Caviar !</h1>
            <Grid item className={caviarDescriptionStyle}>
              <GenericText className={textStyle}>
                Notre maison vous accompagne pour célébrer vos événements
                d’ordre privé ou corporate. <br />
                <br />
                Une aventure d’exception qui restera gravée dans l’esprit de vos
                convives. <br /> <br />
                Tel est l’objectif de Gourmet Events Paris.
                <br />
                <br /> Car le caviar c’est vivre l’instant avec Art !
              </GenericText>
              <div className={logoContainer}>
                <img src={logo} alt="Logo caviar" className="rotate" />
              </div>
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
                style={{ marginTop: 50 }}
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
                  borderWidth: 0,
                }}
                variant="outlined"
                href="/details#les-caviars"
              >
                DÉCOUVEZ NOS CAVIARDS
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          style={{ height: 250, backgroundColor: "#FFFFFF" }}
          item
          xs={12}
        >
          <h2>SI VOUS ÊTES INTÉRESSEZ</h2>
          <Button
            variant="outlined"
            href="/contact"
            className={contactButtonStyle}
          >
            Contactez-nous
          </Button>
        </Grid>
        <InstagramImage />
        <Footer />
      </div>
    </div>
  );
};

const contactButtonStyle = style(
  {
    backgroundColor: "#D99D55 !important",
    color: "#FFFFFF !important",
    borderRadius: "0px !important",
    width: 340,
    height: 50,
    borderWidth: "0px !important",
  },
  media(DeviceSmartphonesExtraSmall, { width: 250 })
);

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

const textStyle = style(
  {
    color: "black",
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  media(DeviceSmartphones, {
    textAlign: "center",
  })
);

const customWhiteTextStyle = style({
  color: "#FFFFFF !important",
  fontSize: 24,
  textAlign: "center",
});

const logoContainer = style({
  marginTop: 25,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
});

const caviarTextStyle = style({
  color: "#D99D55",
  fontFamily: "Cookie",
  fontSize: "48px",
});

const caviarDescriptionStyle = style(
  {
    display: "flex",
    flexDirection: "row",
  },
  media(DeviceLRTablets, {
    flexDirection: "column !important",
  }),
  media(DeviceSmartphones, {
    flexDirection: "column !important",
  })
);

export default IndexPage;
