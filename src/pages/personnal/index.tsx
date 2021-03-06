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
            <h1 className={titleStyle}>Mentions l??gales</h1>
            <Grid item xs={12} className={globalPaddingStyle}>
              <div className={textStyle}>
                <span>
                  Protection des donn??es personnelles Conform??ment ?? la loi
                  78-17 du 6 janvier 1978, dite loi informatique et libert??,
                  vous disposez d???un droit d???acc??s individuel, de rectifications
                  et de suppression de donn??es nominatives qui vous concernent
                  que Gourmet Events est amen?? ?? recueillir pour les demandes de
                  devis.
                </span>
                <br /> <br />
                <span>
                  Ces donn??es demeurent ?? l???usage interne de la soci??t?? Gourmet
                  Events et ne peuvent ??tre ??chang??es, transf??r??es, c??d??es ou
                  vendues sur un support quelconque ?? des tiers.
                </span>
                <br />
                <br />
                <span>
                  Conform??ment aux articles 39-40 de la loi ?? informatique et
                  libert?? ?? du 6 janvier 1978 toute personne physique ou morale
                  justifiant de son identit?? ?? le droit d???acc??der, de modifier,
                  de rectifier ou de supprimer toute donn??e la concernant. Pour
                  exercer ses droits, l???utilisateur doit adresser sa demande par
                  e-mail ?? contact@gourmeteventsparis.fr et joindre un
                  justificatif d???identit??.
                </span>
                <br />
                <br />
                <span>
                  Vos donn??es personnelles sont collect??es via le formulaire de
                  contact et de demande de devis. Elles sont seulement
                  enregistr??es dans le fichier client pour l???usage exclusif de
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
