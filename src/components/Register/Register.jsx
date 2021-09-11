import React from "react";
// Material UI Component
import { TextField, Container, Typography, Button } from "@material-ui/core";

const Register = () => {
  return (
    <Container>
      <Typography variant="h3" style={{ margin: "12px 0 " }} component="h3">
        Login
      </Typography>
      <TextField
        id="fullname"
        label="Fullname"
        type="text"
        required
        fullWidth
        size="small"
        variant="outlined"
        helperText="Please enter you fullname"
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        required
        fullWidth
        variant="outlined"
        size="small"
        helperText="Please enter you email"
      />
      <TextField
        id="password"
        type="password"
        variant="outlined"
        label="Password"
        fullWidth
        size="small"
        helperText="Please enter your Password"
      />
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </Container>
  );
};

export default Register;
