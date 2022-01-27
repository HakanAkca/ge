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
                <span>
                  Protection des données personnelles Conformément à la loi
                  78-17 du 6 janvier 1978, dite loi informatique et liberté,
                  vous disposez d’un droit d’accès individuel, de rectifications
                  et de suppression de données nominatives qui vous concernent
                  que Gourmet Events est amené à recueillir pour les demandes de
                  devis.
                </span>
                <br /> <br />
                <span>
                  Ces données demeurent à l’usage interne de la société Gourmet
                  Events et ne peuvent être échangées, transférées, cédées ou
                  vendues sur un support quelconque à des tiers.
                </span>
                <br />
                <br />
                <span>
                  Conformément aux articles 39-40 de la loi « informatique et
                  liberté » du 6 janvier 1978 toute personne physique ou morale
                  justifiant de son identité à le droit d’accéder, de modifier,
                  de rectifier ou de supprimer toute donnée la concernant. Pour
                  exercer ses droits, l’utilisateur doit adresser sa demande par
                  e-mail à contact@gourmeteventsparis.fr et joindre un
                  justificatif d’identité.
                </span>
                <br />
                <br />
                <span>
                  Vos données personnelles sont collectées via le formulaire de
                  contact et de demande de devis. Elles sont seulement
                  enregistrées dans le fichier client pour l’usage exclusif de
                  Gourmet Events.
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
