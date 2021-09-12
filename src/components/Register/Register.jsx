import React from "react";
// Material UI Component
import { TextField, Container, Typography, Button } from "@material-ui/core";
// React Helmet
import { Helmet } from "react-helmet";
// Formik and form validation
import { useFormik } from "formik";
import { registerValidationShema } from "./registerValidationSchema";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: { registerValidationShema },
    onSubmit: (values) => {
      alert(JSON.stringify(values, 2, null));
    },
  });

  return (
    <Container>
      {/* React Helmet */}
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit} >
        <Typography variant="h3" style={{ margin: "12px 0 " }} component="h3">
          Register
        </Typography>
        <TextField
          id="fullname"
          label="Fullname"
          type="text"
          required
          fullWidth
          size="small"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          error={formik.touched.fullname && formik.errors.fullname}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          fullWidth
          variant="outlined"
          size="small"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
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
