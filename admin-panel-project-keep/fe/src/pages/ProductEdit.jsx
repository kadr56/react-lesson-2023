import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ProductsEditAdd from "../components/ProductsEditAdd";
// import UsersTable from "../components/UsersTable";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function ProductEdit({ products, setProducts }) {
  const data = useParams();
  const link = [
    { linkName: "Ecommerce", link: "/" },
    { linkName: "Product List ", link: "/product/list" },
    { linkName: "Product Edit ", link: "/product/edit" },
  ];

  return (
    <div>
      <MyBreadCrumbs link={link} />
      <ProductsEditAdd
        id={data.id}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
}
