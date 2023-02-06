import ProductsTable from "../components/ProductsTable";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";
import Link from "@mui/material/Link";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function ProductList({ products, setProducts }) {
  const link = [
    { linkName: "Ecommerce", link: "/" },
    { linkName: "Product List ", link: "/product/list" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />
      <h1>Product List</h1>
      <ProductsTable products={products} setProducts={setProducts} />
    </div>
  );
}
