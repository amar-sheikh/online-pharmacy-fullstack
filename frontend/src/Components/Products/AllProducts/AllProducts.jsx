import useFetch from "../../../hooks/useFetch";
import Products from "../Products";

const AllProducts = () => {
  const { data } = useFetch("/api/products?populate=*");

  const products = data?.data || [];

  return (
    <div className="container">
      <Products products={products} title="Health Products" />
    </div>
  );
};

export default AllProducts;
