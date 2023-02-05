import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ProductsEditAdd from "../components/ProductsEditAdd";
// import UsersTable from "../components/UsersTable";

export default function ProductEdit({ products, setProducts }) {
  // console.log("Inside UserEdit component ---")
  // console.log(users, "User")

  const data = useParams();
  // console.log(data);
  // console.log(users, "users in user EDIT");
  return (
    <div>
      {/* <Typography variant="h4" color="initial"></Typography> */}
      <ProductsEditAdd id={data.id} products={products} setProducts={setProducts} />
    </div>
  );
}
