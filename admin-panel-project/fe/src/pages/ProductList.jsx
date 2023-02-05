import ProductsTable from "../components/ProductsTable";

export default function ProductList({ products, setProducts }) {
  return (
    <div>
      <h1>Product List</h1>
      <ProductsTable products={products} setProducts={setProducts} />
    </div>
  );
}
