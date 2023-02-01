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

export default function UsersEditAdd() {
  //   const URL = "http://localhost:8080/users";
  //   const [users, setUsers] = useState(false);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   async function fetchData() {
  //     // fetch a data from localhost: 8080/users
  //     const FETCHED_DATA = await fetch(URL);
  //     const FETCHED_JSON = await FETCHED_DATA.json();
  //     setUsers(FETCHED_JSON.data);
  //   }

  function handleSubmit() {
    console.log("Submit button clicked");
  }

  function handleSave() {
    console.log("Save button clicked");
  }

  return (
    <div style={{ width: "100%" }}>
      <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
        Add Users
      </Typography>
      <FormControl>
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
          />

          <TextField id="outlined-basic" label="Last Name" variant="outlined" />

          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />

          <TextField id="outlined-basic" label="Email" variant="outlined" />

          <Box>
            {" "}
            <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="admin"
              />
              <FormControlLabel value="user" control={<Radio />} label="user" />
            </RadioGroup>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel>Disabled</FormLabel>
            <FormControlLabel control={<Checkbox />} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormLabel>Avatar</FormLabel>
            <Button variant="contained" sx={{ width: 180 }}>
              UPLOAD AN IMAGE
            </Button>
          </Box>

          <TextField id="outlined-basic" label="Password" variant="outlined" />

          <Box sx={{ display: "flex", gap: 3 }}>
            <Button variant="contained" onClick={() => handleSave()}>
              SAVE
            </Button>
            <Button variant="outlined" onClick={() => handleReset()}>
              RESET
            </Button>
            <Button variant="outlined" onClick={() => handleCancel}>
              CANCEL
            </Button>
          </Box>
        </Box>
      </FormControl>
    </div>
  );
}
