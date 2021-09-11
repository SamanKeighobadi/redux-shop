import React from "react";
// Material UI Component
import { Typography, Button, TextField, Container } from "@material-ui/core";

const Login = () => {
  return (
    <Container>
      <Typography variant="h3" style={{ margin: "12px 0" }} component="h3">
        Login
      </Typography>
      <TextField
        type="email"
        fullWidth
        id="email"
        label="Email"
        size="small"
        required
        variant="outlined"
        helperText="Please enter your email"
      />
      <TextField
        type="password"
        fullWidth
        id="password"
        label="Password"
        required
        size="small"
        variant="outlined"
        helperText="Please enter your password"
      />
      <Button type="submit" variant="contained" color="primary" size="small">
        Submit
      </Button>
    </Container>
  );
};

export default Login;
