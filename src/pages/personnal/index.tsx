import React from "react";
import { Grid } from "@mui/material";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import NavBar from "../components/NavBar";
import gevy from "../../images/gevy.png";
import Footer from "../components/GenericFooter";
import GenericText from "../components/GenericText";
import { style, media } from "typestyle";
import { DeviceSmartphones } from "../../utils/devices";

export default function Personnal() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [imageHeight, getImageHeight] = React.useState<number>(0);
  const ref = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    const image = (ref.current && ref.current.height) || 0;
    getImageHeight(image);

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const offsetHeight = 50;
  const { scrollY } = useViewportScroll();
  const yRange = useTransform(scrollY, [imageHeight - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });
  return (
    <div style={{ backgroundColor: "#2A2A3A" }}>
      <div className={sideMarginStyle}>
        <Grid container>
          <NavBar />
          <Grid item xs={12}>
            <motion.img
              ref={ref}
              src={detailsHeaderImage}
              style={{ width: "100%", height: "100%", opacity }}
            />
          </Grid>
          <Grid
            container
            style={{ backgroundColor: "#FFFFFF" }}
            className={containerStyle}
          >
            <h1 className={titleStyle}>Mentions légales</h1>
            <Grid item xs={12} className={globalPaddingStyle}>
              <div className={textStyle}>
                <span>Raison ou dénomination sociale : GourmetEvents</span>
                <br /> <br />
                <span>Forme juridique : Société à responsabilité limitée</span>
                <br />
                <br />
                <span>
                  Capital social : 2000,00€ Siret : 84451564300014 N°TVA
                </span>
                <br />
                <br />
                <span>intracommunautaire : FR61844515643</span>
                <br />
                <br />
                <span>
                  Responsable et directeur de publication : Gévy Estrampes
                </span>
                <br />
                <br />
                <span>
                  Nous contacter : Siège social : 66 avenue des Champs Elysées
                  75008 Paris Téléphone : - 01.89.16.41.80 - 06.71.60.94.25
                  Contact@gourmeteventsparis.fr ge.gourmetevents@gmail.com
                  www.(adresse du site){" "}
                </span>
                <br />
                <br />
                <span>
                  Conformément à la loi N° 2004-575 du 21 juin 2004 pour la
                  confiance dans l ‘économie numérique, nous vous informons que
                  le dite internet www.(adresse du site) est la propriété de
                  Gourmet Events. Les mentions Légales pouvant être modifiées à
                  tout moment et sans préavis, nous vous engageons à les
                  consulter régulièrement
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
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
  fontWeight: "normal",
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
