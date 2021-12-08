import React, { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import GenericText from "../components/GenericText";
import { style } from "typestyle";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import caviar from "../../../assets/caviar.svg";
import bari from "../../../assets/bari.svg";
import NavBar from "../components/NavBar";
import classnames from "classnames";

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
    <Grid container>
      <NavBar />
      <Grid item xs={12}>
        <motion.img
          ref={ref}
          src={detailsHeaderImage}
          style={{ width: "100%", opacity }}
        />
      </Grid>
      <Grid
        container
        justifyContent={{
          md: "space-around",
          lg: "center",
          xl: "space-around",
        }}
        alignItems="center"
        className={caviarDetailsContainer}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <h1 className={titleStyle}>Nos bars à caviar</h1>
          <GenericText className={textStyle}>
            Nos bars à caviar Chaque espèce d’esturgeons à ses caractéristiques
            de goût, de texture et de taille d’oeufs. Ainsi Gourmet Event Paris
            par sa sélection vous guidera selon vos préférences vos attentes à
            faire votre choix. Cette gamme est susceptible d’évoluer suivant les
            saisons et les pêches.
          </GenericText>
        </Grid>
        <Grid
          item
          xs={12}
          sm={0}
          md={6}
          lg={6}
          xl={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={caviar} />
        </Grid>
      </Grid>
      <div style={{ backgroundColor: "#0F0F20" }}>
        <FadeInWhenVisible>
          <Grid container className={caviarDetailsContainer}>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="center"
              xs={12}
              sm={3}
              md={3}
              lg={3}
            >
              <img src={bari} style={{ width: "141px" }} />
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={8}>
              <h1 className={titleStyle}>Caviar Bari</h1>
              <GenericText
                className={classnames(textStyle, customWhiteTextStyle)}
              >
                Le caviar Baeri est issu de l’esturgeon Sibérien Acipenser
                Baeri. Mesurant 0,5m à 1m en captivité pour un poids de 7Kg à
                30Kg. Il peut atteindre une taille de 3m à l’état sauvage. Il
                faut 5 à 7 ans pour que les premiers grains apparaissent. C’est
                l’espèce la plus répandue en Europe. En France, le caviar
                d’Aquitaine est produit à partir de cetet espèce. Le caviar
                Baeri a des petits grains qui se détachent aisement avec une
                texture délicate. Ses nuances sont de couleurs assez sombres au
                goût minéral franc et iodé.
              </GenericText>
            </Grid>
          </Grid>
        </FadeInWhenVisible>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Divider
            variant="middle"
            style={{ width: "80%", backgroundColor: "white" }}
          />
        </Grid>

        <Grid container className={caviarDetailsContainer}>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={3}
            md={3}
            lg={3}
          >
            <img src={bari} style={{ width: "141px" }} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={8}>
            <h1 className={titleStyle}>Caviar Oscietre</h1>
            <GenericText
              className={classnames(textStyle, customWhiteTextStyle)}
            >
              Le caviar Osciètre est issu de l’esturgeon Guidenstaedti et
              Acipenser et Persicus. Ce poisson est endémique de la mer
              Caspienne et la mer noire. Il a une taille moyenne mesurant de
              1,5m à 2m. Son poids varie de 80Kg à 200Kg. Il faut 8 à 9ans pour
              élever cet esturgeons à maturité sexuelle. Ses grains délivrés
              sont moyens, fermes et fondants à la fois. La couleur de ce caviar
              peut aller d’un gris anthracite à une couleur mordoré. Sa saveur
              particulièrement délicate présente des notes de noisette avec une
              belle longueur en bouche.
            </GenericText>
          </Grid>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Divider
            variant="middle"
            style={{ width: "80%", backgroundColor: "white" }}
          />
        </Grid>
        <Grid container className={caviarDetailsContainer}>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={3}
            md={3}
            lg={3}
          >
            <img src={bari} style={{ width: "141px" }} />
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <h1 className={titleStyle}> Caviar Schrenki </h1>
            <GenericText
              className={classnames(textStyle, customWhiteTextStyle)}
            >
              Le caviar Schrenki est issu de l’esturgeon Acipenser Dauricus
              Schrenki. Ce poisson vit à l’état dauvage sur le fleuve Amour
              séparant la Russie de la Chine. Sa taille varie de 1,2m à 2m et
              son poids peut atteindre plus de 100Kg. Il atteint sa maturité
              sexuelle en élevage autour des 9ans, période nécessaire pour nous
              délivrer un caviar envoutant et unique. Ses grains sont de taille
              moyenne et fermes arborant une sublime couleur dorée. Faiblement
              iodé et peu salé, il séduit par ses notes sensuelles. Un produit
              d’exception qui a la faveur des grands chefs.
            </GenericText>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

const titleStyle = style({
  color: "#D99D55",
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
});
