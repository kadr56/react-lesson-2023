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

export default function CategoriesEditAdd({ id, categories, setCategories }) {
  const URL = "http://localhost:8080/categories";
  const newCategory = {
    id: "",
    categoryName: "",
  };
  // const [categories, setCategories] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(newCategory);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
    // console.log(id);
    console.log(categories, "categories ===");
    if (id) {
      setIsUpdate(true);
      console.log("Edit Category");
      const filteredCategory = categories.filter(
        (category) => category.id === id
      )[0];

      // const filteredCategory = categories.filter((category) => {
      //   if (category.id === id) {
      //     console.log("category.id = ", category.id);
      //     console.log("id = ", id);
      //     return category;
      //   }
      // })[0];
      console.log(filteredCategory);
      if (filteredCategory) {
        setCurrentCategory({
          ...currentCategory,
          id: filteredCategory.id,
          categoryName: filteredCategory.categoryName,
        });
      }
    }
    // else {
    //   setIsUpdate(false);
    //   console.log("Adding new category");
    // }
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost: 8080/categories
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    setCategories(FETCHED_JSON.data);
    console.log("Fetch categories");
    // console.log(FETCHED_JSON.data);
    // console.log(categories);
  }

  async function handleSubmit(e) {
    console.log("Save button clicked");

    e.preventDefault();

    console.log(" categoryName: " + e.target.categoryName.value);

    if (!isUpdate) {
      const postData = {
        categoryName: e.target.categoryName.value,
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
      setCategories(FETCHED_JSON.data);
    } else {
      console.log("sending update");
      const putData = {
        id: currentCategory.id,
        catergoryName: currentCategory.firstname,
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
      setCategories(FETCHED_JSON.data);
      console.log(FETCHED_JSON.data, "FETCHED JSON");
      setIsUpdate(false);
      setCurrentCategory(newCategory);
    }
    navigate("/category/list");
  }

  async function handleEdit(categoryId) {
    console.log("edit");
    setIsUpdate(true);

    const filteredCategory = categories.filter(
      (category) => category.id === categoryId
    )[0];
    if (filteredCategory) {
      setCurrentCategory({
        ...currentCategory,
        id: filteredCategory.id,
        categoryName: filteredCategory.categoryName,
      });
    }
  }

  function handleCategoryName(e) {
    setCurrentCategory({
      ...currentCategory,
      categoryName: e.target.value,
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
          {isUpdate ? "Edit category" : "Add category"}
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
            label="Category Name"
            variant="outlined"
            name="categoryName"
            value={currentCategory.categoryName}
            onChange={handleCategoryName}
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
