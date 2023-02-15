import React from "react";
import { TextField } from "@mui/material";
import { Button, Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    if (FETCHED_JSON.status === "success") {
      toast.success("You are approved to login");
      navigate("/users");
    } else {
      toast.error(FETCHED_JSON.status);
    }

    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              variant="filled"
              size="small"
              defaultValue=""
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              type="password"
              variant="filled"
              size="small"
              defaultValue=""
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
