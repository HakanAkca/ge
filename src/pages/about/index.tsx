import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";

import gevy from "../../images/gevy.png";
import Footer from "../components/GenericFooter";
import GenericText from "../components/GenericText";
import { style, media } from "typestyle";
import { DeviceSmartphones } from "../../utils/devices";

export default class About extends React.Component<{}> {
  render() {
    return (
      <div style={{ backgroundColor: "#2A2A3A" }}>
        <div className={sideMarginStyle}>
          <Grid container>
            <NavBar />
            <Grid
              container
              style={{ backgroundColor: "#FFFFFF" }}
              className={containerStyle}
            >
              <h1 className={titleStyle}>Notre maison</h1>
              <Grid item xs={12} className={globalPaddingStyle}>
                <img
                  style={{ float: "left", marginRight: 20 }}
                  src={gevy}
                  alt="Pineapple"
                />
                <h1 style={{ marginTop: 0 }}>La fondatrice</h1>
                <GenericText className={textStyle}>
                  Riche d’une expérience professionnelle internationale, la
                  créatrice de Gourmet Events a toujours côtoyé les univers
                  raffinés du luxe et de la gastronomie. <br />
                  <br /> Son histoire personnelle, sa curiosité et sa générosité
                  sont à l’origine de son désir de partager son amour de la
                  perle noire... <br />
                  <br /> C’est donc à travers l’atmosphère festive de son
                  concept de bar à caviar qu’elle proposera à vos convives une
                  expérience gustative mémorable.
                  <br />
                  <br /> Avec un service à la royale Gourmet Events met à
                  l’honneur le diamant noir car nul besoin d’apparat pour ce
                  précieux met ; quelques grains déposés sur le dos de votre
                  main en guise d’écrin feront voyager vos papilles. Le goût
                  brut de l’instant...la saveur de l’éternité à fleur de peau
                  ...
                </GenericText>
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </div>
      </div>
    );
  }
}

const sideMarginStyle = style(
  {
    marginLeft: 150,
    marginRight: 150,
    backgroundColor: "#B3B3B3",
  },
  media(DeviceSmartphones, { marginLeft: 0, marginRight: 0 })
);

const titleStyle = style({
  color: "#D99D55",
  fontFamily: "Cookie",
  fontSize: 48,
  paddingLeft: 50,
});

const globalPaddingStyle = style({
  padding: "0 50px 50px",
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
