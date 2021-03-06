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

export default function About() {
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
            <h1 className={titleStyle}>Notre maison</h1>
            <Grid item xs={12} className={globalPaddingStyle}>
              <img
                style={{ float: "left", marginRight: 20 }}
                src={gevy}
                alt="Pineapple"
              />
              <h1 style={{ marginTop: 0 }}>La fondatrice</h1>
              <GenericText className={textStyle}>
                Riche d???une exp??rience professionnelle internationale, la
                cr??atrice de Gourmet Events a toujours c??toy?? les univers
                raffin??s du luxe et de la gastronomie. <br />
                <br /> Son histoire personnelle, sa curiosit?? et sa g??n??rosit??
                sont ?? l???origine de son d??sir de partager son amour de la perle
                noire... <br />
                <br /> C???est donc ?? travers l???atmosph??re festive de son concept
                de bar ?? caviar qu???elle proposera ?? vos convives une exp??rience
                gustative m??morable.
                <br />
                <br /> Avec un service ?? la royale Gourmet Events met ??
                l???honneur le diamant noir car nul besoin d???apparat pour ce
                pr??cieux met ; quelques grains d??pos??s sur le dos de votre main
                en guise d?????crin feront voyager vos papilles. Le go??t brut de
                l???instant...la saveur de l?????ternit?? ?? fleur de peau ...
              </GenericText>
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
