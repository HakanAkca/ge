import React, { FC, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import GenericText from "../components/GenericText";
import { media, style } from "typestyle";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import caviar from "../../../assets/caviar.svg";
import bari from "../../../assets/bari.svg";
import NavBar from "../components/NavBar";
import classnames from "classnames";
import Footer from "../components/GenericFooter";
import {
  DeviceLRTablets,
  DeviceSmallDesktop,
  DeviceSmartphones,
  DeviceSmartphonesExtraSmall,
  DeviceTabletsLandscape,
  DeviceTabletsPortrait,
} from "../../utils/devices";

interface Props {
  children: React.ReactNode;
}

const FadeInWhenVisible: FC<Props> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      transition={{ duration: 0.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Details() {
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
            style={{ backgroundColor: "#FFFFFF" }}
            container
            justifyContent={{
              md: "space-around",
              lg: "center",
              xl: "space-around",
            }}
            alignItems="center"
            className={caviarDetailsContainer}
          >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
              <h1 className={titleStyle}>Nos bars ?? caviar</h1>
              <GenericText className={textStyle}>
                Nos bars ?? caviar Chaque esp??ce d???esturgeons ?? ses
                caract??ristiques de go??t, de texture et de taille d???oeufs. Ainsi
                Gourmet Event Paris par sa s??lection vous guidera selon vos
                pr??f??rences vos attentes ?? faire votre choix. Cette gamme est
                susceptible d?????voluer suivant les saisons et les p??ches.
              </GenericText>
            </Grid>
            <Grid
              item
              xs={12}
              sm={0}
              md={12}
              lg={6}
              xl={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img src={caviar} className={caviarHandImgStyle} />
            </Grid>
          </Grid>
          <div style={{ backgroundColor: "#0F0F20", width: "100%" }}>
            <div id="les-caviars"></div>
            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "55px",
                }}
              >
                <div>
                  <img
                    id="homePageSliderImg"
                    src={bari}
                    style={{ width: "141px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 className={titleStyle}>Caviar Baeri</h1>
                  <GenericText
                    className={classnames(textStyle, customWhiteTextStyle)}
                  >
                    Le caviar Baeri est issu de l???esturgeon Sib??rien Acipenser
                    Baeri. Mesurant 0,5m ?? 1m en captivit?? pour un poids de 7Kg
                    ?? 30Kg. Il peut atteindre une taille de 3m ?? l?????tat sauvage.
                    Il faut 5 ?? 7 ans pour que les premiers grains apparaissent.
                    C???est l???esp??ce la plus r??pandue en Europe. En France, le
                    caviar d???Aquitaine est produit ?? partir de cetet esp??ce. Le
                    caviar Baeri a des petits grains qui se d??tachent aisement
                    avec une texture d??licate. Ses nuances sont de couleurs
                    assez sombres au go??t min??ral franc et iod??.
                  </GenericText>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "55px",
                }}
              >
                <div>
                  <img
                    id="homePageSliderImg"
                    src={bari}
                    style={{ width: "141px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 className={titleStyle}>Caviar Oscietre</h1>
                  <GenericText
                    className={classnames(textStyle, customWhiteTextStyle)}
                  >
                    Le caviar Osci??tre est issu de l???esturgeon Guidenstaedti et
                    Acipenser et Persicus. Ce poisson est end??mique de la mer
                    Caspienne et la mer noire. Il a une taille moyenne mesurant
                    de 1,5m ?? 2m. Son poids varie de 80Kg ?? 200Kg. Il faut 8 ??
                    9ans pour ??lever cet esturgeons ?? maturit?? sexuelle. Ses
                    grains d??livr??s sont moyens, fermes et fondants ?? la fois.
                    La couleur de ce caviar peut aller d???un gris anthracite ??
                    une couleur mordor??. Sa saveur particuli??rement d??licate
                    pr??sente des notes de noisette avec une belle longueur en
                    bouche.
                  </GenericText>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "55px",
                }}
              >
                <div>
                  <img
                    id="homePageSliderImg"
                    src={bari}
                    style={{ width: "141px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 className={titleStyle}> Caviar Schrenki </h1>
                  <GenericText
                    className={classnames(textStyle, customWhiteTextStyle)}
                  >
                    Le caviar Schrenki est issu de l???esturgeon Acipenser
                    Dauricus Schrenki. Ce poisson vit ?? l?????tat dauvage sur le
                    fleuve Amour s??parant la Russie de la Chine. Sa taille varie
                    de 1,2m ?? 2m et son poids peut atteindre plus de 100Kg. Il
                    atteint sa maturit?? sexuelle en ??levage autour des 9ans,
                    p??riode n??cessaire pour nous d??livrer un caviar envoutant et
                    unique. Ses grains sont de taille moyenne et fermes arborant
                    une sublime couleur dor??e. Faiblement iod?? et peu sal??, il
                    s??duit par ses notes sensuelles. Un produit d???exception qui
                    a la faveur des grands chefs.
                  </GenericText>
                </div>
              </div>
            </Carousel>
          </div>
          <Grid
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            style={{ height: 250, backgroundColor: "#FFFFFF" }}
            item
            xs={12}
          >
            <h2>SI VOUS ??TES INT??RESSEZ</h2>
            <Button
              variant="outlined"
              href="/contact"
              className={contactButtonStyle}
            >
              Contactez-nous
            </Button>
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

const caviarImageStyle = style(
  {},
  media(DeviceSmartphones, { width: "100%", marginTop: 30 })
);

const titleStyle = style({
  color: "#D99D55",
  fontFamily: "Cookie",
  fontSize: 48,
  fontWeight: "normal",
});

const textStyle = style({
  color: "black",
  fontSize: 18,
  font: "Roboto",
  fontWeight: 400,
  textAlign: "justify",
});

const caviarDetailsContainer = style({
  padding: "28px 28px 28px 28px",
});

const customWhiteTextStyle = style({
  color: "#FFFFFF",
  width: "85%",
});

const caviarHandImgStyle = style(
  { width: 350 },
  media(DeviceSmallDesktop, {
    marginTop: 50,
    width: 450,
  }),
  media(DeviceLRTablets, {
    marginTop: 50,
  }),
  media(DeviceSmartphones, {
    marginTop: 50,
  }),
  media(DeviceSmartphonesExtraSmall, { width: 250, marginTop: 25 })
);

const contactButtonStyle = style(
  {
    backgroundColor: "#D99D55 !important",
    color: "#FFFFFF !important",
    borderRadius: "0px !important",
    width: 340,
    height: 50,
  },
  media(DeviceSmartphonesExtraSmall, { width: 250 })
);
