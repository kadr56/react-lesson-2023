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
import { useNavigate } from "react-router-dom";

export default function UsersEditAdd({ id, users, setUsers }) {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
  };
  // const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
    // console.log(id);
    console.log(users, "users ===");
    if (id) {
      setIsUpdate(true);
      console.log("Edit user");
      const filteredUser = users.filter((user) => user.id === id)[0];

      // const filteredUser = users.filter((user) => {
      //   if (user.id === id) {
      //     console.log("user.id = ", user.id);
      //     console.log("id = ", id);
      //     return user;
      //   }
      // })[0];
      console.log(filteredUser);
      if (filteredUser) {
        setCurrentUser({
          ...currentUser,
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
    // console.log(FETCHED_JSON.data);
    // console.log(users);
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

    if (!isUpdate) {
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
    } else {
      console.log("sending update");
      const putData = {
        id: currentUser.id,
        firstname: currentUser.firstname,
        lastname: currentUser.lastname,
        phonenumber: currentUser.phonenumber,
        email: currentUser.email,
        // role: currentUser.role,
        // disabled: currentUser.disabled,
        // password: currentUser.password,
      };
      console.log(putData, "putdata");
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
      console.log(FETCHED_JSON.data, "FETCHED JSON");
      setIsUpdate(false);
      setCurrentUser(newUser);
    }
    navigate("/user/list");
  }

  async function handleEdit(userId) {
    console.log("edit");
    setIsUpdate(true);

    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentUser({
        ...currentUser,
        id: filteredUser.id,
        firstname: filteredUser.firstname,
        lastname: filteredUser.lastname,
        phonenumber: filteredUser.phonenumber,
        email: filteredUser.email,
      });
    }
  }

  function handleFirstName(e) {
    setCurrentUser({
      ...currentUser,
      firstname: e.target.value,
    });
  }

  function handleLastName(e) {
    setCurrentUser({
      ...currentUser,
      lastname: e.target.value,
    });
  }

  function handleLastName(e) {
    setCurrentUser({
      ...currentUser,
      lastname: e.target.value,
    });
  }

  function handlePhoneNumber(e) {
    setCurrentUser({
      ...currentUser,
      phonenumber: e.target.value,
    });
  }

  function handleEmail(e) {
    setCurrentUser({
      ...currentUser,
      email: e.target.value,
    });
  }

  function handleReset() {
    console.log("Reset button clicked");
  }

  function handleCancel() {
    console.log("Cancel button clicked");
  }

  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
          {isUpdate ? "Edit user" : "Add Users"}
        </Typography>
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
            onChange={handleFirstName}
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastname"
            value={currentUser.lastname}
            onChange={handleLastName}
          />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phonenumber"
            value={currentUser.phonenumber}
            onChange={handlePhoneNumber}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={currentUser.email}
            onChange={handleEmail}
          />

          {/* <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={currentUser.email}
            onChange={handleEmail}

          /> */}

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
