import React, { useState } from "react";
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
  InputLabel,
} from "@mui/material";
import { Formik } from "formik";
import { firestore } from "../../utils/utils";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  uploadBytesResumable,
} from "firebase/storage";

// Add a new document with a generated id.

const Create = () => {
  const [image, setImage] = useState(null);
  const [imageMultiple, setMultipleImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const onSubmit = async (values) => {
    const db = firestore;
    await addDoc(collection(db, "posts"), {
      title: values.title,
      description: values.description,
      date: values.date,
      coverUrl: url,
      multipleImageUrl: imageMultiple,
    });
  };

  const handleChangeImage = (e) => {
    if (e) {
      setImage(e);
      const storage = getStorage();
      const storageRef = ref(storage, `images/${e.name}`);
      console.log(e);
      const uploadTask = uploadBytesResumable(storageRef, e);

      uploadTask.on("state_changed", (snapshot: any) => {
        getDownloadURL(snapshot.ref).then((URL) => {
          setUrl(URL);
        });
      });
    }
  };

  const uploadMultipleImages = (e) => {
    const data = [];
    if (e) {
      setMultipleImage(e);
      const storage = getStorage();
      Array.from(e).forEach((file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        uploadBytesResumable(storageRef, file)
          .then((e) => {
            getDownloadURL(e.ref)
              .then((URL) => {
                console.log("URL", URL);
                data.push(URL);
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));
      });
      setMultipleImage(data);
    }
  };

  console.log("HERE", imageMultiple);

  return (
    <Grid
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      container
      style={{ padding: 50 }}
    >
      <Grid item xs={12}>
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
              <Grid display={"flex"} alignItems={"center"} item>
                <Grid xs={3}>
                  <TextField
                    onChange={(e) => setFieldValue("title", e.target.value)}
                    required
                    id="title"
                    label="Titre"
                    name="title"
                    autoComplete="Titre"
                    margin="dense"
                    autoFocus
                  />
                </Grid>
                <Grid xs={3}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Date de l'évenement"
                      inputFormat="dd/MM/yyyy"
                      value={values.date}
                      onChange={(e) => setFieldValue("date", e)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <TextareaAutosize
                onChange={(e) => setFieldValue("description", e.target.value)}
                required
                id="description"
                name="description"
                maxRows={4}
                aria-label="Description"
                placeholder="Description"
                style={{ width: "100%", height: 200 }}
              />

              <Grid item>
                <InputLabel style={{ marginTop: 50 }}>
                  Photo de couverture
                </InputLabel>
                {url && <img src={url} style={{ height: 300, width: 300 }} />}
                <input
                  type="file"
                  onChange={(e) => handleChangeImage(e.target.files[0])}
                />
              </Grid>
              <Grid item>
                <InputLabel style={{ marginTop: 50 }}>
                  Listes des photos
                </InputLabel>
                <input
                  type="file"
                  id="file"
                  multiple
                  name="file"
                  onChange={(e) => uploadMultipleImages(e.target.files)}
                />
              </Grid>

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
      </Grid>
    </Grid>
  );
};

export default Create;
