import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";

import homeHeaderImage from "../../../assets/homeHeaderImage.svg";
import Footer from "../components/GenericFooter";

export default class Galery extends React.Component<{}> {
  render() {
    return (
      <>
        <Grid container>
          <NavBar />
          <Grid item xs={12}>
            <img src={homeHeaderImage} style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  }
}
