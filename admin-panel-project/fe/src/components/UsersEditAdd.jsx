import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

export default function UsersEditAdd({ id }) {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData();
    console.log(id);
    console.log(users);
    if (id) {
      setIsUpdate(true);
      console.log("Edit user");
      const filteredUser = users.filter((user) => {
        if (user.id == id) {
          console.log("user.id = ", user.id);
          console.log("id = ", id);
          return user;
        }
      })[0];
      console.log(filteredUser);
      if (filteredUser) {
        setCurrentUser({
          id: filteredUser.id,
          firstname: filteredUser.firstname,
          lastname: filteredUser.lastname,
          phonenumber: filteredUser.phonenumber,
          email: filteredUser.email,
        });
      }
    }
    // else {
    //   setIsUpdate(false);
    //   console.log("Adding new user");
    // }
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost: 8080/users
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    setUsers(FETCHED_JSON.data);
    console.log("Fetch users");
    console.log(users);
  }

  async function handleSubmit(e) {
    console.log("Save button clicked");

    e.preventDefault();

    console.log(" firstname: " + e.target.firstname.value);
    console.log(" lastname: " + e.target.lastname.value);
    console.log(" phonenumber: " + e.target.phonenumber.value);
    console.log(" email: " + e.target.email.value);
    // console.log(" role: " + e.target.role.value);
    // console.log(" disabled: " + e.target.disabled.value);
    // console.log(" password: " + e.target.password.value);

    // if (!isUpdate) {
    const postData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phonenumber: e.target.phonenumber.value,
      email: e.target.email.value,
      // role: e.target.role.value,
      // disabled: e.target.disabled.value,
      // password: e.target.password.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    // } else {
    //   console.log("sending update");
    //   const putData = {
    //     id: currentUser.id,
    //     username: currentUser.username,
    //     age: currentUser.age,
    //   };
    //   const options = {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(putData),
    //   };

    //   const FETCHED_DATA = await fetch(URL, options);
    //   const FETCHED_JSON = await FETCHED_DATA.json();
    //   setUsers(FETCHED_JSON.data);
    //   setIsUpdate(false);
    //   setCurrentUser(newUser);
    // }
  }

  function handleReset() {
    console.log("Reset button clicked");
  }

  function handleCancel() {
    console.log("Cancel button clicked");
  }

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
        Add Users
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 3,
          }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstname"
            value={currentUser.firstname}
            // onChange={handleFirstName}
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastname"
            value={currentUser.lastname}
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phonenumber"
            value={currentUser.phonenumber}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={currentUser.email}
          />

          <Box>
            {" "}
            <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="role"
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="admin"
                name="admin"
              />
              <FormControlLabel
                value="user"
                control={<Radio />}
                label="user"
                name="user"
              />
            </RadioGroup>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel>Disabled</FormLabel>
            <FormControlLabel control={<Checkbox />} name="disabled" />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormLabel>Avatar</FormLabel>
            <Button variant="contained" sx={{ width: 180 }}>
              UPLOAD AN IMAGE
            </Button>
          </Box>

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
          />

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button variant="contained" type="submit">
              SAVE
            </Button>
            <Button variant="outlined" onClick={() => handleReset()}>
              RESET
            </Button>
            <Button variant="outlined" onClick={() => handleCancel()}>
              CANCEL
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
}
