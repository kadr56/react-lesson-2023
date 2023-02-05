import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductsTable({ products, setProducts }) {
  const URL = "http://localhost:8080/products";
  // const [products, setProducts] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // fetch a data from localhost: 8080/products
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
    console.log(products, 'products')
  }

  async function handleDelete(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        productId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }

  // function handleEdit(id) {}

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "name", headerName: "Name", width: 140 },
    { field: "price", headerName: "Price", width: 140 },
    { field: "image", headerName: "Image", width: 140 },
    { field: "quantity", headerName: "Quantity", width: 140, },
    { field: "size", headerName: "Size", width: 140 },
    { field: "color", headerName: "Color", width: 140 },
    { field: "category", headerName: "Category", width: 140 },
    { field: "description", headerName: "Description", width: 140 },

    {
      field: "Action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Link to={`/product/edit/${params.row.id}`}>
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

  return (
    <div style={{ height: 400, width: "100%" }}>
      {products && (
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
