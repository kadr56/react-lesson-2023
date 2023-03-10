import React from "react";
import { useNavigate } from "react-router-dom";
export default function CategoryForm() {
  const URL = "http://localhost:8080/category";
  const navigate = useNavigate();

  async function handleCategorySubmit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        catName: e.target.catName.value,
        isEdit: false,
      }),
    };

    console.log(options);
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    if (FETCHED_JSON.status === "success") {
      navigate("/category/list");
    }
  }

  return (
    <div>
      <h1>Category form</h1>
      <form onSubmit={handleCategorySubmit}>
        <input type="text" name="catName" />
        <br></br>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
