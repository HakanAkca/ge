import React, { FC, useEffect } from "react";
import { Box, Grid, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { doc, getDoc } from "firebase/firestore";

import NavBar from "../components/NavBar";
import GenericCard from "../components/GenericCard";
import { style } from "typestyle";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

  // const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  return (
    <div style={{ backgroundColor: "#B3B3B3" }}>
      <div
        style={{ marginLeft: 90, marginRight: 90, backgroundColor: "#FFFFFF" }}
      >
        <Grid container>
          <NavBar />
          <Grid item xs={12}>
            <motion.img
              ref={ref}
              src={detailsHeaderImage}
              style={{ width: "100%", opacity }}
            />
          </Grid>
          <Box className={boxStyle} sx={{ flexGrow: 1 }}>
            <h1 style={{ fontFamily: "Cookie" }}>Nos derniers évenements</h1>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={2}
                  key={index}
                >
                  <GenericCard />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

const boxStyle = style({
  margin: 50,
});
