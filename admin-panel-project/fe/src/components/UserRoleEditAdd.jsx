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

export default function UserRoleEditAdd({ id, userRole, setUserRole }) {
  const URL = "http://localhost:8080/userRole";
  const newUserRole = {
    id: "",
    roleName: "",
  };
  // const [userRole, setUserRole] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUserRole, setCurrentUserRole] = useState(newUserRole);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
    console.log(id);
    console.log(userRole, "userRole ===");
    if (id) {
      setIsUpdate(true);
      console.log("Edit userRole");
      const filteredUserRole = userRole.filter((role) => role.id === id)[0];

      // const filteredUserRole = userRole.filter((userRole) => {
      //   if (userRole.id === id) {
      //     console.log("userRole.id = ", userRole.id);
      //     console.log("id = ", id);
      //     return userRole;
      //   }
      // })[0];
      console.log(filteredUserRole);
      if (filteredUserRole) {
        setCurrentUserRole({
          ...currentUserRole,
          id: filteredUserRole.id,
          roleName: filteredUserRole.roleName,
          // lastname: filteredUserRole.lastname,
          // phonenumber: filteredUserRole.phonenumber,
          // email: filteredUserRole.email,
        });
      }
    }
    // else {
    //   setIsUpdate(false);
    //   console.log("Adding new userRole");
    // }
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost: 8080/userRole
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    console.log(FETCHED_JSON, "at line 68 FETCHED JSON =");
    setUserRole(FETCHED_JSON);
    console.log("Fetch userRole");
    // console.log(FETCHED_JSON.data);
    // console.log(userRole);
  }

  async function handleSubmit(e) {
    console.log("Save button clicked");

    e.preventDefault();

    console.log(" roleName: " + e.target.roleName.value);
    // console.log(" lastname: " + e.target.lastname.value);
    // console.log(" phonenumber: " + e.target.phonenumber.value);
    // console.log(" email: " + e.target.email.value);
    // console.log(" role: " + e.target.role.value);
    // console.log(" disabled: " + e.target.disabled.value);
    // console.log(" password: " + e.target.password.value);

    if (!isUpdate) {
      console.log("create new User role");
      const postData = {
        roleName: e.target.roleName.value,
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
      console.log(FETCHED_JSON);
      setUserRole(FETCHED_JSON);
      console.log(userRole);
    } else {
      console.log("sending update");
      const putData = {
        id: currentUserRole.id,
        roleName: currentUserRole.roleName,
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
      setUserRole(FETCHED_JSON);
      console.log(FETCHED_JSON, "FETCHED JSON");
      setIsUpdate(false);
      setCurrentUserRole(newUserRole);
    }
    navigate("/userRole/list");
  }

  async function handleEdit(userId) {
    console.log("edit");
    setIsUpdate(true);

    const filteredUserRole = userRole.filter((role) => role.id === userId)[0];
    if (filteredUserRole) {
      setCurrentUserRole({
        ...currentUserRole,
        id: filteredUserRole.id,
        roleName: filteredUserRole.roleName,
        // lastname: filteredUserRole.lastname,
        // phonenumber: filteredUserRole.phonenumber,
        // email: filteredUserRole.email,
      });
    }
  }

  function handleRoleName(e) {
    setCurrentUserRole({
      ...currentUserRole,
      roleName: e.target.value,
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
          {isUpdate ? "Edit user role" : "Add user role"}
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
            label="Role name"
            variant="outlined"
            name="roleName"
            value={currentUserRole.roleName}
            onChange={handleRoleName}
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
