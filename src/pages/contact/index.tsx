import React, { FC, useEffect } from "react";
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
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

import NavBar from "../components/NavBar";
import detailsHeaderImage from "../../../assets/detailsHeaderImage.svg";
import { Formik } from "formik";

interface Props {
  children: React.ReactNode;
  event: any;
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

export default function Contact() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);
  const [imageHeight, getImageHeight] = React.useState<number>(0);
  const ref = React.useRef<HTMLImageElement>(null);
  const [age, setAge] = React.useState(50);
  const [part, setPart] = React.useState(false);
  const [pro, setPro] = React.useState(false);
  const [eventType, setEventType] = React.useState("dejeuner");
  // const [pro, setPro] = React.useState(false);

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

  const handleChangeAge = (event) => {
    console.log(event);
    setAge(event.target.value);
  };

  const handleChangePart = (event) => {
    console.log(event);
    setPart(event.target.checked);
  };

  const handleChangeEventType = (event) => {
    console.log(event);
    setEventType(event.target.checked);
  };

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
      <Grid className={marginGridStyle} container justifyContent="space-around">
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <h1>Demander un devis</h1>
                <InputLabel>Vous êtes :</InputLabel>
                <FormControlLabel
                  onChange={(event) => handleChangePart(event)}
                  control={<Checkbox />}
                  labelPlacement="start"
                  label="Un particulier"
                />
                <FormControlLabel
                  onChange={(event) => handleChangePart(event)}
                  control={<Checkbox />}
                  labelPlacement="start"
                  label="Un professionel"
                />

                <InputLabel>Type d’événement :</InputLabel>
                <Select
                  fullWidth
                  // style={{ width: 300 }}
                  label="Nombres de personnes :"
                  value={eventType}
                  onChange={(event) => handleChangeEventType(event)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"dejeuner"}>Dejeuner</MenuItem>
                  <MenuItem value={100}>50-100</MenuItem>
                  <MenuItem value={200}>100-200</MenuItem>
                </Select>

                <InputLabel>Nombres de personnes :</InputLabel>
                <Select
                  fullWidth
                  // style={{ width: 300 }}
                  label="Nombres de personnes :"
                  value={age}
                  onChange={(event) => handleChangeAge(event)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={50}>0-50</MenuItem>
                  <MenuItem value={100}>50-100</MenuItem>
                  <MenuItem value={200}>100-200</MenuItem>
                </Select>
                <Button variant="contained">Contained</Button>
              </form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <h1>Contactez-nous</h1>
                <InputLabel>Vous êtes :</InputLabel>
                <FormControlLabel
                  onChange={(event) => handleChangePart(event)}
                  control={<Checkbox />}
                  labelPlacement="start"
                  label="Un particulier"
                />
                <FormControlLabel
                  onChange={(event) => handleChangePart(event)}
                  control={<Checkbox />}
                  labelPlacement="start"
                  label="Un professionel"
                />
                <InputLabel>Nombres de personnes :</InputLabel>
                <Select
                  fullWidth
                  label="Nombres de personnes :"
                  value={age}
                  onChange={(event) => handleChangeAge(event)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={50}>0-50</MenuItem>
                  <MenuItem value={100}>50-100</MenuItem>
                  <MenuItem value={200}>100-200</MenuItem>
                </Select>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
}

const marginGridStyle = style({
  margin: 25,
});
