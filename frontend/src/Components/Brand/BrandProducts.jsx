import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import { useParams, NavLink } from "react-router-dom";

const BrandProducts = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][brands][id]=${id}`
  );

  const products = data?.data || [];

  return (
    <div className="container py-4">
      <div className="row">
        <div className="brand-title d-flex">
          <NavLink to="/" className="nav-title">
            <h4>Home</h4>
          </NavLink>
          <h4 className="px-2">
            <span className="px-2">/</span>
            {data?.data?.[0]?.brands?.[0]?.title}
          </h4>
        </div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default BrandProducts;
