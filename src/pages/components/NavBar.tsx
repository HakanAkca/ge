import React from "react";
import { Link } from "gatsby";
import { Grid } from "@mui/material";
import classNames from "classnames";
import { style } from "typestyle";
import logo from "../../../assets/logo.svg";

const rc_nav = style({
  overflow: "hidden",
  backgroundColor: "#040322",
  textAlign: "center",
  zIndex: 6,
  height: 162,
});

const rc_nav_a = style({
  display: "inline-block",
  marginRight: "-4px",
  color: "#fff",
  padding: "22px 22px",
  textDecoration: "none",
  transition: "background 0.3s linear",
  zIndex: 9,
  $nest: {
    "&:hover": {
      color: "#D99D55",
    },
  },
});

const activeClassStyle = style({
  color: "#D99D55",
  textDecoration: "none",
});

export default function Navbar() {
  return (
    <Grid container className={rc_nav}>
      <Grid item xs={12}>
        <img src={logo} />
      </Grid>
      <Grid item xs={12}>
        <Link activeClassName={activeClassStyle} to="/" className={rc_nav_a}>
          Accueil
        </Link>
        <Link
          activeClassName={activeClassStyle}
          className={rc_nav_a}
          to="/details"
        >
          Nos bars à caviar
        </Link>
        <Link
          activeClassName={activeClassStyle}
          className={rc_nav_a}
          to="/services"
        >
          Nos services
        </Link>
        <Link
          activeClassName={activeClassStyle}
          className={rc_nav_a}
          to="/about"
        >
          Notre maison
        </Link>
        <Link
          activeClassName={activeClassStyle}
          className={rc_nav_a}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          activeClassName={activeClassStyle}
          className={rc_nav_a}
          to="/contact"
        >
          Contact
        </Link>
      </Grid>
    </Grid>
  );
}
