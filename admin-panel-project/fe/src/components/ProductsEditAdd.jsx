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

export default function ProductsEditAdd({ id, products, setProducts }) {
  const URL = "http://localhost:8080/products";
  const newProduct = {
    id: "",
    name: "",
    price: "",
    image: "",
    quantity: "",
    size: "",
    color: "",
    category: "",
    description: "",
  };
  // const [products, setProducts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(newProduct);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
    // console.log(id);
    console.log(products, "products ===");
    if (id) {
      setIsUpdate(true);
      console.log("Edit product");
      const filteredProduct = products.filter((product) => product.id === id)[0];

      // const filteredProduct = products.filter((product) => {
      //   if (product.id === id) {
      //     console.log("product.id = ", product.id);
      //     console.log("id = ", id);
      //     return product;
      //   }
      // })[0];
      console.log(filteredProduct);
      if (filteredProduct) {
        setCurrentProduct({
          ...currentProduct,
          id: filteredProduct.id,
          name: filteredProduct.name,
          price: filteredProduct.price,
          image: filteredProduct.image,
          quantity: filteredProduct.quantity,
          size: filteredProduct.size,
          color: filteredProduct.color,
          category: filteredProduct.category,
          description: filteredProduct.description,
        });
      }
    }
    // else {
    //   setIsUpdate(false);
    //   console.log("Adding new product");
    // }
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost: 8080/products
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    setProducts(FETCHED_JSON.data);
    console.log("Fetch products");
    // console.log(FETCHED_JSON.data);
    // console.log(products);
  }

  async function handleSubmit(e) {
    console.log("Save button clicked");

    e.preventDefault();

    console.log(" name: " + e.target.name.value);
    console.log(" price: " + e.target.price.value);
    console.log(" image: " + e.target.image.value);
    console.log(" quantity: " + e.target.quantity.value);
    // console.log(" role: " + e.target.role.value);
    // console.log(" disabled: " + e.target.disabled.value);
    // console.log(" password: " + e.target.password.value);

    if (!isUpdate) {
      const postData = {
        name: e.target.name.value,
        price: e.target.price.value,
        image: e.target.image.value,
        quantity: e.target.quantity.value,
        size: e.target.size.value,
        color: e.target.color.value,
        category: e.target.category.value,
        description: e.target.description.value,
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
      setProducts(FETCHED_JSON.data);
    } else {
      console.log("sending update");
      const putData = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        quantity: currentProduct.quantity,
        size: currentProduct.size,
        color: currentProduct.color,
        categery: currentProduct.categery,
        description: currentProduct.description,


      };
      console.log(putData, "putdata")
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setProducts(FETCHED_JSON.data);
      console.log(FETCHED_JSON.data, "FETCHED JSON")
      setIsUpdate(false);
      setCurrentProduct(newProduct);
    }
    navigate("/product/list");
  }

  async function handleEdit(productId) {
    console.log("edit");
    setIsUpdate(true);

    const filteredProduct = products.filter((product) => product.id === productId)[0];
    if (filteredProduct) {
      setCurrentProduct({
        ...currentProduct,
        id: filteredProduct.id,
        name: filteredProduct.name,
        price: filteredProduct.price,
        image: filteredProduct.image,
        quantity: filteredProduct.quantity,
        size: filteredProduct.size,
        color: filteredProduct.color,
        category: filteredProduct.category,
        description: filteredProduct.description,
      });
    }
  }

  function handleName(e) {
    setCurrentProduct({
      ...currentProduct,
      name: e.target.value,
    });
  }

  function handlePrice(e) {
    setCurrentProduct({
      ...currentProduct,
      price: e.target.value,
    });
  }


  function handleImage(e) {
    setCurrentProduct({
      ...currentProduct,
      image: e.target.value,
    });
  }

  function handleQuantity(e) {
    setCurrentProduct({
      ...currentProduct,
      quantity: e.target.value,
    });
  }

  function handleSize(e) {
    setCurrentProduct({
      ...currentProduct,
      size: e.target.value,
    });
  }

  function handleColor(e) {
    setCurrentProduct({
      ...currentProduct,
      color: e.target.value,
    });
  }

  function handleCategory(e) {
    setCurrentProduct({
      ...currentProduct,
      category: e.target.value,
    });
  }

  function handleDescription(e) {
    setCurrentProduct({
      ...currentProduct,
      description: e.target.value,
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
      <Typography variant="h5" color="initial" sx={{ mb: 2 }}>

        {isUpdate ? "Edit product" : "Add Product"}
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
            label="Image"
            variant="outlined"
            name="image"
            value={currentProduct.image}
            onChange={handleImage}
          />

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={currentProduct.name}
            onChange={handleName}
          />

          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
            value={currentProduct.price}
            onChange={handlePrice}
          />



          <TextField
            id="outlined-basic"
            label="Stock Quantity"
            variant="outlined"
            name="quantity"
            value={currentProduct.quantity}
            onChange={handleQuantity}
          />

          <TextField
            id="outlined-basic"
            label="size"
            variant="outlined"
            name="size"
            value={currentProduct.size}
            onChange={handleSize}
          />

          <TextField
            id="outlined-basic"
            label="color"
            variant="outlined"
            name="color"
            value={currentProduct.color}
            onChange={handleColor}
          />

          <TextField
            id="outlined-basic"
            label="category"
            variant="outlined"
            name="category"
            value={currentProduct.category}
            onChange={handleCategory}
          />

          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
            name="description"
            value={currentProduct.description}
            onChange={handleDescription}
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
