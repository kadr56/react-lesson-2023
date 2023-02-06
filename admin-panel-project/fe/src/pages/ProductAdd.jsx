import ProductsEditAdd from "../components/ProductsEditAdd";
import Typography from "@mui/material/Typography";
// import UsersTable from "../components/UsersTable";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function ProductAdd({ products, setProducts }) {
  const link = [
    { linkName: "Ecommerce", link: "/" },
    { linkName: "Product Add ", link: "/product/add" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />
      <ProductsEditAdd products={products} setProducts={setProducts} />
    </div>
  );
}
