import React, { FC, useEffect } from "react";
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
} from "@mui/material";
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
import toast, { Toaster } from "react-hot-toast";
import { Field, Formik, Form } from "formik";
import emailjs from "emailjs-com";

import NavBar from "../components/NavBar";
import Footer from "../components/GenericFooter";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Merci de saisir un Prénom"),
  lastname: Yup.string().required("Merci de saisir un Nom"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  eventType: Yup.string().required("Merci de choisir un type d'évenement"),
  numberOfPerson: Yup.string().required(
    "Merci de choisir le nombre de personnes"
  ),
});

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
  const [part, setPart] = React.useState(false);
  const [pro, setPro] = React.useState(false);
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

  const firstFormHandleChangePart = (setFieldValue) => {
    setPart(!part);
    setFieldValue("pro", true);
    setFieldValue("typePerson", "Particulier");
  };

  const firstFormHandleChangePro = (setFieldValue) => {
    setPro(!pro);
    setFieldValue("pro", true);
    setFieldValue("typePerson", "Professionel");
  };

  const handleSubmitFirstForm = (values, setSubmitting) => {
    setSubmitting(true);
    try {
      emailjs
        .send(
          "service_1n3w5wr",
          "template_g55zlwh",
          values,
          "user_N3e4bBvSd9Z6FbHzwk5SW"
        )
        .then(
          () => {
            toast.success("Votre demande à bien été transmise", {
              position: "bottom-right",
            });
            setSubmitting(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch {
      console.log("toto");
    }
  };

  const handleSubmitSecondForm = (values) => {
    try {
      emailjs
        .send(
          "service_cf2mg4i",
          "template_k98vzsi",
          values,
          "user_SbJL0vKhTMtQhu8xgBtOi"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch {
      console.log("toto");
    }
  };

  return (
    <>
      <Grid container>
        <NavBar />
        {/* <Grid item xs={12}>
          <motion.img
            ref={ref}
            src={detailsHeaderImage}
            style={{ width: "100%", opacity }}
          />
        </Grid> */}
        <Grid
          className={marginGridStyle}
          container
          justifyContent="space-around"
        >
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                part: false,
                pro: false,
                eventType: "",
                numberOfPerson: "",
                additional: "",
                typePerson: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={() => {}}
            >
              {({
                values,
                setFieldValue,
                setSubmitting,
                setFieldTouched,
                isSubmitting,
                errors,
                touched,
                isValid,
              }) => {
                return (
                  <Form>
                    <h1 style={{ fontFamily: "Cookie", color: "#D99D55" }}>
                      Demander un devis
                    </h1>
                    <InputLabel>Vous êtes :</InputLabel>
                    <FormControlLabel
                      onChange={() => firstFormHandleChangePart(setFieldValue)}
                      control={<Checkbox />}
                      labelPlacement="start"
                      label="Un particulier"
                      value={values.part}
                      name="part"
                    />
                    <FormControlLabel
                      onChange={() => firstFormHandleChangePro(setFieldValue)}
                      control={<Checkbox />}
                      labelPlacement="start"
                      label="Un professionel"
                      value={values.pro}
                      name="pro"
                    />

                    <InputLabel style={{ marginTop: 10 }}>Prénom :</InputLabel>
                    <Field
                      name="firstname"
                      component={TextField}
                      required={true}
                      style={{ marginTop: 10 }}
                      fullWidth
                      variant="outlined"
                      value={values.firstname}
                      onChange={(e) => {
                        setFieldValue("firstname", e.target.value);
                        setFieldTouched("firstname", true);
                      }}
                      onBlur={() => setFieldTouched("firstname", true)}
                    />
                    {errors.firstname && touched.firstname ? (
                      <div>{errors.firstname}</div>
                    ) : null}
                    <InputLabel style={{ marginTop: 10 }}>Nom :</InputLabel>
                    <Field
                      name="lastname"
                      component={TextField}
                      required={true}
                      style={{ marginTop: 10 }}
                      fullWidth
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("lastname", e.target.value);
                        setFieldTouched("lastname", true);
                      }}
                      onBlur={() => setFieldTouched("lastname", true)}
                    />
                    {errors.lastname && touched.lastname ? (
                      <div>{errors.lastname}</div>
                    ) : null}

                    <InputLabel style={{ marginTop: 10 }}>Email :</InputLabel>
                    <Field
                      name="email"
                      component={TextField}
                      required={true}
                      style={{ marginTop: 10 }}
                      fullWidth
                      variant="outlined"
                      onChange={(e) => {
                        setFieldValue("email", e.target.value);
                        setFieldTouched("email", true);
                      }}
                      onBlur={() => setFieldTouched("email", true)}
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}

                    <InputLabel style={{ marginTop: 10 }}>
                      Type d’événement :
                    </InputLabel>
                    <Field
                      component={Select}
                      as="select"
                      name="eventType"
                      required={true}
                      style={{ marginTop: 10 }}
                      fullWidth
                      label="Type d'évenement :"
                      value={values.eventType}
                      onChange={(e) => {
                        setFieldValue("eventType", e.target.value);
                        setFieldTouched("eventType", true);
                      }}
                      onBlur={() => setFieldTouched("eventType", true)}
                    >
                      <MenuItem value={"Déjeuner"}>Déjeuner</MenuItem>
                      <MenuItem value={"Soirée"}>Soirée</MenuItem>
                      <MenuItem value={"Dîner"}>Dîner</MenuItem>
                      <MenuItem value={"Mariage"}>Mariage</MenuItem>
                      <MenuItem value={"Anniversaire"}>Anniversaire</MenuItem>
                      <MenuItem value={"Séminaire"}>Séminaire</MenuItem>
                      <MenuItem value={"Autres"}>Autres</MenuItem>
                    </Field>
                    {errors.eventType && touched.eventType ? (
                      <div>{errors.eventType}</div>
                    ) : null}

                    <InputLabel style={{ marginTop: 10 }}>
                      Si autre précisez :
                    </InputLabel>
                    <Field
                      component={TextField}
                      required={true}
                      style={{ marginTop: 10 }}
                      multiline
                      rows={6}
                      maxRows={10}
                      fullWidth
                      name="additional"
                      onChange={(e) => {
                        setFieldValue("additional", e.target.value);
                      }}
                    />

                    <InputLabel style={{ marginTop: 10 }}>
                      Nombre de personne :
                    </InputLabel>
                    <Field
                      as="select"
                      component={Select}
                      style={{ marginTop: 10 }}
                      fullWidth
                      label="Nombres de personnes :"
                      value={values.numberOfPerson}
                      onChange={(e) => {
                        setFieldValue("numberOfPerson", e.target.value);
                        setFieldTouched("numberOfPerson", true);
                      }}
                      onBlur={() => setFieldTouched("numberOfPerson", true)}
                      name="numberOfPerson"
                    >
                      <MenuItem value="Moins de 50">0 - 50</MenuItem>
                      <MenuItem value="Entre 50 et 100">50 - 100</MenuItem>
                      <MenuItem value="Entre 100 et 150">100 - 150</MenuItem>
                      <MenuItem value="Plus de 150">+ 150</MenuItem>
                    </Field>
                    {errors.numberOfPerson && touched.numberOfPerson ? (
                      <div>{errors.numberOfPerson}</div>
                    ) : null}

                    <Grid
                      item
                      xs={12}
                      alignItems={"center"}
                      display="flex"
                      justifyContent="center"
                    >
                      <LoadingButton
                        style={{
                          width: 200,
                          backgroundColor: "#D99D55",
                          marginTop: 30,
                        }}
                        disabled={!isValid || isSubmitting}
                        loading={isSubmitting}
                        variant="contained"
                        type="submit"
                        onClick={() =>
                          handleSubmitFirstForm(values, setSubmitting)
                        }
                      >
                        ENVOYEZ
                      </LoadingButton>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Formik
              initialValues={{ name: "", number: "", email: "", message: "" }}
              onSubmit={(values) => {
                handleSubmitSecondForm(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <h1 style={{ fontFamily: "Cookie", color: "#D99D55" }}>
                    Contactez-nous
                  </h1>
                  <GenericText className={genericTextStyle}>
                    Contactez-nous via le formulaire de contact, pour toute
                    demande de renseignements
                  </GenericText>
                  <TextField
                    placeholder="Nom"
                    style={{ marginTop: 10 }}
                    fullWidth
                    name="name"
                    variant="outlined"
                    onChange={(e) => {
                      setFieldValue("name", e.target.value);
                    }}
                  />
                  <TextField
                    placeholder="Numéro de téléphone"
                    style={{ marginTop: 10 }}
                    fullWidth
                    name="number"
                    variant="outlined"
                    onChange={(e) => {
                      setFieldValue("number", e.target.value);
                    }}
                  />

                  <TextField
                    placeholder="Email"
                    style={{ marginTop: 10 }}
                    fullWidth
                    name="email"
                    variant="outlined"
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                    }}
                  />

                  <TextField
                    style={{ marginTop: 10 }}
                    multiline
                    rows={6}
                    maxRows={10}
                    fullWidth
                    name="message"
                    onChange={(e) => {
                      setFieldValue("message", e.target.value);
                    }}
                  />
                  <Grid
                    item
                    xs={12}
                    alignItems={"center"}
                    display="flex"
                    justifyContent="center"
                  >
                    <Button
                      style={{
                        width: 200,
                        backgroundColor: "#D99D55",
                        marginTop: 30,
                      }}
                      variant="contained"
                      type="submit"
                    >
                      ENVOYEZ
                    </Button>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
      <Toaster />
      <Footer />
    </>
  );
}

const marginGridStyle = style({
  margin: 25,
});

const genericTextStyle = style({
  fontSize: "18px",
  fontFamily: "Roboto",
  color: "black",
  fontWeight: 400,
});
