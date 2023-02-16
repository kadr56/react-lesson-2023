import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CategoryEditForm() {
  const { id } = useParams();
  console.log(id);
  const URL = "http://localhost:8080/category";
  //   const URL =
  const [category, setCategory] = useState({
    name: "Test",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategory(FETCHED_JSON.data);
    }
  }

  function handleInputChange(e) {
    setCategory(e.target.value);
  }
  async function handleEditSubmit(e) {
    e.preventDefault();
    console.log(e.target.categoryName.value);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
        categoryName: e.target.categoryName.value,
        isEdit: true,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      navigate("/category/list");
    }
  }
  return (
    <div>
      <h1>Category Edit form</h1>
      <form onSubmit={handleEditSubmit}>
        <input
          name="categoryName"
          value={category.name}
          onChange={handleInputChange}
        />
        <br></br>
        <button>Edit save</button>
      </form>
    </div>
  );
}
