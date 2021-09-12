import React from "react";
// Material UI Component
import {
  TextField,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
// React Helmet
import { Helmet } from "react-helmet";
// Formik and form validation
import { useFormik } from "formik";
import { registerValidationShema } from "./registerValidationSchema";
import { useStyles } from "../customHooks/useStyles";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationShema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, 2, null));
    },
  });

  const classes = useStyles();

  return (
    <Container>
      {/* React Helmet */}
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <Typography className={classes.title} variant="h3" style={{ margin: "12px 0 " }} component="h3">
          Register
        </Typography>
        <TextField
          className={classes.textInput}
          id="fullname"
          label="Fullname"
          type="text"
          fullWidth
          size="small"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          error={formik.touched.fullname && formik.errors.fullname}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
        <TextField
          className={classes.textInput}
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          size="small"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className={classes.textInput}
          id="password"
          type="password"
          variant="outlined"
          label="Password"
          fullWidth
          size="small"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Register;
