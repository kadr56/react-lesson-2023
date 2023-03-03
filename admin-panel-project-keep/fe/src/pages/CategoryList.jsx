import ProductsTable from "../components/ProductsTable";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";
import Link from "@mui/material/Link";
import MyBreadCrumbs from "../components/MyBreadCrumbs";
import CategoriesTable from "../components/CategoriesTable";

export default function CategoryList({ categories, setCategories }) {
  const link = [
    { linkName: "Category", link: "/" },
    { linkName: "Category List ", link: "/category/list" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />
      <h1>Category List</h1>
      <CategoriesTable categories={categories} setCategories={setCategories} />
    </div>
  );
}
