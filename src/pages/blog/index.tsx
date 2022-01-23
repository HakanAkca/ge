import React, { FC, useEffect, useState } from "react";
import { Box, Grid, Modal, styled, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { style, media } from "typestyle";
import { useInView } from "react-intersection-observer";
import { collection, getDocs } from "firebase/firestore";

import NavBar from "../components/NavBar";
import GenericCard from "../components/GenericCard";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import { firestore } from "../../utils/utils";
import { DeviceSmartphones } from "../../utils/devices";
import { Carousel } from "react-responsive-carousel";
import GenericText from "../components/GenericText";
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
  const [data, setData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

  const ref = React.useRef<HTMLImageElement>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  React.useEffect(async () => {
    let data = [];
    const db = firestore;
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc: any) => {
      data.push({
        title: doc.data().title,
        date: doc.data().date,
        description: doc.data().description,
        coverUrl: doc.data().coverUrl,
        multipleImageUrl: doc.data().multipleImageUrl,
      });
    });
    setData(data);
  }, []);

  const offsetHeight = 50;
  const { scrollY } = useViewportScroll();
  const yRange = useTransform(scrollY, [imageHeight - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });
  console.log("SELECTED DATA", selectedData);
  return (
    <div style={{ backgroundColor: "#2A2A3A" }}>
      <div className={sideMarginStyle}>
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
            <h1
              style={{
                fontFamily: "Cookie",
                color: "#D99D55",
                marginBottom: "3.5%",
                fontSize: 48,
              }}
            >
              Nos derniers évenements
            </h1>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
            >
              {data &&
                data.map((x, index) => (
                  <Grid
                    display="flex"
                    justifyContent={{
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "center",
                      xl: "flex-start",
                    }}
                    alignItems="center"
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={index}
                  >
                    <GenericCard
                      data={x}
                      handleOpen={handleOpen}
                      setSelectedData={setSelectedData}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={modalStyle}>
          <Carousel showStatus={false} showThumbs={false}>
            {selectedData &&
              selectedData.multipleImageUrl &&
              selectedData.multipleImageUrl.length > 0 &&
              selectedData.multipleImageUrl.map((x) => {
                return (
                  <>
                    <img src={x} />
                    <GenericText className={modalDescriptionStyle}>
                      {selectedData && selectedData.description}
                    </GenericText>
                  </>
                );
              })}
          </Carousel>
        </Box>
      </Modal>
    </div>
  );
}

const sideMarginStyle = style(
  {
    marginLeft: 150,
    marginRight: 150,
    backgroundColor: "#FFFFFF",
  },
  media(DeviceSmartphones, {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#FFFFFF",
  })
);

const boxStyle = style({
  margin: "0px 50px 50px",
});

const modalStyle = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 958,
});

const modalDescriptionStyle = style({
  fontSize: 18,
  backgroundColor: "#0F0F20",
  padding: 15,
});
