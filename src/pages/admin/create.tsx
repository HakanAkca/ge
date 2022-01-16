import React from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  TextField,
  Box,
  Container,
  CssBaseline,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import { Formik } from "formik";
import { firestore } from "../../utils/utils";
import { collection, addDoc } from "firebase/firestore";

// Add a new document with a generated id.

const Create = () => {
  const [date, setDate] = React.useState(new Date());

  const onSubmit = async (values) => {
    const db = firestore;
    const docRef = await addDoc(collection(db, "posts"), {
      title: values.title,
      description: values.description,
      date: values.date,
    });
  };
  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{ title: "", description: "", date: "" }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <TextField
                onChange={(e) => setFieldValue("title", e.target.value)}
                required
                fullWidth
                id="title"
                label="Titre"
                name="title"
                autoComplete="Titre"
                margin="dense"
                autoFocus
              />
              <TextareaAutosize
                onChange={(e) => setFieldValue("description", e.target.value)}
                required
                id="description"
                name="description"
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                style={{ width: 1400, height: 400 }}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item style={{ marginTop: 10 }}>
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={values.date}
                    onChange={(e) => setFieldValue("date", e)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </LocalizationProvider>
              {/* <ReCAPTCHA
                sitekey="6LcClcUdAAAAAOIYwebziz28PI3L7lqoro8ZpPwk"
                onChange={(x) => console.log(x)}
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Envoyer
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Create;
