import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
  console.log("Related Products filter: ", { productId, categoryId });

  const { data } = useFetch(
    `/api/products?populate=*&[filters][id][$ne]=${productId}&[filters][categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  console.log("Related Products after filter: ", { data });

  return (
    <div className="related-product">
      <Products headingText="Related Products" products={data?.data} />
    </div>
  );
};

export default RelatedProducts;
