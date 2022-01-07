import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Formik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { firebaseAuth } from "../../utils/utils";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { navigate } from "gatsby";

const SignIn = () => {
  React.useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user && history) {
        navigate("/admin/create");
      }
    });
  }, []);

  const onSubmit = (values: any) => {
    signInWithEmailAndPassword(firebaseAuth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigate("/admin/create");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
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
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {/* <ReCAPTCHA
                    sitekey="6LcClcUdAAAAAOIYwebziz28PI3L7lqoro8ZpPwk"
                    onChange={(x) => console.log(x)}
                  /> */}
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Connexion
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
