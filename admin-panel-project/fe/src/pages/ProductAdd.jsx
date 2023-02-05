import ProductsEditAdd from "../components/ProductsEditAdd";
import Typography from "@mui/material/Typography";
// import UsersTable from "../components/UsersTable";

export default function ProductAdd({ products, setProducts }) {
  return (
    <div>
      {/* <Typography variant="h4" color="initial"></Typography> */}
      <ProductsEditAdd products={products} setProducts={setProducts} />
    </div>
  );
}
