import React from "react";
// Material UI Component
import { Typography, Button, TextField, Container } from "@material-ui/core";
// React Helmet
import { Helmet } from "react-helmet";
// Formik and form validation
import { useFormik } from "formik";
import { loginValidationShema } from "./loginValidationShcema";
import {useStyles} from '../customHooks/useStyles'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationShema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles()

  return (
    <Container maxWidth={'sm'}  >
      {/* React Helmet */}
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h3" style={{ margin: "12px 0" }} component="h3">
          Login
        </Typography>
        <TextField
        className={classes.textInput}
          type="email"
          fullWidth
          id="email"
          label="Email"
          size="small"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
        className={classes.textInput}
          type="password"
          fullWidth
          id="password"
          label="Password"
          size="small"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" variant="contained" color="primary" size="small">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Login;
