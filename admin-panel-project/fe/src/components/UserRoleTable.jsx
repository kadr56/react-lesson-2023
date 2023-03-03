import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserRoleTable({ userRole, setUserRole }) {
  const URL = "http://localhost:8080/userRole";
  // const [userRole, setUserRole] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // fetch a data from localhost: 8080/userRole
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();

    console.log(FETCHED_JSON);
    setUserRole(FETCHED_JSON);
    // console.log(FETCHED_JSON.data)
    // if (userRole) {
    //   console.log(userRole, "UserTable userRole = ");
    // }
  }

  async function handleDelete(id) {
    console.log(id, "delete id");
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserRole(FETCHED_JSON.data);
  }

  // function handleEdit(id) {}

  const columns = [
    { field: "id", headerName: "Role ID", width: 140 },
    { field: "user_role_name", headerName: "Role name", width: 140 },

    {
      field: "Action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Link to={`/userRole/edit/${params.row.id}`}>
                <Button variant="outlined" color="success">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  // const rows = userRole;

  return (
    <div style={{ height: 400, width: "100%" }}>
      {userRole && (
        <DataGrid
          rows={userRole}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
